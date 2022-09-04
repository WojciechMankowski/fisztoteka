
import { render_next_card, render } from "./Helpers/Render.js";
import updateCategories  from "./Helpers/Update.js";
const user_name = 'wojtek';
const flashcards = [];
const URL = 'http://127.0.0.1:8000/';
export const scoring_points = (card) => {
    flashcards.forEach((element) => {
        if (element == card) {
            element.numberofrepetitions++;
            if (element.numberofrepetitions == 3) {
                updateCategories(element);
            }
        }
    });
    render_next_card(flashcards);
};

export const addElemetToFlashcards = (card) => {
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
    render(flashcards);
};
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
