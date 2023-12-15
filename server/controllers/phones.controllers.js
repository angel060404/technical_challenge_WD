const phonesData = require('../data/phones.json')

const getPhones = (req, res, next) => {
    res.json(phonesData)
}

const getOnePhone = (req, res, next) => {

    const { phone_id } = req.params

    const phone = phonesData.find(phone => phone.id === parseInt(phone_id))

    phone ?
        res.json(phone)
        :
        res.status(404).json({ message: 'Phone not found' })
}

module.exports = {
    getPhones,
    getOnePhone
}