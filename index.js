const express = require('express');
const animals = require('./animals');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());


function logAnimal(req, res, next) {
    console.log(res.body.name);

    next();
}

function logSound(req, res, next) {
    console.log(req.body.sound);

    next();
}

function checkForBody(req, res, next) {
    if (req.body) {
        next();
    } else {
        return res.status(400).send('No body in this request')
    }
}

function logRequest(req, res, next) {
    console.log('Request incoming!');

    next();
}
app.use(logRequest);

// app.get('/api/animals', function(req, res) {
//     res.status(200).send('Animals!');
// })

app.get('/api/animals', function(req, res) {
    // aniamls.read
    res.status(200).send(animals.read());
})

app.post('/api/animals', checkForBody, logAnimal, logSound, function(req, res) {
    //animals.create

    let newAnimal = req.body;

    animals.create(newAnimal);

    res.statusCode(201).send('Added your animals!');
})

app.put('/api/animals/:id', checkForBody, function(req, res) {
    //animals.update

    let targetId = req.params.id;
    let update = req.body;

    animals.update(targetId, update);

    res.status(200).send('OK');
})

app.delete('/api/animals/:id', function(req, res) {
    //animals.destroy

    let targetId = req.params.id;

    animals.destroy(targetId);

    res.status(200).send('Deleted');
})

app.listen(3050, function() {
    console.log('Listening on 3050 yo');
})