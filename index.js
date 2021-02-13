const express = require('express');
const ejs = require('ejs');
const path = require('path');


const app = express();


app.use('/public', express.static('public'));
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    res.render('survey');
})

app.post('/', (req, res) => {
    res.render('postSub');
})

app.listen(3000, () => {
    console.log("Server started on PORT 3000");
})