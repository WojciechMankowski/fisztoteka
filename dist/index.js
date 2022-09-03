"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_get_1 = require("./server_get");
const server_learn_1 = require("./server_learn");
// creat variables
// const URL = 'http://127.0.0.1:8000/';
const elementSelect = document.querySelector("#nameset_select");
const learn = document.querySelector("#nameset_learn");
// caling function
(0, server_get_1.getNameSet)();
// choosing a good item
if (elementSelect != null) {
    const btn_addset = document.querySelector("#addset");
    const btn_addCards = document.querySelector("#btn_addCart");
    btn_addset.addEventListener("click", server_get_1.addNewSet);
    elementSelect.addEventListener("click", () => (0, server_get_1.creatOptions)(elementSelect));
    btn_addCards.addEventListener("click", server_get_1.addFidhCard);
}
else if (learn != null) {
    learn.addEventListener('click', () => (0, server_get_1.creatOptions)(learn));
    const btn_learn = document.querySelector('.btn_learn');
    btn_learn.addEventListener('click', (event) => (0, server_learn_1.download_all_flashcards)(event, learn));
    console.log(btn_learn);
}
//# sourceMappingURL=index.js.map