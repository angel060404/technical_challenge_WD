import axios from 'axios'

class PhoneService {

    constructor() {
        this.api = axios.create({
            baseURL: `${import.meta.env.VITE_REACT_APP_API_URL}/phones`
        })
    }

    getPhones() {
        return this.api.get('/getAllPhones')
    }
    getOnePhone() {
        return this.api.get(`/getOnePhone/${phone_id}`)
    }
}

const phoneService = new PhoneService()
export default phoneService