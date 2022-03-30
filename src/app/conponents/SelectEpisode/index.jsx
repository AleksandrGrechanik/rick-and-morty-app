import './style.css';
import { useState } from "react";
import selectClass from 'classnames';
import tvClass from 'classnames';
import TVImage from '../../pictures/episod-tv.png';

export function SelectEpisode(props) {
  const episode = props.episode;


  const [selectOptionState, setSelectOptionState] = useState(false);

  const showEpisode = selectClass({
    'select__wrapper': true,
    'active--element': selectOptionState,
  })

  const showTv = tvClass({
    "tv-img__box": true,
    "active--element": selectOptionState,
  })

  function showAllEpisodes() {
    setSelectOptionState(!selectOptionState);
  }




  return (
    <div className="select-box">
      <button className="show-episodes__btn" onClick={showAllEpisodes} >{!selectOptionState ? 'Show All Episodes' : 'Close Episodes'}</button>
      <div className={showTv}>
        <img src={TVImage} alt="TV"/>
      </div>
      <div className={showEpisode}>
        {episode.map(item => <div key={item.id} className="select__item">{item.name}</div>)}
      </div>
    </div>
  )
}
