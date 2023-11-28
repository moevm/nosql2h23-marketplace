require("dotenv").config()
const express = require("express");
const mongoose = require("mongoose");

const app = express();
mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;

const port = process.env.PORT;
const usersRouter = require("./routes/users");
const gamesRouter = require("./routes/games")
app.use("/games", gamesRouter)
app.use("/users", usersRouter);
app.use(express.json());

db.on("error", (error) =>{
    console.log(error);
})

db.once("open", () =>{
    console.log("Mongodb connected");
})


db.once("close", () =>{
    console.log("Mongodb disconnected")
})

app.listen(port, ()=>{
    console.log(`Server running on ${port} port`);
})
