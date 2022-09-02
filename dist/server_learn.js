import { createDIV, createBTN, removeElement } from './Helpers/createElement.js';
const user_name = 'wojtek';
const flashcards = [];
let btn_card;
let suitable_facility;
let btn_know, btn_not_know;
let next_cart = 0;
const render = () => {
    const box_learn = document.querySelector('.box_learn');
    box_learn.appendChild(createDIV(flashcards[next_cart]));
    next_cart++;
    btn_card = document.querySelector('.btn_card');
    btn_card.addEventListener('click', change);
};
const render_next_card = () => {
    const card = document.querySelector('.card');
    removeElement(card);
    const box_learn = document.querySelector('.box_learn');
    box_learn.appendChild(createDIV(flashcards[next_cart]));
    next_cart++;
    btn_card = document.querySelector('.btn_card');
    btn_card.addEventListener('click', change);
};
const scoring_points = (card) => {
    if (next_cart == flashcards.length) {
        next_cart=0
    }
    flashcards.forEach((element) => {
        if (element == card) {
            element.numberofrepetitions++;
            if (element.numberofrepetitions == 3) {
                console.log('update categories');
            }
        }
    });
    render_next_card();
};
const addElemetToFlashcards = (card) => {
    for (let i = 0; i != card.length; i++) {
        const obj = card[i];
        if (obj.categories == 'uczę się') {
            const newCart = {
                notion: obj.notion,
                definition: obj.definition,
                name_image: obj.name_image,
                categories: obj.categories,
                numberofrepetitions: 0,
                id: obj.id,
            };
            flashcards.push(newCart);
        }
        else if (obj.categories == 'powtarzam') {
            const newCart = {
                notion: obj.notion,
                definition: obj.definition,
                name_image: obj.name_image,
                categories: obj.categories,
                numberofrepetitions: 3,
                id: obj.id,
            };
            flashcards.push(newCart);
        }
        else {
            const newCart = {
                notion: obj.notion,
                definition: obj.definition,
                name_image: obj.name_image,
                categories: obj.categories,
                numberofrepetitions: 6,
                id: obj.id,
            };
            flashcards.push(newCart);
        }
    }
    render();
};
const URL = 'http://127.0.0.1:8000/';
export const download_all_flashcards = (event, select) => {
    event.preventDefault();
    const name_set = select;
    const text = `get_flashcard/${user_name}/${name_set.value}`;
    const url = `${URL}${text}`;
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
        addElemetToFlashcards(data);
    });
};
const change = () => {
    const div = document.querySelector('.card');
    const strong = div.querySelector('strong');
    const notion = strong.innerHTML;
    for (let i = 0; i != flashcards.length; i++) {
        const obj = flashcards[i];
        if (obj.notion == notion) {
            suitable_facility = obj;
        }
    }
    strong.innerText = suitable_facility.definition;
    removeElement(btn_card);
    div.appendChild(createBTN('Znam', 'btn_know'));
    div.appendChild(createBTN('Nie znam', 'btn_not_know'));
    btn_know = document.querySelector('.btn_know');
    btn_know.addEventListener('click', () => scoring_points(suitable_facility));
};
