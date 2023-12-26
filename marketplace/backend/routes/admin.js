const express = require("express")
const router = express.Router()
module.exports = router

router.use(express.json())
router.use(express.urlencoded({ extended: true }));

const exec = require('child_process').exec;

router.get("/save", (req, res) => {

    exec('mongodump --db marketplace --out ./dbdump', (error, stdout, stderr) => {
        if (error) {
          console.error(`error: ${error}`);
          return;
        }
        console.log(`stdout: ${stdout}`)
        console.error(`error: ${stderr}`)

        console.log("Mongodb saved");
        res.status(201)
      });
})