"use strict";
exports.__esModule = true;
exports.updateCategories = void 0;
var URL = 'http://127.0.0.1:8000/';
var updateCategories = function (card) {
    var Categories;
    if (card.categories == "uczę się") {
        Categories = "powtarzam";
    }
    else if (card.categories == "powtarzam") {
        Categories = "znam";
    }
    var text = "update/flashcards/?notion=".concat(card.notion, "&categories=").concat(Categories);
    var url = "".concat(URL).concat(text);
    fetch(url, { 'method': 'PUT' })
        .then(function (res) { return res.json(); })
        .then(function (res) { return console.log(res); })["catch"](function (error) { return console.error(error); });
};
exports.updateCategories = updateCategories;
