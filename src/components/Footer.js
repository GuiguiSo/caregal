import React from 'react'
import Container from  'react-bootstrap/Container'
import Row from  'react-bootstrap/Row'
import ListGroup from  'react-bootstrap/ListGroup'
import Col from  'react-bootstrap/Col'

class Footer extends React.Component {


    render() {
        return (
            <div>
                <Container>
                    <Row >
                        <Col  xs={12} md={16}>
                            <ListGroup horizontal>
                                <ListGroup.Item variant="secondary" action href="Mention légale">Mention légale</ListGroup.Item>
                                <ListGroup.Item variant="secondary" action href="Condition d'utilisation">Condition d'utilisation </ListGroup.Item>
                            </ListGroup>
                            <ListGroup horizontal>
                                <ListGroup.Item variant="secondary" action href="Confidentialité">Confidentialité</ListGroup.Item>
                            </ListGroup>
                            <br/>
                            <p className='text-center'>2021 - NomDuSite - Tous droits réservés</p>
                            <p className='text-center'>Suivez-nous sur les réseaux sociaux</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Footer;