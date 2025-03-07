const express = require('express');  
const mongoose = require('mongoose');  
const bodyParser = require('body-parser');  
const session = require('express-session');  
const apiRoutes = require('./routes/api');  
const path = require('path');  
require('dotenv').config();  

const app = express();  
const PORT = process.env.PORT || 3000;  

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })  
    .then(() => console.log('MongoDB connected'))  
    .catch(err => console.log(err));  

app.use(bodyParser.urlencoded({ extended: true }));  
app.use(bodyParser.json());  
app.use(express.static(path.join(__dirname, '../public')));  
app.use(session({  
    secret: 'your_secret_key', // Replace with your secret key  
    resave: false,  
    saveUninitialized: true,  
}));  

app.set('view engine', 'ejs');  
app.use('/', apiRoutes);  

app.listen(PORT, () => {  
    console.log(`Server is running on http://localhost:${PORT}`);  
});