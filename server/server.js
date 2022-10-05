require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();
const PORT = process.env.PORT || 5000;

const verifyJwt = require("./middlewares/verifyJwt");

///----Routes Importss ----/////
const registerRoute = require("./routes/registerRoute");
const loginRoute = require("./routes/loginRoute");
const usersRoute = require("./routes/usersRoute");
const jobsRoutes = require("./routes/jobsRoutes");

//---------- MiddleWares ----------//
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended: false}));

//--------Routes-------------//
app.use("/api/register", registerRoute);
app.use("/api/login", loginRoute);

// app.use(verifyJwt);

app.use("/api/users", usersRoute);
app.use("/api/users/job", jobsRoutes);

//--------Connect to DataBase-------//
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log(`Connected to DataBase`))
  .catch((err) => console.log(err));

app.listen(PORT, console.log(`Server Listening on Port ${PORT}`));
