import Loader from './Loader';
import Error from './Error';

export default function AsyncData({
  loading,
  error,
  children,   //wat getoond wordt indien response OK
}) {
  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Error error={error} />
      {children}
    </>
  );
}