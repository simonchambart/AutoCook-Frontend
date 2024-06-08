import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/Auth.context';
import { recordClick } from '../api/index'; // Import the recordClick function

export default function Navbar() {
  const { isAuthed } = useAuth();

  const handleClick = (clickDetail) => {
    recordClick(clickDetail); // Call recordClick function to register the click
  };

  return (
    <nav className="navbar p-4 sticky-top text-white bg-success">
      <div className="container-fluid flex-column flex-sm-row align-items-start align-items-sm-center">
        {
          isAuthed
          ? (
            <div className="nav-item my-2 mx-sm-3 my-sm-0">
              <Link className="nav-link" to="/logout" onClick={() => handleClick('Logout')}>Logout</Link>
            </div>
          )
          : (
            <div className="nav-item my-2 mx-sm-3 my-sm-0">
              <Link className="nav-link" to="/login" onClick={() => handleClick('Login')}>
                <i className="bi bi-person-circle fs-3" />
              </Link>
            </div>
          )
        }
        <div className="nav-item my-2 mx-sm-3 my-sm-0">
          <Link className="nav-link" to="/home" onClick={() => handleClick('AutoCook')}><h3>AutoCook</h3></Link>
        </div>
        <div className="nav-item my-2 mx-sm-3 my-sm-0">
          <Link className="nav-link" to="/basket" onClick={() => handleClick('Basket')}>
            <i className="bi bi-cart2 fs-3" />
          </Link>
        </div>
      </div>
    </nav>
  );
}
