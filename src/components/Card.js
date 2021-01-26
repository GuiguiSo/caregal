import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

class Cards extends React.Component {


    render() {
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={this.props.card.Img} />
                <Card.Body>
                    <Card.Title>{this.props.card.Title}</Card.Title>
                    <Card.Text>
                        {this.props.card.Text}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        );
    }
}

export default Cards