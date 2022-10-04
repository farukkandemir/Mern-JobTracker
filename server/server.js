require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;

///----Routes Importss ----/////
const registerRoute = require("./routes/registerRoute");
const loginRoute = require("./routes/loginRoute");
const usersRoute = require("./routes/usersRoute");

//---------- MiddleWares ----------//
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//--------Routes-------------//
app.use("/api/register", registerRoute);
app.use("/api/login", loginRoute);
app.use("/api/users", usersRoute);

//--------Connect to DataBase-------//
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log(`Connected to DataBase`))
  .catch((err) => console.log(err));

app.listen(PORT, console.log(`Server Listening on Port ${PORT}`));
