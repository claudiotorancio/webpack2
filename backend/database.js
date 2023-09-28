
const mongoose = require("mongoose");

(async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('DB is connected');
  } catch (err) {
    console.error(err);
  }
})();
