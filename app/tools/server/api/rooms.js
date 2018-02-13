import express from 'express';

/* eslint-disable no-console */

let router = express.Router();

//"Database".... ponele
let rooms = [];

router.get('/', function (req, res) {
    res.json(rooms);
});

router.addRoom = function(room){
    rooms.push(room);
};

function findRoom(id){
    return rooms.find((room) => room.id === id);
}

router.joinRoom = function(id, player){
    findRoom(id).participants.push(player);
};

router.post('/', function (req, res) {
    this.addRoom(req.body.id, req.body.creator);
    res.sendStatus(200);
});

module.exports = router;