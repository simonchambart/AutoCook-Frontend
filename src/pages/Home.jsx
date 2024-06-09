import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import { Link } from 'react-router-dom';
import Spaghetti  from '../assets/Spaghetti.png';
import  Steak from '../assets/Steak.png';
import  Vegetables  from '../assets/Vegatables.png';
import { recordClick } from '../api/index';

const handleClick = (clickDetail) => {
  recordClick(clickDetail);
};

function Home() {
  return (
    <div className="home-container">
      <div className="pt-3">
        <div className="d-flex justify-content-center align-items-center">
          <div className="button-container d-flex flex-column align-items-center higher-buttons"> {/* Flex-direction en align-items aangepast */}
          <h3>Gewone Maaltijden</h3>
            <div className="text-center">
              <Link
                to="/soldout1"
                className="circular-button btn-1"
                style={{ backgroundImage: `url(${Spaghetti})` }}
                onClick={() => handleClick('Gewone Maaltijden')}
              />
            </div>
            <h3>Dieet Maaltijden</h3>
            <div className="text-center">
              <Link
                to="/soldout2"
                className="circular-button btn-2"
                style={{ backgroundImage: `url(${Vegetables})` }}
                onClick={() => handleClick('Dieet Maaltijden')}
              />
            </div>
            <h3>Gepersonaliseerde</h3>
            <h3>Maaltijden</h3>
            <div className="text-center">
              <Link
                to="/soldout3"
                className="circular-button btn-3"
                style={{ backgroundImage: `url(${Steak})` }}
                onClick={() => handleClick('Gepersonaliseerde Maaltijden')}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
