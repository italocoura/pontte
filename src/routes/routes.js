const express = require('express');

const Creation = require('../models/creation');

const ImagesUpload = require('../models/imagesUpload');

const router = express.Router();

const Authcontroller = require("../controllers/authController")

const uploadController = require("../controllers/upload");

const homeController = require("../controllers/home");


var userRegisteredId;

// var creationIsValid = false;

//post to register informations
router.post('/register', async (req, res) => {

    const { email, cpf } = req.body;

    const userEmail = await Creation.findOne({ email });

    const userCPF = await Creation.findOne({ cpf });

    //verification if cpf is already registered
    if (userEmail || userCPF)
        return res.status(400).send({ error: "E-mail or CPF already registered" });

    let userRegistered = await Authcontroller.register(req, res);

    userRegisteredId = userRegistered._id;

    res.send({ userRegistered });
});

//post to register documents
router.post('/registerDocuments', async (req, res) => {
    req.body.userId = userRegisteredId;
    let documentsUploaded = await Authcontroller.registerDocuments(req, res);

    res.send({ documentsUploaded })
})


//put to upload informations
router.put('/uploadregisters', async (req, res) => {

    let updateRegisters = await Authcontroller.updateRegister(req, res);

    res.send({ updateRegisters });
});


//put to upload documents
router.put('/uploaddocuments', async (req, res) => {

    let updateDocuments = await Authcontroller.updateDocuments(req, res);

    res.send({ updateDocuments });
});


router.get('/allregisters', async (req, res) => {

    let allRegisters = await Authcontroller.allRegisters(req, res);

    res.send({ allRegisters });

});

router.get('/home', homeController.getHome);


router.post('/upload', uploadController.uploadFiles);


module.exports = app => app.use('/', router);