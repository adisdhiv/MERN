var express = require('express')
var router = express.Router()
const {signout, signup, signin, isSignedIn} = require("../controllers/auth")
const { check } = require('express-validator');

// define the route
router.get('/signout', signout)

router.get('/testroute', isSignedIn, (req,res) => {
    res.send("A protected route")
})


router.post('/signup', [
    check('name','Name should be atleast 3 characters').isLength({min:3}),
    check('email','Please enter a valid email address').isEmail(),
    check('password', 'The password must be 5+ chars long and contain a number')
    .not().isIn(['123', 'password', 'god']).withMessage('Do not use a common word as the password')
    .isLength({ min: 5 })
    .matches(/\d/),
],signup)

router.post('/signin', [
    check('email','Please enter a valid email address').isEmail(),
    check('password', 'The password must be 5+ chars long and contain a number')
    .not().isIn(['123', 'password', 'god']).withMessage('Do not use a common word as the password')
    .isLength({ min: 5 })
    .matches(/\d/),
],signin)

module.exports = router