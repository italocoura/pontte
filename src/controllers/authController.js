
const Creation = require('../models/creation');

const ImagesUpload = require('../models/imagesUpload');

//validation is can pass to the next step
var creationIsValid = false;

module.exports = {

    register(req, res) {
        try {

            const user = Creation.create(req.body);

            //informing that the user can pass to the next status      
            creationIsValid = true;

            return user;
        }
        catch (err) {
            return res.status(400).send({ error: "Registration failed" })
        }
    },

    //upload registers
    updateRegister(req, res) {
        try {
            var query = { _id: req.body._id }
            const user = Creation.updateOne(query, req.body);

            //informing that the user can pass to the next status      
            return user;
        }
        catch (err) {
            return res.status(400).send({ error: "Upload failed" })
        }
    },

    //upload registers
    updateDocuments(req, res) {
        try {
            var query = { idUser: req.body.idUser }
            const user = ImagesUpload.updateOne(query, req.body);

            //informing that the user can pass to the next status      
            return user;
        }
        catch (err) {
            return res.status(400).send({ error: "Upload failed" })
        }
    },

    //
    registerDocuments(req, res) {

        console.log(req.body)
        if (!creationIsValid) return res.status(400).send(error = "Estado inválido")

        try {

            const documents = ImagesUpload.create(
                {

                    identification: req.body.identification,
                    idUser: req.body.userId,
                }
            );

            return documents;
        }
        catch (err) {
            return res.status(400).send({ error: "Documents Registration failed" })
        }
    },

    allRegisters(req, res) {

        try {
            const users = Creation.find();

            return users;
        }
        catch (err) {
            return res.status(400).send({ error: "Erro ao resgatar dados" })
        }
    },

    isValid() {

        return creationIsValid;

    }
};