// init server framework
const express =  require('express');
const app = express();

app.get('/', (req,res) => { // home page
    res.sendFile(__dirname + '/' + 'index.html')
})

app.get('/home', (req,res) => {
    res.sendFile(__dirname + '/' + 'home.html')
})


app.listen(3000, () => { // set server to listen on port 3000
    console.log('Server started at http://localhost:3000/');
})
