import { Button, Card, Col, Row } from "react-bootstrap"
import './PhoneCard.css'


const PhoneCard = ({ phone }) => {
    return (
        <div className="mt-4">
            <Card key={phone._id} className="card">
                <Row>
                    <Col md={5}>
                        <div className="CardImgCenter">
                            <Card.Img className="CardImg" variant={phone.name} src={`/images/${phone.imageFileName}`} />
                        </div>
                    </Col>

                    <Col >
                        <Card.Body>
                            <Card.Title style={{ height: '20px' }}><h2>{phone.name}</h2></Card.Title>
                            <hr />
                            <Card.Subtitle style={{ height: '20px' }}><h3>{phone.manufacturer}</h3></Card.Subtitle>
                            <hr />
                            <Card.Text >{phone.description}</Card.Text>

                            <Card.Text><div className="d-grid gap-2">
                                <Button variant="dark">Details</Button>
                            </div>
                            </Card.Text>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
        </div>
    )
}

export default PhoneCard;