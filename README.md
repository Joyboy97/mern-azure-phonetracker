backend apps need a connection to a database
You then set up routers to javascript files that actually do the getting and setting api calls
then you used post man to check the requests on my local host as I run "nodemon server"
to post send http://localhost:5000/users/add a usesrname json object
that goes to the user.js file then goes to the add function
the add sends that data the user.model.js file where the sructure of a user is stored
once it gets through all that it is put in the mongodb cluster I have connected
if you change the cluster go to "backend/.env" to chnage the connection string

get request is from her http://localhost:5000/user/
[

    {
        "_id": "64a1001d0ad4735238d12233",
        "username": "Quincy",
        "createdAt": "2023-07-02T04:42:05.799Z",
        "updatedAt": "2023-07-02T04:42:05.799Z",
        "__v": 0
    },
    {
        "_id": "64a1002e0ad4735238d12235",
        "username": "Victor8",
        "createdAt": "2023-07-02T04:42:22.508Z",
        "updatedAt": "2023-07-02T04:42:22.508Z",
        "__v": 0
    }

]

this data is visible in the mongo db atlas gui its purty nice

"\_id": "64a1002e 0ad4735238 d12235", object Id is made of these threee things: Unix time stamp 4 bytes, random value 5 bytes , count 3 bytes

you can query your backend witht the id like this because I added a rest api that does that in the excesizes.js file http://localhost:5000/excersizes/64a105bf83a32e2f7a7625b8
final \ is the id in this case
add api for what ever tou want epending on how you want to access data

make sure you are doing those try catches but ya backend development is as fun as it sounds
next part of the video is react the front end
43:46

How to get backend running at before fronted
In admin powershell:
check execute policies
Get-ExecutionPolicy -List
run this
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope LocalMachine
then run this in the backend folder
nodemon server
when done run this for security
go back to admin Powershell to run:
Set-ExecutionPolicy -ExecutionPolicy AllSigned -Scope LocalMachine

press nodemon in the backend folder to get your backedn running

Today I made a buch of js components that can be accessed from the home page with routing
I used browerrouter to encase a navebar and some routes with paths to jsx compontents
I then went in to make these componenst take webform data and use axios to transport it to a running server

axios uses a post method to send the webform data in as a json file
that file is sent to the backend routers
the routers then use their corresponding models to save the data in a mongoose schema
check your mongodb here

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
#   m e r n - a z u r e - p h o n e t r a c k e r  
 