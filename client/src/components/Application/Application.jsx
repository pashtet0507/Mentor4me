import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllApplicationMentor, getAllApplicationStudent } from '../../redux/applicationSlice';
import ApplicationFormbutt from './ApplicationFormbutt';
import ApplicationFormMentor from './ApplicationFormMentor';
import './ApplicationFormMentor.css';

export default function Application() {
  const user = useSelector((store) => store.user);
  const allApplications = useSelector((store) => store.application);
  const dispatch = useDispatch();
  useEffect(() => {
    user?.mentor ? dispatch(getAllApplicationMentor()) : dispatch(getAllApplicationStudent());
  }, [user]);

  return (
    <div>
      <h2 className="headerStyle">Мои заявки:</h2>
      {user?.mentor === true ? (
        <div
          className="cards_container"
          style={{
            griDAutoFlow: 'dense',
            display: 'grid',
            gap: '30px',
            flexWrap: 'wrap',
            gridTemplateColumns: 'repeat(auto-fit, 20rem)',
            justifyContent: 'center',
            marginTop: '50px',
          }}
        >

          {allApplications.length > 0 ? (
            <>
              {allApplications.map((el) => <ApplicationFormMentor el={el} />)}
            </>
          ) : (
            <span>Заявок пока нет.</span>
          )}
        </div>
      )
        : (
          <div
            className="cards_container"
            style={{
              griDAutoFlow: 'dense',
              display: 'grid',
              gap: '1rem',
              flexWrap: 'wrap',
              gridTemplateColumns: 'repeat(auto-fit, 20rem)',
              justifyContent: 'center',
              marginTop: '50px',
            }}
          >

            {allApplications.length > 0 ? (
              <>
                {allApplications.map((el) => <ApplicationFormbutt el={el} />)}
              </>
            ) : (
              <span>Заявок пока нет.</span>
            )}
          </div>
        )}
    </div>
  );
}
