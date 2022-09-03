"use strict";
exports.__esModule = true;
exports.render_next_card = exports.render = void 0;
var Change_1 = require("./Change");
var createElement_1 = require("./createElement");
var next_cart = 0;
var btn_card;
var render = function (flashcards) {
    var box_learn = document.querySelector('.box_learn');
    box_learn.appendChild((0, createElement_1.createDIV)(flashcards[next_cart]));
    next_cart++;
    btn_card = document.querySelector('.btn_card');
    btn_card.addEventListener('click', function () { return (0, Change_1.change)(flashcards); });
};
exports.render = render;
var render_next_card = function (flashcards) {
    if (next_cart == flashcards.length) {
        next_cart = 0;
    }
    var card = document.querySelector('.card');
    (0, createElement_1.removeElement)(card);
    var box_learn = document.querySelector('.box_learn');
    box_learn.appendChild((0, createElement_1.createDIV)(flashcards[next_cart]));
    next_cart++;
    btn_card = document.querySelector('.btn_card');
    btn_card.addEventListener('click', function () { return (0, Change_1.change)(flashcards); });
};
exports.render_next_card = render_next_card;
