// we do not use npm mdule, but https://nodejs.org/dist/latest-v13.x/docs/api/
const https = require('https')
const url = 'https://api.darksky.net/forecast/9d1465c6f3bb7a6c71944bdd8548d026/40,-75'

// as response we get several CHUNKS or pieces of feedback, we have to manage them
const request = https.request(url, (response) => {
    // I use LET because I'm going to change this variable..
    let data = ''

    // response.on allows us to register a handler
    response.on('data', (chunk) => {
        // we get a BUFFER as a response, but we need a string
        data = data + chunk.toString()
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })

})

request.on('error', (error) => {
    console.log('An error', error)
})

// without END the terminal gets stuck
request.end()