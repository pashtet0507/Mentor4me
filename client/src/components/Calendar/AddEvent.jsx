import React, { useState } from 'react';
import DatePicker, { registerLocale, setDefaultLocale } from 'react-datepicker';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ru } from 'date-fns/locale';
import { Box, Input, TextField } from '@mui/material';
import Textarea from '@mui/joy/Textarea';

registerLocale('ru', ru);
export default function AddEvent({ input, setInput }) {
  const [startDate, setStartDate] = useState(new Date());
  const [startEnd, setstartEnd] = useState(new Date());
  // const [, setinputEvent] = useState({
  //   start: '',
  //   end: '',
  //   title: '',
  //   text: '',
  // });

  const handleColorStart = (time) => (time.getHours() > 12 ? 'text-success' : 'text-error');
  const handleColorEnd = (time) => (time.getHours() > 12 ? 'text-success' : 'text-error');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (

    <>
      <Box sx={{ mb: 2 }}>
        <DatePicker
          locale="ru"
          showTimeSelect
          selected={input.start}
          onChange={(date) => { setInput({ ...input, start: date }); }}
          timeClassName={handleColorStart}
          dateFormat="dd/MM/yyyy HH:mm:ss"
          name="start"
          value={input.start}
        />
      </Box>
      <Box sx={{ mb: 2 }}>
        <DatePicker
          locale="ru"
          showTimeSelect
          selected={input.end}
          onChange={(date) => { setInput({ ...input, end: date }); }}
          timeClassName={handleColorEnd}
          dateFormat="dd/MM/yyyy HH:mm:ss"
          name="end"
          value={input.end}
        />
      </Box>
      <Box sx={{ mb: 2 }}>
        <TextField
          fullWidth
          id="fullWidth"
          style={{ marginTop: '30px' }}
        // value={inputEvent.title}
        // onChange={(e) => setinputEvent(e.target.value)}
          label="Title:"
          variant="standard"
          name="title"
          value={input.title}
          onChange={(e) => setInput({ ...input, title: e.target.value })}
        />
      </Box>
      <Box sx={{ mb: 2 }}>
        <Textarea
          placeholder="Type in here…"
          minRows={2}
          maxRows={4}
          sx={{ minWidth: 30 }}
          name="text"
          value={input.text}
          onChange={(e) => setInput({ ...input, text: e.target.value })}
        />
      </Box>
    </>
  );
}
