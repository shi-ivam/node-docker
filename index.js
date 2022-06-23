const express = require('express');
const app = express()
const mongoose = require('mongoose');

mongoose.connect('mongodb://root:root@mongo:27017', { useNewUrlParser: true }).then(() => {
    console.log('Connected to MongoDB');
})
.catch(() => {
    console.log("Failed to Connect")
})

app.get('/',(req,res) => {
    res.send('Hello World')
})

const PORT = process.env.PORT || 5000;
app.listen(PORT,() => {console.log(`Server is running on port ${PORT}`)})