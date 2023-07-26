const router = require('express').Router();
//gets the user model
let User = require('../models/user.model');

//handles the get request for the users url
router.route('/').get((req, res) => {
    //finds all the users in the database
    User.find()
        //returns the users in json format
        .then(users => res.json(users))
        //returns an error if there is one
        .catch(err => res.status(400).json('Error: ' + err));
});

//handles the post request for the users url
router.route('/add').post((req, res) => {
    //gets the username from the request body
    //body is a json file that is sent with the request
    //username is just one of the fields in this json file
    const username = req.body.username;

    //creates a new user with the username
    const newUser = new User({username});

    //saves the new user to the database
    newUser.save()
    //returns the user in json format
    .then(() => res.json('User added!'))
    //returns an error if there is one
    .catch(err => res.status(400).json('Error: ' + err));
});

//exports the router
module.exports = router;