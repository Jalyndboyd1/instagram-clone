const app = require('express')()
const firebase = require('./firebase/config')
const { auth } = require('./firebase/config')
const cors = require('cors')

app.use(cors())
// Services

// Auth
// Firestore
// Storage

app.listen(4000, (err) => {
    console.log(err || 'Running on 4000')
})