export const createBTN = (text) => {
    const btn = document.createElement("button");
    btn.innerText = text;
    btn.className = "btn_card";
    return btn;
};
const creatInfoElement = (card) => {
    const strong = document.createElement("strong");
    strong.innerHTML = card.notion;
    return strong;
};
const createInfo = (card) => {
    const elementP = document.createElement("p");
    elementP.appendChild(creatInfoElement(card));
    return elementP;
};
export const createDIV = (card) => {
    const div = document.createElement('div');
    div.className = "card";
    div.appendChild(createInfo(card));
    div.appendChild(createBTN("Pokaż odpowieć"));
    return div;
};
