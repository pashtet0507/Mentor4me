import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showAllMentor } from '../../../redux/userInfoSlice';
import './Mentor.css';
import OneCardMentor from '../OneCardMentor';

export default function MentorPage() {
  const mentors = useSelector((state) => state.userInfo);
  const [numberMentors, setNumberMentors] = useState(3);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showAllMentor());
  }, []);

  const currMentor = mentors.slice(0, numberMentors);

  return (
    <section className="mentorBlock">
      <h2 className="title">Наши менторы</h2>
      {currMentor && currMentor?.map((el) => <OneCardMentor key={el.id} mentor={el} />)}
      <div className="btn">
        {numberMentors > currMentor.length ? (null) : (<button onClick={() => setNumberMentors(numberMentors + 3)} className="button-34" type="submit">Показать еще</button>)}

      </div>
    </section>

  );
}
