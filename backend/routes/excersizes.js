const router = require('express').Router();
let Excersize = require('../models/excersize.model');

//handles the get request for the excersizes url
router.route('/').get((req, res) => {
    //finds all the excersizes in the database
    Excersize.find()
        //returns the excersizes in json format
        .then(excersizes => res.json(excersizes))
        //returns an error if there is one
        .catch(err => res.status(400).json('Error: ' + err));
});

//handles the post request for the excersizes url
router.route('/add').post((req, res) => {
    //gets the username from the request body
    const username = req.body.username;
    //gets the description from the request body
    const description = req.body.description;
    //gets the duration from the request body
    const duration = Number(req.body.duration);
    //gets the date from the request body
    const date = Date.parse(req.body.date);

    //creates a new excersize with the username, description, duration, and date
    //initializer 
    const newExcersize = new Excersize({
        username,
        description,
        duration,
        date,
    });

    //saves the new excersize to the database
    newExcersize.save()
    //returns the excersize in json format
    .then(() => res.json('Excersize added!'))
    //returns an error if there is one
    .catch(err => res.status(400).json('Error: ' + err));
});

//handles the get request for the excersizes url with an id
router.route('/:id').get((req, res) => {
    //finds the excersize by id
    Excersize.findById(req.params.id)
        //returns the excersize in json format
        .then(excersize => res.json(excersize))
        //returns an error if there is one
        .catch(err => res.status(400).json('Error: ' + err));
});

// notice those have the same url but different methods
// this is called method overloading
// it is a way to have the same url but different methods
// this is a RESTful API
// REST stands for Representational State Transfer
// it is a way to have a stateless API
// it is a way to have a stateless server
// it is a way to have a stateless client
// it is a way to have a stateless application
// it is a way to have a stateless web application
// it is a way to have a stateless web server
// it is a way to have a stateless web client
// it is a way to have a stateless web service



//handles the delete request for the excersizes url with an id
router.route('/:id').delete((req, res) => {
    //finds the excersize by id and deletes it
    Excersize.findByIdAndDelete(req.params.id)

        //returns the excersize in json format
        .then(() => res.json('Excersize deleted.'))
        //returns an error if there is one
        .catch(err => res.status(400).json('Error: ' + err));
});

//handles the post request for the excersizes url with an id
router.route('/update/:id').post((req, res) => {
    //finds the excersize by id
    Excersize.findById(req.params.id)
        //returns the excersize in json format
        .then(excersize => {
            //sets the username to the username from the request body
            excersize.username = req.body.username;
            //sets the description to the description from the request body
            excersize.description = req.body.description;
            //sets the duration to the duration from the request body
            excersize.duration = Number(req.body.duration);
            //sets the date to the date from the request body
            excersize.date = Date.parse(req.body.date);

            //saves the excersize to the database
            excersize.save()
                //returns the excersize in json format
                .then(() => res.json('Excersize updated!')) 
                //returns an error if there is one
                .catch(err => res.status(400).json('Error: ' + err));
        })  
        //returns an error if there is one
        .catch(err => res.status(400).json('Error: ' + err));
});

//exports the router
module.exports = router;

//  this and the users.js file are the only files are your app' CRUD operations
//  this file is the CRUD operations for the excersizes
//  I will probably make one for every model I have in my app

