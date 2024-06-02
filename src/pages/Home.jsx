import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import { Link } from 'react-router-dom';
import MealsMenu from '../assets/Meals Menu.jpg';
import backgroundImg from '../assets/ingredients_background.jpg'; // Importeer de afbeelding

function Home() {
  return (
    <div style={{ backgroundImage: `url(${backgroundImg})`, backgroundSize: '115%', backgroundPosition: 'center', minHeight: '100vh' }}>
      <div className="pt-5">
        <h1 className="text-center title-under">Neem Uw Voorkeur Maaltijden</h1>
        <div className="d-flex justify-content-center align-items-center">
          <div className="d-flex flex-row align-items-center higher-buttons">
            <div className="text-center mx-3">
              <Link
                to="/soldout1"
                className="circular-button mb-2 btn-1"
                style={{ backgroundImage: `url(${MealsMenu})` }}
               />
              <h2>Gewone</h2>
              <h2> Maaltijden</h2>
            </div>
            <div className="text-center mx-3">
              <Link
                to="/soldout2"
                className="circular-button mb-2 btn-2"
                style={{ backgroundImage: `url(${MealsMenu})` }}
               />
              <h2>Dieet</h2>
              <h2>Maaltijden</h2>
            </div>
            <div className="text-center mx-3">
              <Link
                to="/soldout3"
                className="circular-button mb-2 btn-3"
                style={{ backgroundImage: `url(${MealsMenu})` }}
               />
              <h2>Gepersonaliseerde</h2>
              <h2> Maaltijden</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
