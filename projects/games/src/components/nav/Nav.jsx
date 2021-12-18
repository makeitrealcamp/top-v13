import { Link } from 'react-router-dom';
import './_Nav.css';
const Nav = () => {
  return (
    <>
      <Link to="/emoji" className="nav__link">
        Emoji
      </Link>
      <Link to="/gif" className="nav__link">
        Gif
      </Link>
      <Link to="/paint" className="nav__link">
        Paint
      </Link>
    </>
  );
};

export default Nav;
