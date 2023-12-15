import { Row, Col } from "react-bootstrap"
import PhoneCard from "../PhoneCard/PhoneCard"

const PhoneList = ({ phones }) => {

    return (
        <div className="PhoneList">
            <Row>
                {phones?.map(elm => {
                    return (
                        <Col key={elm._id} md={{ span: 4 }} style={{ display: "flex", justifyContent: "space-around" }}>
                            <PhoneCard phone={elm} />
                        </Col>
                    )
                })}
            </Row>
        </div>

    )
}

export default PhoneList