import { Link } from 'react-router-dom';
import './_Card.scss';

const Card = ({ id, image, name, ability }) => {
  return (
    <Link to={`/pokemon/${id}`} className="card__container">
      <figure key={id} className="card__figure">
        <img src={image} alt={name} />
        <figcaption>
          <p>{name}</p>
          <p>{ability}</p>
        </figcaption>
      </figure>
    </Link>
  );
};

export default Card;
