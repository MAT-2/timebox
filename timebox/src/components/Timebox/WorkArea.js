import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function WorkArea() {
  return(
    <>
      <Container fluid="md" className="d-flex justify-content-center align-items-center">
        <Row className="justify-content-center">
          <Col xs="auto">
            <Card className="bg-white text-dark">
              <p>Hello there!</p>
            </Card>
          </Col>
        </Row>
      </Container>
      
    </>
  )
}