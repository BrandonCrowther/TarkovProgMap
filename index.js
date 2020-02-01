const express = require('express')
const config = require('./config')
const structure = require('./quests')
const app = express()
app.set('view engine', 'pug')

app.get('/index', function(req, res){
    res.render("index", {elements: structure})
})

app.listen(config.port, () => {
	console.log("B========D")
})
