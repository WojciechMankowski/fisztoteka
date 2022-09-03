"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.creatediv = exports.createDIV = exports.creat_img = exports.createBTN = exports.removeElement = void 0;
const removeElement = (element) => {
    element.remove();
};
exports.removeElement = removeElement;
const createBTN = (text, classname) => {
    const btn = document.createElement("button");
    btn.innerText = text;
    btn.className = classname;
    return btn;
};
exports.createBTN = createBTN;
const creatInfoElement = (card) => {
    const strong = document.createElement("strong");
    strong.innerHTML = card.notion;
    return strong;
};
const creat_img = (card) => {
    console.log(card.name_image);
    if (card.name_image == "")
        return null;
    const img = document.createElement('img');
    img.src = card.name_image;
    img.className = "img_cart";
    return img;
};
exports.creat_img = creat_img;
const createDIV = (card) => {
    const div = document.createElement("div");
    div.className = "card";
    div.appendChild(creatInfoElement(card));
    div.appendChild((0, exports.createBTN)("Pokaż odpowieć", "btn_card"));
    return div;
};
exports.createDIV = createDIV;
const creat_button = (name) => {
    const btn = document.createElement("button");
    const img = document.createElement("img");
    const strong = document.createElement("strong");
    const br = document.createElement("br");
    img.className = "img_button";
    console.log("creat button");
    if (name == "nie znam") {
        img.src = "../IMG/left-arrow.png";
        btn.className = "not_know";
        strong.innerText = "Uczę się jeszcze raz";
    }
    else if (name == "znam") {
        img.src = "../IMG/right-arrow.png";
        strong.innerText = "Rozumiem";
        btn.className = "know";
    }
    btn.appendChild(strong);
    btn.appendChild(br);
    btn.appendChild(img);
    return btn;
};
const creatediv = (name) => {
    const div = document.createElement("div");
    if (name == "znam") {
        div.appendChild(creat_button(name));
    }
    else if (name == "nie znam") {
        div.appendChild(creat_button(name));
    }
    div.className = "div_btn";
    return div;
};
exports.creatediv = creatediv;
//# sourceMappingURL=createElement.js.map