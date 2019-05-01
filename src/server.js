var express = require('express');
var bodyParser = require('body-parser')
var jwt = require('jsonwebtoken');
var mongoose = require('mongoose');

// Установим подключение по умолчанию
var mongoDB = 'mongodb+srv://yars:19860401@cluster0-uoeax.mongodb.net/test?retryWrites=true';

mongoose.connect(mongoDB, { useNewUrlParser: true }, (err) => {
    if (err) console.log(err);
    console.log('successfully connected');
});

var userSchema = new mongoose.Schema({
    email: String,
    password: String,
    code: Number
});

var User = mongoose.model('User', userSchema);

const app = express();

const SECRET_KEY = 'my_secret_key';

let user = {}

app.use(bodyParser.json());


app.get('/api', (req, res) => {
    res.json({ text: 'my api' })
})


// app.post('/api/sign-in', function (req, res) {
//     const { email, password } = req.body;
//     let message = [];
//     if (email !== user.email) {
//         message.push('Wrong email')
//     }
//     if (password !== user.password) {
//         message.push('Wrong password')
//     }
//     if (message.length > 0) {
//         return res.json({ message: message.join(', ') })
//     }
//     return res.json({ email: user.email })
// })


app.post('/api/sign-up', function (req, res) {
    const code = Math.round(Math.random() * 9000 + 1000);
    const { email, password } = req.body;
    user = new User({
        email,
        password,
        code
    })

    user.save((err) => console.log(err))

    console.log('Go to verification http://localhost:3000/verification');
    res.json({ user })
})


app.post('/api/verification', function (req, res) {
    const returnedCode = req.body.code;
    if (returnedCode && (+returnedCode === user.code)) {
        const token = jwt.sign({ user }, SECRET_KEY);
        console.log(user);

        res.json({ token })
    }
})


app.listen(5000, () => {
    console.log('App listening at port 5000');
})






































app.get('/api/protected', ensureToken, function (req, res) {
    jwt.verify(req.token, 'my_secret_key', function (err, data) {
        if (err) {
            res.json({ description: err })
        } else {
            res.json({
                description: 'Protected information. Congrats!',
                data
            });
        }
    });
})

function ensureToken(req, res, next) {
    const bearerHeader = req.headers["authorization"];
    if (typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(" ");
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next();
    } else {
        res.json({ description: 'err from ensureToken: typeof bearerHeader == undefined ' })
    }
}
