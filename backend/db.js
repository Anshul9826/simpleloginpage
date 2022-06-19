const mongoose = require("mongoose");
require("dotenv").config();
const mongoURI = process.env.CONNECTION_URL;
const connectToMongo = () => {
  mongoose.connect(mongoURI, (err) => {
    if (err) console.log(err);
    else console.log("mongdb is connected");
  });
};
module.exports = connectToMongo;
