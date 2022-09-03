"use strict";
exports.__esModule = true;
exports.change = void 0;
var createElement_1 = require("./createElement");
var server_learn_1 = require("../server_learn");
var Render_1 = require("./Render");
var suitable_facility;
var btn_know, btn_not_know;
var change = function (flashcards) {
    var div = document.querySelector('.card');
    var strong = div.querySelector('strong');
    var notion = strong.innerHTML;
    for (var i = 0; i != flashcards.length; i++) {
        var obj = flashcards[i];
        if (obj.notion == notion) {
            suitable_facility = obj;
        }
    }
    var btn_card = document.querySelector('.btn_card');
    var img = (0, createElement_1.creat_img)(suitable_facility);
    console.log(img);
    if (!img != null) {
        div.appendChild(img);
    }
    strong.innerText = suitable_facility.definition;
    (0, createElement_1.removeElement)(btn_card);
    var div_on_btn = (0, createElement_1.creatediv)("");
    div_on_btn.appendChild((0, createElement_1.creatediv)("nie znam"));
    div_on_btn.appendChild((0, createElement_1.creatediv)("znam"));
    div.appendChild(div_on_btn);
    btn_know = document.querySelector('.know');
    btn_not_know = document.querySelector('.not_know');
    btn_know.addEventListener('click', function () { return (0, server_learn_1.scoring_points)(suitable_facility); });
    btn_not_know.addEventListener("click", Render_1.render_next_card);
};
exports.change = change;
