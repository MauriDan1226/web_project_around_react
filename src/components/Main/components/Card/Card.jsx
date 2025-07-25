import basura from "../../../../images/Trash.svg";
import corazon from "../../../../images/VectorCorazon.svg";

const Card = (props) => {
  console.log(props);
  return (
    <div className="card">
      <button className="card__trash" aria-label="Delete card" type="button">
        <img src={basura} alt="boton delate" className="card__trash" />
      </button>
      <img
        className="card__image"
        src={props.card.link}
        alt="fotografía de lago"
      />
      <div className="card__info">
        <p className="card__title">{props.card.name}</p>
        <button className="card__button" aria-label="Like card" type="button">
          <img src={corazon} alt="boton corazon" className="card__button" />
        </button>
      </div>
    </div>
  );
};

export default Card;
