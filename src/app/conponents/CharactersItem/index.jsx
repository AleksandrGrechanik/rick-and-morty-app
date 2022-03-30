import './style.css';
import { SelectEpisode } from "../SelectEpisode";

export function CharactersItem(props) {
 const { name, image, status, species, type, gender, location, episode} = props.item;

 console.log(props);

  return (
    <div className="character__wrapper">
      <div className="character__img-box">
        <img src={image} alt=""/>
      </div>
      <div className="character__desc-box">
        <div className="character__info">
          <p className="character__desc">Name</p>
          <p className="character__name">
            {name}
          </p>
        </div>
        <div className="character__info">
          <p className="character__desc">Status</p>
          <p className="character__name">
            {status}
          </p>
        </div>
        <div className="character__info">
          <p className="character__desc">Species</p>
          <p className="character__name">
            {species}
          </p>
        </div>
        <div className="character__info">
          <p className="character__desc">Type</p>
          <p className="character__name">
            {type}
          </p>
        </div>
        <div className="character__info">
          <p className="character__desc">Gender</p>
          <p className="character__name">
            {gender}
          </p>
        </div>
        <div className="character__info">
          <p className="character__desc">Location</p>
          <p className="character__name">
            {location.name}
          </p>
        </div>
        <div className="character__episodes-btn-box">
          <SelectEpisode episode={episode}/>
        </div>

      </div>
    </div>
  )
}
