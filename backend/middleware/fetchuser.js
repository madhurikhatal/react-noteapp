const jwt = require('jsonwebtoken');
// const router = require('../routes/notes');
const JWT_SECRET = "noteapp";
const fetchuser = (req, res, next) => {

    const token = req.header('auth-token');

    if (!token) {
        return res.status(401).send({ errors: "invalid credentials" });
    }

    try {
        const data = jwt.verify(token, JWT_SECRET);
        req.user = data.user;
        next();
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ errors: "some error occured" });

    }

}

module.exports = fetchuser;