const express = require('express')
const app = express()
const homeRoutes = require('./routes/home')
const searchRoutes = require('./routes/search')
const aboutRoutes = require('./routes/about')

require('dotenv').config({path: './config/.env'})

app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())



app.use('/', homeRoutes)
app.use('/search', searchRoutes)
app.use('/about', aboutRoutes)
 
app.listen(process.env.PORT || PORT, () => {
    console.log('heard')
})


