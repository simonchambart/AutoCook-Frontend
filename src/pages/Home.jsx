import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';

function Home() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-info">
      <div className="d-flex flex-column align-items-center">
        <button type="button" className="btn btn-warning rounded-circle mb-3 circular-button" >Button 1</button>
        <button type="button" className="btn btn-warning rounded-circle mb-3 circular-button">Button 2</button>
        <button type="button" className="btn btn-warning rounded-circle circular-button" >Button 3</button>
      </div>
    </div>
  );
}

export default Home;
