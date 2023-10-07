require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();

//middlewares
app.use(express.json());
// app.use(express.static(''))

// Routes

app.get('/api/test', (req, res) => {
    res.json('Get test started')
})




// Port and DB Connection
const port = process.env.PORT || 4000;
app.listen(port, async () => {
    try {
        try {
           await mongoose.connect(process.env.MONGO_URI);
            console.log('Connected to MongoDB...')
        } catch (error) {
            console.log(error)
        }
        console.log(`API Server started on port ${port}`)
    } catch (error) {
        if (error) throw error;
    }
    
})