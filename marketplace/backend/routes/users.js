const express = require("express")
const router = express.Router()
module.exports = router

const User = require("../models/user")
router.use(express.json())
router.use(express.urlencoded({ extended: true }));

// Получение всех пользователей 
router.get("/all", (req, res) => {
    User.find()
        .then((users) => {
            res.send(users)
        })
        .catch((err) => {
            res.status(500).json({ message: err.message })
        })
})

//Получение пользователя по id
router.get("/id/:id", (req, res) => {
    User.findById(req.params.id)
        .then((user) => {
            if (user == null) {
                res.status(404).json({ message: `Can't find user with id: ${req.params.id}` })
            }

            res.send(user)
        })
        .catch((err) => {
            res.status(500).json({ message: err })
        })
})

//Получение пользователя по login и password
router.get("/user/:login/:password", (req, res) => {
    User.find({
        login: req.params.login,
        password: req.params.password
        })
        .then((user) => {
            if (user == null) {
                res.status(404).json({ message: `Can't find user with id: ${req.params.id}` })
            }

            res.send(user)
        })
        .catch((err) => {
            res.status(500).json({ message: err })
        })
})

// Добавление нового пользователя 
router.post("/add", (req, res) => {
    const user = new User({
        login: req.body.login,
        password: req.body.password,
        role: req.body.role,
        name: req.body.name,
        email: req.body.email,
        is_banned: req.body.is_banned,
        avatar_data: req.body.avatar_data ? req.body.avatar_data: "https://www.perunica.ru/uploads/posts/2011-10/1319832745_0_6065c_b70de565_l.jpg"
    })

    user.save()
        .then((newUser) => {
            res.status(201).json(newUser)
        })
        .catch((err) => {
            res.status(400).json({ message: err.message })
        })
})
