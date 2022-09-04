
import change from './Change.js'
import {removeElement, createDIV} from "./createElement.js"

let next_cart = 0;
let btn_card;
export const render = (flashcards) => {
    const box_learn = document.querySelector('.box_learn');
    box_learn.appendChild(createDIV(flashcards[next_cart]));
    next_cart++;
    btn_card = document.querySelector('.btn_card');
    btn_card.addEventListener('click', () => change(flashcards));
};

export const render_next_card = (flashcards) => {
    if (next_cart == flashcards.length) {
        next_cart = 0;
    }
    const card = document.querySelector('.card');
    removeElement(card);
    const box_learn = document.querySelector('.box_learn');
    box_learn.appendChild(createDIV(flashcards[next_cart]));
    next_cart++;
    btn_card = document.querySelector('.btn_card');
    btn_card.addEventListener('click', () => change(flashcards));
};
