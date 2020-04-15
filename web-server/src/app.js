const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

// console.log(__dirname) >> try print this

const app = express() // check http://expressjs.com/en/5x/api.html#app for details
const port = process.env.PORT || 3000

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')       // http://expressjs.com/en/5x/api.html#app.set check all build-in methods
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => { // '' is the website route, from { is called the "handler" 
    // 1) res.send('Hello express!) >> basic feedback to url 
    // 2) res.send('<h1>Hello express!</h1>)
    // 3) res.send({name: Giac, age: 37}) >> this case I return a JSON
    res.render('index', {
        title: 'Weather',
        name: 'Andrew Mead'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Andrew Mead'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        helpText: 'This is some helpful text.',
        title: 'Help',
        name: 'Andrew Mead'
    })
})

app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: 'You must provide an address!'
        })
    }

    geocode(req.query.address, (error, { latitude, longitude, location } = {}) => {
        if (error) {
            return res.send({ error })
        }

        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return res.send({ error })
            }

            res.send({
                forecast: forecastData,
                location,
                address: req.query.address
            })
        })
    })
})

// Query String
// localhost:3000/products?search=games >>> parameter is passed in the URL
// you can have single response, else you get "Cannot set headers after they are sent to the client"
app.get('/products', (req, res) => {
    if (!req.query.search) { 
        return res.send({   // you can have single response, that is why I make RETURN, else he also excutes the next res.send(...)
            error: 'You must provide a search term'
        })
    }

    console.log(req.query.search)
    res.send({
        products: []
    })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Andrew Mead',
        errorMessage: 'Help article not found.'
    })
})

// this must be LAST. it takes all the requests that have not been handled before!!
app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Andrew Mead',
        errorMessage: 'Page not found.'
    })
})

// listen is for running the server
app.listen(port, () => {
    console.log('Server is up on port ' + port)
})