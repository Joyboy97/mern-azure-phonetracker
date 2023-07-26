const experss = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');   
//gets the environment variables from the .env file
require('dotenv').config();

//creates the express server
const app = experss();  
//sets the port to the environment variable or 5000
const port = process.env.PORT || 5000;

//middleware
app.use(cors());
//allows us to parse json
app.use(experss.json());

//requires the files from the routes folder
const uri = process.env.ATLAS_URI;
//sets up your db connection
mongoose.connect(uri, { useNewUrlParser: true});

//connects to the database for status
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

//requires the files from the routes folder
const excersizesRouter = require('./routes/excersizes');
const usersRouter = require('./routes/users');

//if someone goes to the root/excersizes url it will load the excersizes router
app.use('/excersizes', excersizesRouter);
app.use('/users', usersRouter);

app.use(experss.static('./src/build'));
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'src','build','index.html'));
});
//requires the files from the routes folder
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

// side note I had to install npm install -g nodemon to get the server to run
// I also needed express and mongoose NPM packages
// I also needed to install the dotenv package to get the environment variables to work
// I also needed to install cors to get the server to work with the front end
// i also needed to change the powershell execution policy to remotesigned to get the server to run