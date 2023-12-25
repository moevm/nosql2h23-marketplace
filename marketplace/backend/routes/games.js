const express = require("express")
const router = express.Router()
module.exports = router

const Game = require("../models/game")
router.use(express.json())

// Получить игру по id
router.get("/id/:id", (req, res) => {
    Game.findById(req.params.id)
        .then((game) => {
            if (game == null) {
                res.status(404).json({ message: `Can't find game with id: ${req.params.id}` })
            }
            res.send(game)
        })
        .catch((err) => {
            res.status(500).json({ message: err.message })
        })
})


// Получение игр по жанру
router.get("/genre/:genre", (req, res) => {
    Game.find({ genre: req.params.genre })
        .then((games) => {
            res.send(games)
        })
        .catch((err) => {
            res.status(500).json({ message: err.message })
        })
})

// Получение заданного количества случайных игр
router.get("/random/:number", (req, res) => {
    Game.aggregate().sample(parseInt(req.params['number']))
        .then((games) => {
            res.send(games)
        })
        .catch((err) => {
            res.status(500).json({ message: err.message })
        })
})


// Получение всех игр 
router.get("/all", (req, res) => {
    Game.find()
        .then((games) => {
            res.send(games)
        })
        .catch((err) => {
            res.status(500).json({ message: err.message })
        })
})
// Добавить игру 
router.post("/add", async (req, res) => {
    const game = new Game({
        title: req.body.title,
        description: req.body.description,
        genre: req.body.genre,
        picture_data: req.body.picture_data,
        offers: req.body.offers
    })
    game.save()
        .then((newGame) => {
            res.status(201).json(newGame)
        })
        .catch((err) => {
            res.status(400).json({ message: err.message })
        })
})