import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-info">
      <div className="d-flex flex-column align-items-center">
        <Link to="/soldout1" className="btn btn-warning rounded-circle mb-3 circular-button">
          Button 1
        </Link>
        <Link to="/soldout2" className="btn btn-warning rounded-circle mb-3 circular-button">
          Button 2
        </Link>
        <Link to="/soldout3" className="btn btn-warning rounded-circle circular-button">
          Button 3
        </Link>
      </div>
    </div>
  );
}

export default Home;
