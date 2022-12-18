import React, { useState } from 'react';
import DatePicker, { registerLocale, setDefaultLocale } from 'react-datepicker';
import { ru } from 'date-fns/locale';
import { useDispatch } from 'react-redux';
import { Box, TextField } from '@mui/material';
import Textarea from '@mui/joy/Textarea';

registerLocale('ru', ru);
export default function UpdateEvent({ modalContent, setInputGroup }) {
  const [startDate, setStartDate] = useState(new Date(modalContent.start));
  const [startEnd, setstartEnd] = useState(new Date(modalContent.end));
  const dispatch = useDispatch();

  const handleColorStart = (time) => (time.getHours() > 12 ? 'text-success' : 'text-error');
  const handleColorEnd = (time) => (time.getHours() > 12 ? 'text-success' : 'text-error');
  return (
    <>
      <Box sx={{ mb: 2 }}>
        <DatePicker
          locale="ru"
          showTimeSelect
          timeClassName={handleColorStart}
          dateFormat="dd/MM/yyyy HH:mm:ss"
          name="start"
          selected={modalContent.start}
          onChange={(date) => { setInputGroup({ ...modalContent, start: date }); }}
        />
      </Box>
      <Box sx={{ mb: 2 }}>
        <DatePicker
          locale="ru"
          showTimeSelect
          timeClassName={handleColorEnd}
          dateFormat="dd/MM/yyyy HH:mm:ss"
          name="end"
          selected={modalContent.end}
          onChange={(date) => { setInputGroup({ ...modalContent, end: date }); }}
        />
      </Box>
      <Box sx={{ mb: 2 }}>
        <TextField
          fullWidth
          id="fullWidth"
          style={{ marginTop: '30px' }}
          variant="standard"
          name="title"
          defaultValue={modalContent.title}
          onChange={(e) => setInputGroup({ ...modalContent, title: e.target.value })}

        />
      </Box>
      <Box sx={{ mb: 2 }}>
        <Textarea
          placeholder="Type in here…"
          minRows={2}
          maxRows={4}
          sx={{ minWidth: 30 }}
          name="text"
          defaultValue={modalContent.text}
          onChange={(e) => setInputGroup({ ...modalContent, text: e.target.value })}
        />
      </Box>
    </>
  );
}
