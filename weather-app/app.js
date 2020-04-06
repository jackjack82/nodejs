const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const address = process.argv[2]

if (!address) {
    console.log('Please provide an address')
} else {
    // the old versione before "Object Property Shorthand" would be...
    // geocode(address, (error, data) => {...
    // data.latitude, data.longitude....
    // >>> see data shorthand examples

    geocode(address, (error, { latitude, longitude, location }) => {
        if (error) {
            return console.log(error)
        }   

        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return console.log(error)
            }

            console.log(location)
            console.log(forecastData)
        })
    })
}

