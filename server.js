// init server framework
const express =  require('express')
const request = require('request')
const config = require('./static_files/config.js')
var bodyParser = require('body-parser');

const app = express()

app.use(express.static('static_files'));
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.get('/crops', (req,res) => {    
    res.sendFile(__dirname + '/' + 'crop.html')
})

app.get('/addField', (req,res) => {    
    res.sendFile(__dirname + '/' + 'addField.html')
})

app.get('/', (req,res) => { // home page
    res.sendFile(__dirname + '/' + 'index.html')
})

app.get('/weather', (req,res) => {
    res.sendFile(__dirname + '/' + 'weather.html')
})

app.get('/stories', (req,res) => {
    res.sendFile(__dirname + '/' + 'stories.html')
})

app.get('/strawberry', (req,res) => {
    res.sendFile(__dirname + '/' + 'strawberry.html')
})

app.get('/orange', (req,res) => {
    res.sendFile(__dirname + '/' + 'orange.html')
})

app.get('/pineapple', (req,res) => {
    res.sendFile(__dirname + '/' + 'pineapple.html')
})

app.post('/addField', (req,res) => {
    const uri = '/v2/fields'
    const options = {
        url: config.HOST + uri,
        method: 'POST',        
        headers: {
            'Authorization': 'Bearer ' + config.TOKEN             
        },
        json: true,
        body: {
            iD: req.body.fieldId,
            name: req.body.name,
            farmId: req.body.farmId,
            acres: req.body.acres,
            centerPoint: {
                latitude: parseFloat(req.body.latitude),
                longitude: parseFloat(req.body.longitude)
            }
        }
    }
    request(options, function(err,response,body){        
        console.log(body);
        // console.log(options)        
    })

    res.send("request complete")
})


app.get('/watermelon', (req,res) => {
    res.sendFile(__dirname + '/' + 'watermelon.html')
})

app.post('/', (req,res) => {
    res.sendFile(__dirname + '/' + 'index.html')
})

app.listen(3000, () => { // set server to listen on port 3000
    console.log('Server started at http://localhost:3000/');
})
