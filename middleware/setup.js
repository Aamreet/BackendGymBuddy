const dotenv = require("dotenv");
const cors = require("cors");

const setup = (req, res, next) => {
    dotenv.config();
    app.use(cors());
    next();
}

module.exports = setup;