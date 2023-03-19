const express = require('express')
const cors = require('cors')
const PORT = process.env.PORT || 5000
const app = express()

app.listen(PORT, (error) => {
    if (error) console.log (error)
    console.log(`Listening on ${PORT}`)
})