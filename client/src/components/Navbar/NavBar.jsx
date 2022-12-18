import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link, useNavigate } from 'react-router-dom';
import {
  Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getLogout } from '../../redux/userSlice';
import '../../App.css';

export default function NavBar() {
  const userIsAuth = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleClose = () => {
    setOpen(false);
  };

  const regMentorHandler = () => {
    navigate('/signup/mentor');
    handleClose();
  };

  const regStudentHandler = () => {
    navigate('/signup/student');
    handleClose();
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        style={{
          marginTop: '1%', backgroundColor: 'white', boxShadow: 'none', borderBottom: '1px solid black',
        }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link className="mainTextNavbar" to="/">MENTOR4ME</Link>
          </Typography>
          <Link className="linkInNav" to="/about">О нас</Link>
          <Link hidden={userIsAuth?.mentor} className="linkInNav" to="/mentor">Наши менторы</Link>

          {userIsAuth?.firstName ? (
            <>
              <Link hidden={userIsAuth?.mentor} className="linkInNav" to="/search">Поиск</Link>
              <Link hidden={!userIsAuth?.mentor} className="linkInNav" to="/calendar">Календарь</Link>
              <Link className="linkInNav" to="/applications">{userIsAuth?.mentor ? ('Заявки от студентов') : ('Заявки')}</Link>
              <Link className="linkInNav" to="/profile">
                {userIsAuth.photo ? (
                  <img
                    className="avatarProfile"
                    style={{
                      maxWidth: '60px', maxHeight: '60px', borderRadius: '50%', border: '2px solid rgb(195, 32, 245)', marginBottom: '10px',
                    }}
                    src={`/photos/${userIsAuth.photo}`}
                    alt="avatar"
                  />
                ) : (<img className="avatarProfile" src="data:image/png;base64,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" alt="avatar" />
                )}
              </Link>
              <Link
                className="linkInNav"
                onClick={() => {
                  window.location.href = '/';
                  dispatch(getLogout());
                }}
                to="/"
              >
                Выход

              </Link>
            </>
          ) : (
            <>
              <div>
                <Button
                  id="buttonInNav"
                  variant="outlined"
                  color="inherit"
                  onClick={handleOpen}
                >
                  Регистрация

                </Button>
                <Dialog
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                >
                  <DialogTitle id="alert-dialog-title" style={{ textAlign: 'center' }}>
                    Зарегистрироваться как Ментор или Студент?
                  </DialogTitle>
                  <DialogActions style={{
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                  >
                    <button onClick={regMentorHandler} className="button-35" type="button">Ментор</button>
                    <button onClick={regStudentHandler} className="button-35" type="button">Студент</button>
                  </DialogActions>
                </Dialog>
              </div>
              <Link className="linkInNav" to="/user/login">Авторизация</Link>
            </>
          )}

        </Toolbar>
      </AppBar>
    </Box>
  );
}
