const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const userInfoRouter = require('./routes/userInfoRouter');
const searchRouter = require('./routes/searchRouter');
const cropMentorPhotoRouter = require('./routes/cropMentorPhotoRouter');
const cropStudentPhotoRouter = require('./routes/cropStudentPhotoRouter');
const userAuthRouter = require('./routes/userAuthRouter');
const applicationRouter = require('./routes/applicationRouter');
const eventRouter = require('./routes/eventRouter');
const reviewsRouter = require('./routes/reviewsRouter');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// позволяет получить куку
app.use(cors({
  credentials: true,
  origin: true,
}));

app.use(morgan('dev'));
// app.use(express.static(__dirname));
// app.use(multer({ dest: 'uploads' }).single('filedata'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(session({
  name: 'sid',
  secret: process.env.SESSION_SECRET ?? 'test',
  resave: true,
  store: new FileStore(),
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 12,
    httpOnly: true,
  },
}));

app.use('/search', searchRouter);
app.use('/api', userInfoRouter);
app.use('/user', userAuthRouter);
app.use('/applications', applicationRouter);
app.use('/cropped/mentor', cropMentorPhotoRouter);
app.use('/cropped/student', cropStudentPhotoRouter);
app.use('/event', eventRouter);
app.use('/reviews', reviewsRouter);

app.listen(PORT, () => console.log(`Server has started on PORT ${PORT}`));
