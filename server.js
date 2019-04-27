// init server framework
const express =  require('express')
const api_helper = require('./api_helper')
const app = express()

const fakeDatabase = 
{
    'corn': {soil: 'dark', color: 'yellow'},
    'grapes': {soil: 'light', color: 'green'},
    'apples': {soil: 'medium', color: 'red'}
}
app.get('/', (req,res) => { // home page
    res.sendFile(__dirname + '/' + 'index.html')
})

app.get('/weather/:zipcode', (req,res) => {
        
    // OpenWeatherMap api
    const API_KEY = '&APPID=4ff9698a7bda3347679b3f775e88ef89'
    const API_URL = 'https://api.openweathermap.org/data/2.5/forecast?zip='
    const zip = req.params.zipcode
    const countryCode = ',us'
    const url = API_URL + zip + countryCode + API_KEY
    var temp = {}
    var description = {}
    var timestamp = {}



    
    // returns 5 day weather data
    api_helper.make_API_call(url).then(response => {
        const data = response
        for(var i = 0; i < data.list.length; i++) {
            console.log(data.list[i].dt_txt) // gets timestamp
            timestamp = data.list[i].dt_txt
            description = data.list[i].weather[0].description
            temp = data.list[i].main.temp - 273.15
            temp = Math.floor(temp * (9/5) + 32)
            console.log(description);            
            console.log(temp);           
            console.log('\n\n\n\n\n\n\n\n\n')   
        }
        res.json(data)
    })
    .catch(error => {
        console.log("error found", error)
    })    
})

app.get('/home', (req,res) => {
    res.sendFile(__dirname + '/' + 'home.html')
})

app.get('/details/:cropName', (req,res) => {  
    const cName = req.params.cropName  
    const val = fakeDatabase[cName]
    if (val) {
        res.send(val)
    } else {
        res.send({})
    }
})

app.listen(3000, () => { // set server to listen on port 3000
    console.log('Server started at http://localhost:3000/');
})
