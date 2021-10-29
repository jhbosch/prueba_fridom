import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UserDetails from '../../component/UserDetails';
import UserContextProvider from '../../contexts/UserContext';
import './Details.css';

function Details() {
  return (
    <div className="Details">

        <Container>
          
          <Row className="justify-content-md-center">
            <Col xs={12} lg={8}>
              <h3 className="text-align-center">Detalles</h3>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card>
                <Card.Body>
                  <UserDetails />
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col xs={12} lg={3} className="text-align-center">
              <Link  to="/Users">
                Volver al listado
              </Link>  
            </Col>
          </Row>
        </Container>

    </div>  
  );
}

export default Details;
