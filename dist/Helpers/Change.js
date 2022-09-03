"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.change = void 0;
const createElement_1 = require("./createElement");
const server_learn_1 = require("../server_learn");
const Render_1 = require("./Render");
let suitable_facility;
let btn_know, btn_not_know;
const change = (flashcards) => {
    const div = document.querySelector('.card');
    const strong = div.querySelector('strong');
    const notion = strong.innerHTML;
    for (let i = 0; i != flashcards.length; i++) {
        const obj = flashcards[i];
        if (obj.notion == notion) {
            suitable_facility = obj;
        }
    }
    const btn_card = document.querySelector('.btn_card');
    const img = (0, createElement_1.creat_img)(suitable_facility);
    console.log(img);
    if (!img != null) {
        div.appendChild(img);
    }
    strong.innerText = suitable_facility.definition;
    (0, createElement_1.removeElement)(btn_card);
    const div_on_btn = (0, createElement_1.creatediv)("");
    div_on_btn.appendChild((0, createElement_1.creatediv)("nie znam"));
    div_on_btn.appendChild((0, createElement_1.creatediv)("znam"));
    div.appendChild(div_on_btn);
    btn_know = document.querySelector('.know');
    btn_not_know = document.querySelector('.not_know');
    btn_know.addEventListener('click', () => (0, server_learn_1.scoring_points)(suitable_facility));
    btn_not_know.addEventListener("click", Render_1.render_next_card);
};
exports.change = change;
//# sourceMappingURL=Change.js.map