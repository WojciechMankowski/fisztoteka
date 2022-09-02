import { creatOptions, getNameSet } from './server_get.js';
const user_name = 'wojtek';
const URL = 'http://127.0.0.1:8000/';
const creatTextoLI = (flashcards) => {
    const infoElement = document.createElement('div');
    const contryName = document.createElement('strong');
    const span = document.createElement('span');
    const elemntBr = document.createComment('br');
    span.innerHTML = flashcards.definition;
    contryName.innerHTML = flashcards.notion;
    infoElement.appendChild(contryName);
    infoElement.appendChild(span);
    return infoElement;
};
const creatLI = (flashcards) => {
    const li = document.createElement('li');
    li.appendChild(creatTextoLI(flashcards));
    return li;
};
const creatUL = (flashcards) => {
    const Elementlist = document.createElement('ul');
    flashcards.forEach((card) => Elementlist.appendChild(creatLI(card)));
    return Elementlist;
};
function functionLearn(flashcards) {
    const box_learn = document.querySelector('.box_learn');
    const elementList = creatUL(flashcards);
    console.log(elementList);
    box_learn.appendChild(elementList);
}
const doawlond_all_flashcards = (event) => {
    event.preventDefault();
    const elementSelectValue = document.querySelector('#nameset_select').value;
    const text = `get_flashcard/${user_name}/${elementSelectValue}`;
    const url = `${URL}${text}`;
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
        functionLearn(data);
    });
};
getNameSet();
const elementSelect = document.querySelector('#nameset_select');
const btn_learn = document.querySelector('.btn_learn');
btn_learn.addEventListener('click', doawlond_all_flashcards);
elementSelect.addEventListener('click', creatOptions);
//# sourceMappingURL=server_learn.js.map