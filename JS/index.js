// funkcja do pobierania nazw zestawów
import { getNameSet, addNewSet, creatOptions, addFidhCard } from './server_get.js';
const URL = 'http://127.0.0.1:8000/';


// TODO zmianna kategorii fiszek => uczę się - powtarzam - znam


getNameSet();
const elementSelect = document.querySelector('#nameset_select');
const btn_addset = document.querySelector('#addset');
const btn_addCards = document.querySelector('#btn_addCart');
btn_addset.addEventListener('click', addNewSet);
elementSelect.addEventListener('click', creatOptions);
btn_addCards.addEventListener('click', addFidhCard);
