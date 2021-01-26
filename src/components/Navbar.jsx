import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import ListGroup from 'react-bootstrap/ListGroup'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import logo from '../img/Image1.png'





class Navbar extends React.Component {


  render() {
    return (
      <div>
        <img src={logo} alt='logo'/>
        <Container>
          <Row >
            <Col xs={12} md={16}>
              <ListGroup horizontal >
                <ListGroup.Item variant="secondary" action href="#bien-etre">Bien être</ListGroup.Item>
                <ListGroup.Item variant="secondary" action href="#spa">Spa</ListGroup.Item>
                <ListGroup.Item variant="secondary" action href="#healthy">Healthy</ListGroup.Item>
                <ListGroup.Item variant="secondary" action href="#nature">Nature</ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </Container>
        
      </div>
    );
  }

}

export default Navbar
