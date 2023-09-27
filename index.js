
const app = require('./app.js')


//Server Starter
app.listen(app.get('port'),()=> {
    console.log('Server start', app.get('port'));
    })

  