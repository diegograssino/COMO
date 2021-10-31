import { Spinner, Container } from 'react-bootstrap';

const MyLoader = () => {
  return (
    <Container fluid className="spinner">
      <Spinner className="me-2" animation="border" variant="primary" />
      Loading
    </Container>
  );
};

export default MyLoader;
