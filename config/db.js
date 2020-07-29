const config = require("config");
const mongoose = require("mongoose");

const url = config.get("mongoURI");

const dbConnect = async () => {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("db connected");
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = dbConnect;
