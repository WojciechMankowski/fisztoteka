import { createDIV, createBTN } from "./Helpers/createElement.js";
const user_name = "wojtek";
const flashcards = [];
let btn_card;
const render = () => {
    const box_learn = document.querySelector('.box_learn');
    box_learn.appendChild(createDIV(flashcards[0]));
    btn_card = document.querySelector(".btn_card");
    btn_card.addEventListener("click", change);
};
const addElemetToFlashcards = (card) => {
    for (let i = 0; i != card.length; i++) {
        const obj = card[i];
        if (obj.categories == "uczę się") {
            const newCart = {
                notion: obj.notion,
                definition: obj.definition,
                name_image: obj.name_image,
                categories: obj.categories, numberofrepetitions: 0, id: obj.id
            };
            flashcards.push(newCart);
        }
        else if (obj.categories == "powtarzam") {
            const newCart = {
                notion: obj.notion,
                definition: obj.definition,
                name_image: obj.name_image,
                categories: obj.categories, numberofrepetitions: 3, id: obj.id
            };
            flashcards.push(newCart);
        }
        else {
            const newCart = {
                notion: obj.notion,
                definition: obj.definition,
                name_image: obj.name_image,
                categories: obj.categories, numberofrepetitions: 6, id: obj.id
            };
            flashcards.push(newCart);
        }
    }
    render();
};
const URL = "http://127.0.0.1:8000/";
export const download_all_flashcards = (event, select) => {
    event.preventDefault();
    const name_set = select;
    const text = `get_flashcard/${user_name}/${name_set.value}`;
    const url = `${URL}${text}`;
    console.log(url);
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
        console.log(data);
        addElemetToFlashcards(data);
    });
};
let suitable_facility;
const change = () => {
    // odczytać zawartość strong
    const div = document.querySelector(".card");
    const strong = div.querySelector("strong");
    const notion = strong.innerHTML;
    // znaleść odpowiedni obiekt
    for (let i = 0; i != flashcards.length; i++) {
        const obj = flashcards[i];
        if (obj.notion == notion) {
            suitable_facility = obj;
        }
    }
    strong.innerText += suitable_facility.definition;
    div.appendChild(createBTN("Znam"));
    div.appendChild(createBTN("Nie znam"));
};
