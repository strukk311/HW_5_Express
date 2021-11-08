const express = require('express')

const app = express()

const port = 3000

app.use(express.json())

app.use(errorHandler)

const authorRouter = require('./routes/authors')


app.use('/authors', authorRouter)
//app.use('/posts',postRouter)


app.get('/', (req, res) => {
    res.send('Hello node')
})

function errorHandler( err, req, res, next ) {
    if ( err.status ) {
        res.status(err.status).json({err:err.massege})
        return
    }
    res.sendStatus(500)
}


app.listen(port, () => {
    console.log(`server listening on ${port}....`)
}
)


/*const express = require('express')
const app = express()


//app.use(logger)
const port = 3000

app.use(express.json())

const userRouter = require('./routes/users')

function logger (req, res, next){
    console.log(req.originalUrl)
    next()
}

app.use('/users', userRouter) //вказує на який роут має спрацювувати юзерроутер


app.get('/', (req, res) => {
    res.send('Hello world')
    //res.sendStatus(500)
    //res.download('server.js)
    //res.status(200).send('Hi)
    //res.status(200).json({message: 'Hi'})
})

function errorHandler(err, req, res, next){
    if(err.status) {
        res.status(err.status).json({err: err.message})
        return
    } else {
    res.sendStatus(500)
    }
}

app.use(errorHandler)

app.listen(port, () =>{
    console.log(`Server listening on ${port}...`)
})
*/