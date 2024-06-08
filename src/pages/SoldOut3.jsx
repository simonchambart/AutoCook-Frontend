import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import { Link } from 'react-router-dom';
import { recordClick } from '../api/index';

const handleClick = (clickDetail) => {
  recordClick(clickDetail);
};

function Soldout3() {
 
  return (
    <div className="container mt-5">
      <h1 className="mb-4 text-center">Gepersonaliseerde Maaltijden</h1>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="alert alert-info text-center">
            Wij zijn helaas volledig uitverkocht, ontvang 25% korting op uw volgende aankoop ter compensatie bij registratie van een account.
          </div>
          <div className="text-center mt-3">
              <div className="d-flex w-100 justify-content-center mb-2">
                <button type="button" className="btn btn-success">
                <Link className="nav-link" to="/register" onClick={() => handleClick('RegistreerKnop Vanuit Gepersonaliseerde-Maaltijden-Scherm')}>Registreer</Link>
                </button>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Soldout3;
