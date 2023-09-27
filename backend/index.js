if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}


const express = require('express')
const morgan = require('morgan')
const multer = require('multer')
const path = require('path')
const cors = require('cors')

//initializacion
const app = express()

require('./database.js')

//Settings
const PORT = process.env.PORT || 3000;

//Middlewares
app.use(morgan('dev'));

const storage = multer.diskStorage({
    destination: path.join(__dirname, 'public/uploads'),
    filename(req, file, cb) {
        cb(null, new Date().getTime() + path.extname(file.originalname));
    }
});
app.use(multer({storage}).single('image'));

app.use(express.urlencoded({extended:false}));

app.use(express.json());

app.use(cors())


app.get('/api/books', require('../api/books.js'))


 
//Static files
app.use(express.static(path.join(__dirname, 'public')))


//Server Starter
app.listen(PORT, () => {
    console.log(`escuchando en el puerto: ${PORT}`)

})
