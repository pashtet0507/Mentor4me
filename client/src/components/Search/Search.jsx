import React from 'react';
import Slider from '@mui/material/Slider';
import { useDispatch, useSelector } from 'react-redux';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import { getSearch } from '../../redux/searchSlice';
import OneCardMentor from '../MainPage/OneCardMentor';
import './search.css';

function valuetext(valueOn) {
  return `${valueOn}°C`;
}

export default function Search() {
  const searchMentors = useSelector((store) => store.search);
  const dispatch = useDispatch();
  const [valueOn, setValue] = React.useState([0, 5000]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <form onSubmit={(e) => {
        e.preventDefault();
        console.log(valueOn);
        console.log(Object.fromEntries(new FormData(e.target)));
        const obj = Object.fromEntries(new FormData(e.target));
        dispatch(getSearch({ valueOn, obj }));
      }}

      >
        <div className="mainTextSearch">
          <span>Поиск ментора</span>
        </div>
        <div className="groupSearch">
          <input className="searchInput" name="title" type="text" placeholder="Введите желаемую специализацию" />
          <button className="searchButton" type="submit">
            <img src="./icons/Vector.png" alt="searchPhoto" />
          </button>
        </div>
        <div className="groupsInputsSearch">
          <div className="slider">
            <span className="textColumn">Цена за услугу</span>
            <Slider
              style={{ color: 'purple', maxWidth: '450px' }}
              max={5000}
              getAriaLabel={() => 'Price range'}
              value={valueOn}
              onChange={handleChange}
              valueLabelDisplay="auto"
              getAriaValueText={valuetext}
            />
            <div className="priceInputs">
              <input className="inputSearch" type="number" value={valueOn[0]} onChange={(e) => setValue((prev) => [Number(e.target.value), prev[1]])} />
              <img className="line" src="./icons/Line.png" alt="line" />
              <input className="inputSearch" type="number" value={valueOn[1]} onChange={(e) => setValue((prev) => [prev[0], Number(e.target.value)])} />
            </div>
          </div>
          <div className="raiting">
            <span className="textColumn">Рейтинг</span>
            <div className="listColumn">
              <input name="raiting" value="5" id="5" type="checkbox" />
              <label className="textLabel" htmlFor="5">5+</label>
            </div>
            <div className="listColumn">
              <input name="raiting" value="7" id="7" type="checkbox" />
              <label className="textLabel" htmlFor="7">7+</label>
            </div>
            <div className="listColumn">
              <input name="raiting" value="8" id="8" type="checkbox" />
              <label className="textLabel" htmlFor="8">8+</label>
            </div>
            <div className="listColumn">
              <input name="raiting" value="Любой" id="all" type="checkbox" />
              <label className="textLabel" htmlFor="all">Любой</label>
            </div>
          </div>
          <div className="format">
            <span className="textColumn">Формат консультации</span>
            <div className="listColumn">
              <input name="video" id="video" type="checkbox" />
              <label className="textLabel" htmlFor="video">Видео</label>
            </div>
            <div className="listColumn">
              <input name="call" id="call" type="checkbox" />
              <label className="textLabel" htmlFor="call">Звонок</label>
            </div>
            <div className="listColumn">
              <input name="chat" id="chat" type="checkbox" />
              <label className="textLabel" htmlFor="chat">Чат</label>
            </div>
          </div>
        </div>
      </form>
      {searchMentors.map((el) => <OneCardMentor key={el.id} mentor={el} />)}
    </>
  );
}
