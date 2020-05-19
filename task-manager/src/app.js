const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()

/*
app.use((req, resp), next) => {} // using next we create a MIDDLEWARE
    console.log(req.method, req.path)
    if (req.method === 'GET){
        res.send('Get request are disabled")
    } else {
        next()
    }
    
    next()                       // we call the route handler, i.e. the middleware has finished
                                 // we do NOT call next() if we do NOT want to proceed to handlers
 

*/  


app.use(express.json()) // need to register the routing
app.use(userRouter)
app.use(taskRouter)

module.exports = app