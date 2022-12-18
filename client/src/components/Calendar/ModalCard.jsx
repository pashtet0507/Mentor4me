/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import PropTypes from 'prop-types';
import {
  DialogTitle, Dialog, DialogContent, Button, DialogActions,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AddEvent from './AddEvent';
import { setActive } from '../../redux/modalSlice';
import { axiosSubmitEvent } from '../../redux/eventSlice';

export default function ModalCard() {
  const active = useSelector((s) => s.active);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [input, setInput] = useState({
    start: new Date(),
    end: new Date(),
    title: '',
    text: '',
  });

  const clickHandler = () => {
    dispatch(axiosSubmitEvent(input));
    console.log(input);
    dispatch(setActive());
    navigate('/calendar');
  };

  return (
    <Dialog open maxWidth="md" fullWidth>
      <DialogTitle>Добавить событие</DialogTitle>
      <DialogContent>
        <AddEvent input={input} setInput={setInput} />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => dispatch(setActive())}>Cancel</Button>
        <Button onClick={() => dispatch(setActive())}>Close</Button>
        <Button type="submit" onClick={() => clickHandler()}>Save</Button>
      </DialogActions>
    </Dialog>

  );
}
