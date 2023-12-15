import { useEffect, useState } from "react"
import phoneService from "../../services/phones.services"
import { Container } from "react-bootstrap"
import Loader from "../../components/Loader/Loader"
import PhoneList from "../../components/PhoneList/PhoneList"

const PhonePage = () => {

    const [phones, setPhones] = useState()

    useEffect(() => {
        loadPhones()
    }, [])

    const loadPhones = () => {

        phoneService
            .getPhones()
            .then(({ data }) => setPhones(data))
            .catch(err => console.log(err))
    }

    return (
        <div className="PhonePage">
            <Container>
                <h1>Phone Page</h1>
                <hr />
                {
                    phones ?
                        <PhoneList phones={phones} />
                        :
                        <Loader />
                }
            </Container>
        </div>
    )
}

export default PhonePage