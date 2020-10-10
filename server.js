require("dotenv").config();
const app = require("./config/express-config");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 5000;
const MONGODB_URI =
  process.env.MONGODB_URI ||
  `mongodb+srv://root:${process.env.PASSWORD}@cluster0.6e0yo.mongodb.net/submarine?retryWrites=true&w=majority`;

// connect to MongoDB
mongoose.connect(MONGODB_URI, { useNewUrlParser: true }, err => {
  if (err) {
    console.log("There is a problem with the connection" + err);
  } else {
    console.log("Mongoose connection is good.");
    console.log(MONGODB_URI);
  }
});

//server is up and running
app.listen(PORT);
