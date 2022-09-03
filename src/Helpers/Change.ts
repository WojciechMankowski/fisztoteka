import { Flashcard } from "../Types/interface";
import {creat_img, removeElement, creatediv} from "./createElement"
import {scoring_points} from '../server_learn'
import {render_next_card} from './Render'
let suitable_facility: Flashcard;
let btn_know, btn_not_know;

export const change = (flashcards: Flashcard[]) => {
	const div = document.querySelector('.card');
	const strong = div.querySelector('strong');
	const notion = strong.innerHTML;
	for (let i = 0; i != flashcards.length; i++) {
		const obj = flashcards[i];
		if (obj.notion == notion) {
			suitable_facility = obj;
		}
	}
    const btn_card: HTMLButtonElement = document.querySelector('.btn_card');
	const img = creat_img(suitable_facility)
    console.log(img);
    if (! img != null ){div.appendChild(img)}
	strong.innerText = suitable_facility.definition;
	removeElement(btn_card);
	
	const div_on_btn = creatediv("")
	div_on_btn.appendChild(creatediv("nie znam"))
	div_on_btn.appendChild(creatediv("znam"))
	div.appendChild(div_on_btn)

	btn_know = document.querySelector('.know');
	btn_not_know = document.querySelector('.not_know')
	btn_know.addEventListener('click', () => scoring_points(suitable_facility));
	btn_not_know.addEventListener("click", render_next_card)
};