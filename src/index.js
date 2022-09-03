"use strict";
exports.__esModule = true;
var server_get_1 = require("./server_get");
var server_learn_1 = require("./server_learn");
// creat variables
var URL = 'http://127.0.0.1:8000/';
var elementSelect = document.querySelector("#nameset_select");
var learn = document.querySelector("#nameset_learn");
// caling function
(0, server_get_1.getNameSet)();
// choosing a good item
if (elementSelect != null) {
    var btn_addset = document.querySelector("#addset");
    var btn_addCards = document.querySelector("#btn_addCart");
    btn_addset.addEventListener("click", server_get_1.addNewSet);
    elementSelect.addEventListener("click", function () { return (0, server_get_1.creatOptions)(elementSelect); });
    btn_addCards.addEventListener("click", server_get_1.addFidhCard);
}
else if (learn != null) {
    learn.addEventListener('click', function () { return (0, server_get_1.creatOptions)(learn); });
    var btn_learn = document.querySelector('.btn_learn');
    btn_learn.addEventListener('click', function (event) { return (0, server_learn_1.download_all_flashcards)(event, learn); });
    console.log(btn_learn);
}
