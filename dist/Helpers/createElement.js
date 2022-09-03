export const removeElement = (element) => {
    element.remove();
};
export const createBTN = (text, classname) => {
    const btn = document.createElement('button');
    btn.innerText = text;
    btn.className = classname;
    return btn;
};
const creatInfoElement = (card) => {
    const strong = document.createElement('strong');
    strong.innerHTML = card.notion;
    return strong;
};
const createInfo = (card) => {
    const elementP = document.createElement('p');
    elementP.appendChild(creatInfoElement(card));
    return elementP;
};
export const createDIV = (card) => {
    const div = document.createElement('div');
    div.className = 'card';
    div.appendChild(createInfo(card));
    div.appendChild(createBTN('Pokaż odpowieć', 'btn_card'));
    return div;
};
export const creatediv = (name) => {
    const div = document.createElement('div');
    console.log(name);
    if (name == "znam") {
        div.innerText = name;
    }
    else if (name == " nie znam") {
        div.innerText = name;
    }
    return div;
};
