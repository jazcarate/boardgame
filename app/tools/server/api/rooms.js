import express from 'express';

let router = express.Router();

//"Database".... ponele
let rooms = [];

router.get('/', function (req, res) {
    res.json(rooms);
});

router.post('/', function (req, res) {
    rooms.push({ id: req.body.id, creator: req.body.creator });
    res.sendStatus(200);
});

module.exports = router;