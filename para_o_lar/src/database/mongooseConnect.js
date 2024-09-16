const controller = require('../controllers/artistController')

const express = require('express')

const router = express.Router()

router.post("/artist/create", controller.createArtist)
router.get("/artists", controller.findAllArtist)
const moogose = require('mongoose')

const MONGODB_URI = process.env.MONGODB_URI

const connect = async () => {
    try {
        await moogose.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('banco conectado!')
    } catch(error) {
        console.error(error)
    }
}

module.exports = { connect }
