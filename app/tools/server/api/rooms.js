import express from 'express';

/* eslint-disable no-console */

let router = express.Router();

//"Database".... ponele
let rooms = [];

router.get('/', function (req, res) {
    res.json(rooms);
});

router.post('/', function (req, res) {
    console.log("AAAAA", req.body);
    rooms.push({ id: req.body.id, creator: req.body.creator });
    res.sendStatus(200);
});

module.exports = router;