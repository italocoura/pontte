const upload = require("../middleware/upload");

const Register = require("../controllers/authController");

// const uploadFiles;

//upload of a single file
// const uploadFile = async (req, res) => {
//   try {
//     await upload(req, res);

//     console.log(req.file);
//     if (req.file == undefined) {
//       return res.send(`You must select a file.`);
//     }

//     return res.send(`File has been uploaded.`);
//   } catch (error) {
//     console.log(error);
//     return res.send(`Error when trying upload image: ${error}`);
//   }
// };

//upload of multiple files
// console.log(Register.isValid())
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
else{
    uploadFiles = async(req, res) => {
        return res.send('Erro, ainda não validado inscrição')
    }
}


module.exports = {
    uploadFiles: uploadFiles
};
