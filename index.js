const express = require('express');
const app = express()
const mongoose = require('mongoose');

let status = "offline";
mongoose.connect('mongodb://root:root@mongo:27017', { useNewUrlParser: true }).then(() => {
    console.log('Connected to MongoDB');
    status = "online";
})
.catch(() => {
    console.log("Failed to Connect")
    status = "failed";
})

app.get('/',(req,res) => {
    res.send('Hello World : ' + status)
})

const PORT = process.env.PORT || 5000;
app.listen(PORT,() => {console.log(`Server is running on port ${PORT}`)})