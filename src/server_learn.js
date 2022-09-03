"use strict";
exports.__esModule = true;
exports.download_all_flashcards = exports.scoring_points = void 0;
var Render_1 = require("./Helpers/Render");
var Update_1 = require("./Helpers/Update");
var user_name = 'wojtek';
var flashcards = [];
var URL = 'http://127.0.0.1:8000/';
var scoring_points = function (card) {
    console.log(card);
    flashcards.forEach(function (element) {
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
var addElemetToFlashcards = function (card) {
    for (var i = 0; i != card.length; i++) {
        var obj = card[i];
        if (obj.categories == 'uczę się') {
            var newCart = {
                notion: obj.notion,
                definition: obj.definition,
                name_image: obj.name_image,
                categories: obj.categories,
                numberofrepetitions: 0,
                id: obj.id
            };
            flashcards.push(newCart);
        }
        else if (obj.categories == 'powtarzam') {
            var newCart = {
                notion: obj.notion,
                definition: obj.definition,
                name_image: obj.name_image,
                categories: obj.categories,
                numberofrepetitions: 3,
                id: obj.id
            };
            flashcards.push(newCart);
        }
        else {
            var newCart = {
                notion: obj.notion,
                definition: obj.definition,
                name_image: obj.name_image,
                categories: obj.categories,
                numberofrepetitions: 6,
                id: obj.id
            };
            flashcards.push(newCart);
        }
    }
    (0, Render_1.render)(flashcards);
};
var download_all_flashcards = function (event, select) {
    event.preventDefault();
    var name_set = select;
    var text = "get_flashcard/".concat(user_name, "/").concat(name_set.value);
    var url = "".concat(URL).concat(text);
    fetch(url)
        .then(function (res) { return res.json(); })
        .then(function (data) {
        addElemetToFlashcards(data);
    });
};
exports.download_all_flashcards = download_all_flashcards;
