const express = require('express')
const bodyParser = require('body-parser');
const keys = require('./keys');
const User = require('./models/User');
const app = express()
const port = 3000

// Connecting to mongoDB
const mongoose = require('mongoose');
mongoose.connect (keys.mongoDBUrl, { useNewUrlParser: true })
.then(() => console.log("DB connected"));

app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/', function (req, res){
    res.send('Hello World!')
})

app.post('/api', function(req, res){
    const userName = req.body.username;
    const message = req.body.message;
   
    const data = {
        username: userName,
        message: message
    }
    console.log(data);

    const user = new User(data)
    user.save().then(() => {
            console.log("New user created");
            res.send(data);
    })
})

app.get('/showprofile/:username', function(req, res){
    const user = req.params.username;
    res.send("show profile working");
    console.log(user);
})

app.get("/getallusers", function (req, res) {
    res.send("data");
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
