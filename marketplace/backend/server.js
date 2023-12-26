require("dotenv").config()
const express = require("express");
const mongoose = require("mongoose");

const app = express();
mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;

const port = process.env.PORT;
const usersRouter = require("./routes/users");
const gamesRouter = require("./routes/games")
const adminRouter = require("./routes/admin")
const cors = require("cors")

app.use(cors())
app.use("/games", gamesRouter)
app.use("/users", usersRouter);
app.use("/admin", adminRouter);
app.use(express.json());

db.on("error", (error) => {
    console.log(error);
})

db.once("open", async () => {  
    const exec = require('child_process').exec;

    exec('mongorestore --db=marketplace ./dbdump/marketplace', (error, stdout, stderr) => {
        if (error) {
          console.error(`error: ${error}`);
          return;
        }
        console.log(`stdout: ${stdout}`)
        console.error(`error: ${stderr}`)

        if(!error)console.log("Mongodb connected");
      });
})

app.listen(port, () => {
    console.log(`Server running on ${port} port`);
})
