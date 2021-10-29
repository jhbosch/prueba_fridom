import { Card, Col, Container, Form, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="App">
      <Container>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <Card >
              <Card.Body>
                <Card.Title>Aurous</Card.Title>
                
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Usuario</Form.Label>
                    <Form.Control type="text" placeholder="Enter userName" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Contrasena</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                </Form>
              </Card.Body>
              <Card.Footer>
                  
                  <Link to="/Users">
                    <Button onClick="" variant="primary" type="submit">
                      Entrar
                    </Button>
                  </Link>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col md="auto">
            
           </Col> 
        </Row>
      </Container>
      
    </div>  
  );
}

export default Home;
