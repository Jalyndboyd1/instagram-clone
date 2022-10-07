const app = require('express')()
const { firebaseConfig } = require('./firebase/config')
const cors = require('cors')

app.use(cors())
// Auth
app.get('/firebase_config', (req, res) => {
    res.send(firebaseConfig).status(200)
})

app.listen(4000, (err) => {
    console.log(err || 'Running on 4000')
})