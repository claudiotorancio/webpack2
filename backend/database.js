
const {connect} = require("mongoose");

(async () => {
  try {
    const db =  await connect(process.env.MONGODB_URI) 
    console.log('DB is connected to', db.connection.name);
  } catch (err) {
    console.error(err);
  }
})();

