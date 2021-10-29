import { useContext, useState } from 'react';
import { Card, Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UserList from '../../component/UserList';
import { UserContext } from '../../contexts/UserContext';
import './Users.css';

function Users() {
  const { userSelected } = useContext(UserContext);
  const [search, setSearch] = useState('');

  return (
    <div className="Users">

        <Container>
          <Row className="justify-content-md-center">
            <Col xs={12} lg={8}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control onChange={event => setSearch(event.target.value)} type="text" placeholder="Buscar usuario" />
              </Form.Group>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col xs={12} lg={8}>
              <h3 className="text-align-center">Lista de Usuarios</h3>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card>
                <Card.Body>
                  <UserList search={search} />
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col xs={12} lg={3} >
              <Link  to="/Details">
                <Form.Group className="mb-3 mt-3" controlId="formButton">
                  <Form.Control disabled={!userSelected} type="button" value="Detalles" />
                </Form.Group>
              </Link>  
            </Col>
          </Row>
        </Container>
      
    </div>  
  );
}

export default Users;
