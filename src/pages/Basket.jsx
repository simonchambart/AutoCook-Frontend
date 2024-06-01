import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';

function Basket() {

  return (
    <div className="container mt-5">
      <h1 className="mb-4 text-center">Winkelmand</h1>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="alert alert-info text-center">
            Uw winkelmand is leeg
          </div>
        </div>
      </div>
    </div>
  );
}

export default Basket;
