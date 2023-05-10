import PropTypes from 'prop-types'
import "./charactercard.css";


const CharacterCard = (props) => {
    const {name, status, species, type, gender, origin, location, image, episode} = props
    
   return  (
  <article className="characterCard">
    <div className="characterImagen">
      <img
        src={image}
        alt="Blue Footprint Guy"
      />
    </div>
    <div className="characterContent">
      <div className="section">
        <h2>{name}</h2>
        <span className="status">
          <span className={`status__icon status__alive`}></span>
          {status} - {species}
        </span>
      </div>
      <div className="section">
        <span className="text-gray">Last known location: </span>
        <a href={location.url}>{location.name}</a>
      </div>
      <div className="section">
        <span className="text-gray">First seen in:</span>
        <a href={origin.url}>{origin.name}</a>
      </div>
    </div>
  </article>
);
   }
export default CharacterCard;

// CharacterCard.propTypes ={

// }