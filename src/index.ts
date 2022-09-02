// funkcja do pobierania nazw zestawów
import { getNameSet, addNewSet, creatOptions, addFidhCard } from './server_get';
import {download_all_flashcards } from './server_learn'
const URL = 'http://127.0.0.1:8000/';

getNameSet();
const elementSelect: HTMLSelectElement = document.querySelector("#nameset_select");
const learn: HTMLSelectElement = document.querySelector("#nameset_learn");
console.log(learn);
if (elementSelect != null) {
  const btn_addset = document.querySelector("#addset");
  const btn_addCards = document.querySelector("#btn_addCart");
  btn_addset.addEventListener("click", addNewSet);
  elementSelect.addEventListener("click", () => creatOptions(elementSelect));
  btn_addCards.addEventListener("click", addFidhCard);
}
else if (learn != null){
    learn.addEventListener('click', () => creatOptions(learn))
    const btn_learn: HTMLButtonElement | null= document.querySelector('.btn_learn')
    btn_learn.addEventListener('click', (event) => download_all_flashcards(event, learn))
    console.log(btn_learn);
}
