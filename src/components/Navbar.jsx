import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/Auth.context';
import { recordClick } from '../api/index';

export default function Navbar() {
  const { isAuthed } = useAuth();

  const handleClick = (clickDetail) => {
    recordClick(clickDetail);
  };

  return (
    <nav className="navbar sticky-top text-white bg-success">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          {
            isAuthed
            ? (
              <div className="nav-item">
                <Link className="nav-link" to="/logout" onClick={() => handleClick('Logout')}>Logout</Link>
              </div>
            )
            : (
              <div className="nav-item">
                <Link className="nav-link" to="/login" onClick={() => handleClick('Login')}>
                  <i className="bi bi-person-circle fs-3" />
                </Link>
              </div>
            )
          }
        </div>
        <div className="d-flex align-items-center">
          <div className="nav-item">
            <Link className="nav-link" to="/home" onClick={() => handleClick('AutoCook')}><h3>AutoCook</h3></Link>
          </div>
        </div>
        <div className="d-flex align-items-center">
          <div className="nav-item">
            <Link className="nav-link" to="/basket" onClick={() => handleClick('Basket')}>
              <i className="bi bi-cart2 fs-3" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
