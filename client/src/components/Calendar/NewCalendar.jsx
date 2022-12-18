import React, {
  useCallback, useEffect, useMemo,
} from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { axiosEvent } from '../../redux/eventSlice';
import 'moment/locale/ru';
import { setActive } from '../../redux/modalSlice';
import { setModalContent } from '../../redux/modelContentSlice';
import { setActiveEdit } from '../../redux/modalSliceEdit';
import EditModalCard from './EditModalCard';
import ModalCard from './ModalCard';

moment.locale('ru');

const localizer = momentLocalizer(moment);

function NewCalendar() {
  const activeedit = useSelector((s) => s.activeedit);
  const active = useSelector((s) => s.active);

  // Отображение задачи в календаре
  const task = useSelector((store) => store.events);
  const dispatch = useDispatch();
  const event = task.map(
    (el) => (
      {
        end: new Date(el?.end),
        start: new Date(el?.start),
        title: el?.title,
        text: el?.text,
        id: el?.id,
      }
    ),
  );
  console.log(event);

  useEffect(() => {
    dispatch(axiosEvent());
  }, []);

  // Появление модального окна при клике на дату
  const onSelectSlot = useCallback(() => {
    console.log('selectfunc');
    dispatch(setActive());
  }, []);

  // смена языка календаря
  const { messages } = useMemo(
    () => ({
      messages: {
        week: 'Неделя',
        work_week: 'Рабочая неделя',
        day: 'День',
        month: 'Месяц',
        previous: 'Предыдущий',
        next: 'Следующий',
        today: 'Сегодня',
        agenda: 'Встречи',
        showMore: (total) => `+${total} еще`,
      },
    }),
    [],
  );

  // Появление модального окна при клике на ивент для редактирования
  const openEventClick = (ev) => {
    dispatch(setModalContent(ev)); // Создание слайсов на открыта/закрыта модалка вторая, слайс на контент модалки, в модалке подписаться на контент и на отображение
    dispatch(setActiveEdit());
    console.log('rjnfrhgrg', ev);
  };

  return (
    <div className="App">
      <h2 style={{ marginTop: '20px' }}>Календарь</h2>
      <Calendar
        localizer={localizer} //
        startAccessor="start"
        endAccessor="end"
        messages={messages} // для перевода на русский
        style={{ height: 500, margin: '50px' }}
        selectable // нужен для работы onSelectSlot и onSelectEvent
        popup // показывает вкладочку "еще"
        events={event}
        onSelectSlot={onSelectSlot} // добавление новой задачи при клике на дату
        onSelectEvent={openEventClick} // изменение ивента при клике на задачу
      />
      {activeedit
      && <EditModalCard />}
      {active
      && <ModalCard />}
    </div>
  );
}

export default NewCalendar;
