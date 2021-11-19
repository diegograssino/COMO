import { Spinner, Container } from 'react-bootstrap';

const MyLoader = () => {
  return (
    <Container fluid className="spinner">
      <Spinner className="me-2" animation="border" />
      Cargando ...
    </Container>
  );
};

export default MyLoader;
