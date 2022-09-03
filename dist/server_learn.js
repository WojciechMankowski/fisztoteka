"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.download_all_flashcards = exports.scoring_points = void 0;
const Render_1 = require("./Helpers/Render");
const Update_1 = require("./Helpers/Update");
const user_name = 'wojtek';
const flashcards = [];
const URL = 'http://127.0.0.1:8000/';
const scoring_points = (card) => {
    console.log(card);
    flashcards.forEach((element) => {
        if (element == card) {
            element.numberofrepetitions++;
            if (element.numberofrepetitions == 3) {
                (0, Update_1.updateCategories)(element);
            }
        }
    });
    (0, Render_1.render_next_card)(flashcards);
};
exports.scoring_points = scoring_points;
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
    (0, Render_1.render)(flashcards);
};
const download_all_flashcards = (event, select) => {
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
exports.download_all_flashcards = download_all_flashcards;
//# sourceMappingURL=server_learn.js.map