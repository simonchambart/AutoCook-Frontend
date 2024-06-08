import PropTypes from 'prop-types'; // Import PropTypes library
import { isAxiosError } from 'axios';

export default function Error({ error }) {
    // If it's an axios error, execute this statement
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

  // If it's another error, execute this statement
  if (error) {
    return (
      <div className="alert alert-danger">
        <h4 className="alert-heading">An unexpected error occured</h4>
        {error.message || JSON.stringify(error)}
      </div>
    );
  }

  // If there is no error, do not display an error message on the screen
  return null; 
}

// Define prop types for Error component
Error.propTypes = {
  error: PropTypes.object, // Define the error prop type as an object
};
