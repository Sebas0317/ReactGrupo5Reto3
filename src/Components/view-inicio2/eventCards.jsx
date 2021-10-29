import React from "react";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";

class EventCard extends React.Component {
    render(props) {
        return (
            <div>
                <Card className="cards bg-transparent  mt-5 mb-5 rounded-2" style={{ width: '300', margin: ' 10px 50px' }}>
                    <Card.Img variant="top" src={this.props.imagen} style={{width: '130px', height: '130px', margin: '0 auto'}}/>
                    <Card.Body>
                        <Card.Title className="text-center fs-3 text-white fw-bold">{this.props.titulo}</Card.Title>
                        <Card.Text className="text-center fs-5 text-white">
                            {this.props.texto}
                        </Card.Text>
                        <Button className="d-block mx-auto fw-bold" variant="outline-light">Más Información</Button>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default EventCard;