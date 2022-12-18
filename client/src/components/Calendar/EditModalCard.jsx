/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  DialogTitle, Dialog, DialogContent, Button, DialogActions,
} from '@mui/material';
import { setActiveEdit } from '../../redux/modalSliceEdit';
import UpdateEvent from './UpdateEvent';
import { axiosDelete, axiosEdit } from '../../redux/eventSlice';
import { setActive } from '../../redux/modalSlice';

export default function EditModalCard() {
  const active = useSelector((s) => s.active);
  const modalContent = useSelector((s) => s.modalContent);
  const [inputGroup, setInputGroup] = useState({
    start: new Date(modalContent.start),
    end: new Date(modalContent.end),
    title: modalContent.title,
    text: modalContent.text,
  });
  // console.log((modalContent));
  const dispatch = useDispatch();
  const clickEditHandler = (input) => {
    dispatch(axiosEdit({ id: modalContent.id, input }));
  };
  return (
    <Dialog open maxWidth="md" fullWidth>
      <DialogTitle>Отредактировать</DialogTitle>
      <DialogContent>
        <UpdateEvent modalContent={inputGroup} setInputGroup={setInputGroup} />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => dispatch(setActiveEdit())}>Close</Button>
        <Button onClick={() => {
          clickEditHandler(inputGroup);
          dispatch(setActiveEdit());
        }}
        >
          Save changes

        </Button>
        <Button onClick={() => {
          dispatch(axiosDelete(modalContent.id));
          dispatch(setActiveEdit());
        }}
        >
          Delete

        </Button>
      </DialogActions>
    </Dialog>

  );
}
