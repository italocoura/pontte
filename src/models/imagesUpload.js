const mongoose = require('../database');


const UploadSchema = new mongoose.Schema({
    idUser: {
        type: String,
        required: true,
    },
    identification: {
        name: String,
        desc: String,
        img:
        {
            data: Buffer,
            contentType: String
        }
    },
    incomeComprovant: {
        name: String,
        desc: String,
        img:
        {
            data: Buffer,
            contentType: String
        }
    },
    housePictures: {
        name: String,
        desc: String,
        img:
        {
            data: Buffer,
            contentType: String
        }
    },
})

const ImagesUpload = mongoose.model('ImagesUpload', UploadSchema);

module.exports = ImagesUpload;