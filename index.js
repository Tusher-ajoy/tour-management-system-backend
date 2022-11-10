const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const app = require("./app");

//database connection
mongoose
  .connect(process.env.MONGODB_URL || process.env.DATABASE_LOCAL)
  .then(() => {
    console.log("Database connected successfully");
  });

//server
const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
