const express = require('express')
const ejs = require('ejs')
const path = require('path')

const app = express();

// Template Engine 
app.set("view engine", "ejs")


// Middleware
app.use(express.static('public'))


// Routers
app.get('/', (req, res) => {
    res.render('index')
})

app.get('/about', (req, res) => {
    res.render('about')
})

app.get('/post', (req, res) => {
    res.render('post')
})

app.get('/add_post', (req, res) => {
    res.render('add_post')
})


const port = 3000;

app.listen(port, () => {
    console.log(`Sunucu ${port} portunda başlatıldı`);
})