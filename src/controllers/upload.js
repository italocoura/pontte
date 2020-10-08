const upload = require("../middleware/upload");

const Register = require("../controllers/authController");

const uploadFiles;


if (Register.isValid()) {

    //upload of a single file
    uploadFile = async (req, res) => {
        try {
            await upload(req, res);

            console.log(req.file);
            if (req.file == undefined) {
                return res.send(`You must select a file.`);
            }

            return res.send(`File has been uploaded.`);
        } catch (error) {
            console.log(error);
            return res.send(`Error when trying upload image: ${error}`);
        }
    };
}
else {
    uploadFiles = async (req, res) => {
        return res.send('Erro, ainda não validado inscrição')
    }
}

//upload of multiple files
// console.log(Register.isValid())


module.exports = {
    uploadFile: uploadFile
};
