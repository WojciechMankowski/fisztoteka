"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.render_next_card = exports.render = void 0;
const Change_1 = require("./Change");
const createElement_1 = require("./createElement");
let next_cart = 0;
let btn_card;
const render = (flashcards) => {
    const box_learn = document.querySelector('.box_learn');
    box_learn.appendChild((0, createElement_1.createDIV)(flashcards[next_cart]));
    next_cart++;
    btn_card = document.querySelector('.btn_card');
    btn_card.addEventListener('click', () => (0, Change_1.change)(flashcards));
};
exports.render = render;
const render_next_card = (flashcards) => {
    if (next_cart == flashcards.length) {
        next_cart = 0;
    }
    const card = document.querySelector('.card');
    (0, createElement_1.removeElement)(card);
    const box_learn = document.querySelector('.box_learn');
    box_learn.appendChild((0, createElement_1.createDIV)(flashcards[next_cart]));
    next_cart++;
    btn_card = document.querySelector('.btn_card');
    btn_card.addEventListener('click', () => (0, Change_1.change)(flashcards));
};
exports.render_next_card = render_next_card;
//# sourceMappingURL=Render.js.map