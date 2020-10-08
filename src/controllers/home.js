const path = require("path");
const isValid = require('../controllers/authController')


const home = (req, res) => {
  return res.sendFile(path.join(`${__dirname}/../views/index.html`));
};

module.exports = {
  getHome: home
};
