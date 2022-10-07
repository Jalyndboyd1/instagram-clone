const app = require('express')()
const firebase = require('./firebase/config')
const { auth, provider } = require('./firebase/config')
const cors = require('cors')

app.use(cors())
// Services

// Auth
app.get('/authData', (req, res) => {
    res.send({auth: auth, provider: provider})
})
// Firestore
// Storage

app.listen(4000, (err) => {
    console.log(err || 'Running on 4000')
})