import { Button, Card } from "react-bootstrap"

const PhoneCard = ({ phone }) => {

    return (
        <div className="mt-4" >
            <Card key={phone._id} className="card">
                <div style={{ height: '450px' }}>
                    <div className="CardImgCenter">
                        <Card.Img className="CardImg" variant={phone.name} src={phone.imageFileName} />
                    </div>
                    <Card.Body>
                        <Card.Title style={{ height: '20px' }}><h2>{phone.name}</h2></Card.Title>
                        <hr />
                        <Card.Subtitle style={{ height: '20px' }}><h3>{phone.manufacturer}</h3></Card.Subtitle>
                        <hr />
                        <Card.Text style={{ height: '100px' }}>{phone.description}</Card.Text>
                        <div className="d-grid gap-2">
                            <Button variant="dark">Details</Button>
                        </div>
                    </Card.Body>
                </div>
            </Card>
        </div>

    )
}

export default PhoneCard