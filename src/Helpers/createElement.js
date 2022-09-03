"use strict";
exports.__esModule = true;
exports.creatediv = exports.createDIV = exports.creat_img = exports.createBTN = exports.removeElement = void 0;
var removeElement = function (element) {
    element.remove();
};
exports.removeElement = removeElement;
var createBTN = function (text, classname) {
    var btn = document.createElement("button");
    btn.innerText = text;
    btn.className = classname;
    return btn;
};
exports.createBTN = createBTN;
var creatInfoElement = function (card) {
    var strong = document.createElement("strong");
    strong.innerHTML = card.notion;
    return strong;
};
var creat_img = function (card) {
    console.log(card.name_image);
    if (card.name_image == "")
        return;
    var img = document.createElement('img');
    img.src = card.name_image;
    img.className = "img_cart";
    return img;
};
exports.creat_img = creat_img;
var createDIV = function (card) {
    var div = document.createElement("div");
    div.className = "card";
    div.appendChild(creatInfoElement(card));
    div.appendChild((0, exports.createBTN)("Pokaż odpowieć", "btn_card"));
    return div;
};
exports.createDIV = createDIV;
var creat_button = function (name) {
    var btn = document.createElement("button");
    var img = document.createElement("img");
    var strong = document.createElement("strong");
    var br = document.createElement("br");
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
var creatediv = function (name) {
    var div = document.createElement("div");
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
