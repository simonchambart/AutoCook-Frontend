import { isAxiosError } from 'axios';

export default function Error({ error }) {

    // Als het het axios-fouts is voert hij deze statement uit
  if (isAxiosError(error)) { 
    return (
      <div className="alert alert-danger">
        <h4 className="alert-heading">Oops, something went wrong</h4>
        <p>
          { }
          {error.response?.data?.message || error.message}
          {error.response?.data?.details && (
            <>
              :
              <br />
              {JSON.stringify(error.response.data.details)}
            </>
          )}
        </p>
      </div>
    );
  }

  // Als het een andere error is dan voert hij deze statement uit
  if (error) {
    return (
      <div className="alert alert-danger">
        <h4 className="alert-heading">An unexpected error occured</h4>
        {error.message || JSON.stringify(error)}
      </div>
    );
  }


  // Als er geen error is dan wordt er geen 'error message' getoond op het scherm 
  return null; 
}