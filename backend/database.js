

const mongoose = require("mongoose");
const { db } = require("./models/Book");


mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(db => console.log('DB is connected'))
  .catch(err => console.error(err))

  console.log(db)
