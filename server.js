const TOKEN = 'qyOWVZihNRe2A9qBCGZuUeE5wGW9'
const HOST = 'https://api.awhere.com'

// init server framework
const express =  require('express')
const request = require('request')
var bodyParser = require('body-parser');

const app = express()

app.use(express.static('static_files'));
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.get('/agronomic', (req,res) => {     
    res.sendFile(__dirname + '/' + 'agronomic.html')
})

app.get('/field', (req,res) => {     
    res.sendFile(__dirname + '/' + 'field.html')
})

app.get('/addCrop', (req,res) => {    
    res.sendFile(__dirname + '/' + 'addCrop.html')
})

/**
 * unable to post 'Content-Type: application/json' via ajax inside browser, created endpoint on express API to make the request for me
 */
app.post('/addCrop', (req,res) => {    
    const uri = '/v2/agronomics/fields/' + req.param('fieldId') + '/plantings'
    
    const options = {
        url: HOST + uri,
        method: 'POST',
        headers: {
            'Authorization': 'Bearer ' + TOKEN
        },
        json: true,
        body: {
            crop: req.body.crop,
            plantingDate: req.body.plantingDate,            
            projections: {
                yield: {
                    amount: req.body.projectedYieldAmount,
                    units: req.body.projectedYieldUnits
                },
                harvestDate: req.body.projectedHarvestDate
            },
            yield: {
                amount: req.body.actualYieldAmount,
                units: req.body.actualYieldUnits
            },
            harvestDate: req.body.harvestDate
            
        }
    }
    request(options, function(err,response,body){        
        console.log(body);
        // console.log(options)        
    })

    res.redirect('/')

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

app.get('/addField', (req,res) => {    
    res.sendFile(__dirname + '/' + 'addField.html')
})

app.post('/addField', (req,res) => {
    const uri = '/v2/fields'
    const options = {
        url: HOST + uri,
        method: 'POST',        
        headers: {
            'Authorization': 'Bearer ' + TOKEN             
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
    })

    res.redirect('/')
})

app.post('/', (req,res) => {
    res.sendFile(__dirname + '/' + 'index.html')
})

app.listen(3000, () => { // set server to listen on port 3000
    console.log('Server started at http://localhost:3000/');
})
