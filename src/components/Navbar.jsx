import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/Auth.context';

export default function Navbar() {
  const {isAuthed} = useAuth();

  return (
    <nav className={`navbar sticky-top mb-4`}>
      <div className="container-fluid flex-column flex-sm-row align-items-start align-items-sm-center">
        {
          isAuthed
          ? (
          <div className="nav-item my-2 mx-sm-3 my-sm-0">
            <Link className="nav-link" to="/logout">Logout</Link>
          </div>
        )
        : (
          <>
          <div className="nav-item my-2 mx-sm-3 my-sm-0">
            <Link className="nav-link" to="/login">Login</Link>
          </div>
          </>
        )
        }
        <div className="nav-item my-2 mx-sm-3 my-sm-0">
          <Link className="nav-link" to="/home">Logo</Link>
        </div>
        <div className="nav-item my-2 mx-sm-3 my-sm-0">
          <Link className="nav-link" to="/basket">Basket</Link>
        </div>
      </div>
    </nav>
  );
}