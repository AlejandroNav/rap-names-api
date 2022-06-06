const { json } = require('express')
const express = require('express')
const app = express()
const PORT = 8000

const rappers = {
    'aesop': {
        'age': 46,
        'birthName': "Ian Matthias Bavitz",
        'birthLocation': "Long Island, New York",
    },
    'deltron': {
        'age': 49,
        'birthName': "Teren Delvon Jones",
        'birthLocation': "Oakland, California",
    },
    'killer mike': {
        'age': 29,
        'birthName': "Michael Santiago Render",
        'birthLocation': "Atlanta, Georgia",
    },
    'unknown': {
        'age': 0,
        'birthName': "unknown",
        'birthLocation': "unknown",
    },

}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})
app.get('/api/:name', (req, res) => {
    console.log(req.params.name + ' was requested');
    let rapperName = req.params.name.toLowerCase()
    if (rappers[rapperName]) {
        console.log(req.params.name + ' exists in the database');
        res.json(rappers[rapperName])
    } else {
        console.log(req.params.name + ' does not exists in the database');
        res.json(rappers['unknown'])
    }

})

app.listen(PORT, () => {
    console.log(`the server is now running in port ${PORT} betta cach them all`);
})