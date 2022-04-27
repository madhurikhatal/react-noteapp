const express = require('express')
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const JWT_SECRET = "noteapp";
const fetchuser = require('../middleware/fetchuser')
//ROUTR1 CREATE USER
router.post('/createuser', [
    //validation
    body('name', 'Enter valid name').isLength({ min: 2 }),
    body('email', 'Enter valid email').isEmail(),
    body('password', 'password must be at least 5 characters').isLength({ min: 5 })
], async (req, res) => {

    //for erroe handling use try catch block
    try {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }


        // console.log(req.body);
        let user = await User.findOne({ email: req.body.email });//findone is a function for find first index in document
        if (user) {
            return res.status(400).json({ errors: "user alrady exist" })
        }

        //hash password generation
        const salt = await bcrypt.genSaltSync(10);
        const securedPass = await bcrypt.hash(req.body.password, salt);


        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: securedPass,
        })

        const data = {
            user: {
                id: user.id
            }
        }
        const authtoken = jwt.sign(data, JWT_SECRET);
        // .then(user => res.json(user))
        //     .catch(err => {
        //         console.log(err),
        //             res.json({ error: `please enter unique email`, message: err.message })
        //     });
        // console.log(authtoken);
        res.json({ authtoken })
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ errors: "some erroe occured" });
    }
})

// ROUTE2 LOGIN
router.post('/login', [
    body('email', "Enter valid email").isEmail(),
    body('password', 'Enter valid password').exists()
], async (req, res) => {

    const { email, password } = req.body;

    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        //user not exist
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ errors: "user not exist" })
        }
        const passwordcompare = await bcrypt.compare(password, user.password);
        if (!passwordcompare) {
            return res.status(400).json({ errors: "login credentials are invalid" });
        }
        const payload = {
            user: {
                id: user.id
            }
        }

        const authtoken = jwt.sign(payload, JWT_SECRET)
        res.json({ authtoken })
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ errors: "some error occured" });

    }
})


//ROUTE 3 : GETUSER
router.post('/getuser', fetchuser, async (req, res) => {
    try {
        userId = req.user.id;
        const user = await User.findById(userId).select("-password");
        res.send(user);

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ errors: "some error occured" });

    }
})

module.exports = router
