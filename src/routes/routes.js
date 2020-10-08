const express = require('express');

const Creation = require('../models/creation');

const ImagesUpload = require('../models/imagesUpload');

const router = express.Router();

const Authcontroller = require("../controllers/authController")

const uploadDocumentController = require("../controllers/upload");

const uploadDocumentsController = require("../controllers/uploadFiles");

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

//put to upload informations
router.put('/uploadregisters', async (req, res) => {

    let updateRegisters = await Authcontroller.updateRegister(req, res);

    res.send({ updateRegisters });
});


router.get('/allregisters', async (req, res) => {

    let allRegisters = await Authcontroller.allRegisters(req, res);

    res.send({ allRegisters });

});

router.get('/home', homeController.getHome);


router.post('/uploadFiles', uploadDocumentsController.uploadFiles);

router.post('/uploadFile', uploadDocumentController.uploadFile);


module.exports = app => app.use('/', router);