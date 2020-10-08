const upload = require("../middleware/uploadFiles");

const Register = require("../controllers/authController");


//upload of multiple files

if (Register.isValid()) {

    uploadFiles = async (req, res) => {
        try {
            await upload(req, res);

            console.log(req.files);

            if (req.files <= 0) {
                return res.send(`You must select at least 1 file.`);
            }

            return res.send(`File has been uploaded.`);

        } catch (error) {

            console.log(error);

            if (error.code === "LIMIT_UNEXPECTED_FILE") {
                return res.send("Too many files uploaded at once.")

            }
            return res.send(`Error when trying upload image: ${error}`);
        }
    };
}
else {
    uploadFiles = async (req, res) => {
        return res.send('Erro, ainda não validado inscrição')
    }
}


module.exports = {
    uploadFiles: uploadFiles
};
