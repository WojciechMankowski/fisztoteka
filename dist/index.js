// funkcja do pobierania nazw zestawów
import { getNameSet, addNewSet, creatOptions, addFidhCard } from './server_get.js';
import { download_all_flashcards } from './server_learn.js';
const URL = 'http://127.0.0.1:8000/';
getNameSet();
const elementSelect = document.querySelector("#nameset_select");
const learn = document.querySelector("#nameset_learn");

if (elementSelect != null) {
    const btn_addset = document.querySelector("#addset");
    const btn_addCards = document.querySelector("#btn_addCart");
    btn_addset.addEventListener("click", addNewSet);
    elementSelect.addEventListener("click", () => creatOptions(elementSelect));
    btn_addCards.addEventListener("click", addFidhCard);
}
else if (learn != null) {
    learn.addEventListener('click', () => creatOptions(learn));
    const btn_learn = document.querySelector('.btn_learn');
    btn_learn.addEventListener('click', (event) => download_all_flashcards(event, learn));
}
