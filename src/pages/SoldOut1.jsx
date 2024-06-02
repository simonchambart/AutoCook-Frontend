import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';

function Soldout1() {
  const [email, setEmail] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Hier kun je de logica toevoegen om het emailadres te verwerken, bijvoorbeeld een API-aanroep om de registratie te voltooien
    setEmail('');
    setIsRegistered(true);
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4 text-center">Maaltijden</h1>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="alert alert-info text-center">
            Wij zijn helaas volledig uitverkocht, ontvang 25% korting op uw volgende aankoop ter compensatie bij registratie van een account.
          </div>
          <div className="text-center mt-3">
            <form onSubmit={handleSubmit} className="d-flex justify-content-center align-items-center flex-column">
              <div className="d-flex w-100 justify-content-center mb-2">
                <input
                  type="email"
                  className="form-control me-2"
                  placeholder="Voer uw e-mailadres in"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  style={{ maxWidth: '300px' }}
                />
                <button type="submit" className="btn btn-success">
                  Registreer
                </button>
              </div>
              {isRegistered && (
                <div className="text-success mt-2">
                  U bent geregistreerd.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Soldout1;
