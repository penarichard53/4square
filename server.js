// init server framework
const express =  require('express')


const app = express()
app.use(express.static('static_files'));

const fakeDatabase = 
{
    'corn': {soil: 'dark', color: 'yellow'},
    'grapes': {soil: 'light', color: 'green'},
    'apples': {soil: 'medium', color: 'red'}
}

app.get('/crops', (req,res) => {    
    res.sendFile(__dirname + '/' + 'crop.html')
})

app.get('/addCrop', (req,res) => {    
    res.sendFile(__dirname + '/' + 'addCrop.html')
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

app.get('/watermelon', (req,res) => {
    res.sendFile(__dirname + '/' + 'watermelon.html')
})

app.post('/', (req,res) => {
    res.sendFile(__dirname + '/' + 'index.html')
})

app.listen(3000, () => { // set server to listen on port 3000
    console.log('Server started at http://localhost:3000/');
})
