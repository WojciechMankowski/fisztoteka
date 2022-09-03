import { Flashcard, Card } from './Types/interface';
import { createDIV, createBTN, removeElement, creatediv} from './Helpers/createElement';
import {Categories} from './Types/type'

const user_name: string = 'wojtek';
const flashcards: Flashcard[] = [];
let btn_card: HTMLButtonElement;
let suitable_facility: Flashcard;
let btn_know, btn_not_know;
let next_cart: number = 0;
const URL = 'http://127.0.0.1:8000/';

const render = () => {
	const box_learn = document.querySelector('.box_learn');
	box_learn.appendChild(createDIV(flashcards[next_cart]));
	next_cart++;
	btn_card = document.querySelector('.btn_card');
	btn_card.addEventListener('click', change);
};

const render_next_card = () => {
	if (next_cart == flashcards.length) {
        next_cart=0;
    }
	const card: HTMLElement = document.querySelector('.card');
	removeElement(card);
	const box_learn = document.querySelector('.box_learn');
	box_learn.appendChild(createDIV(flashcards[next_cart]));
	next_cart++;
	btn_card = document.querySelector('.btn_card');
	btn_card.addEventListener('click', change);
};
const updateCategories = (card: Flashcard) => {
	let Categories: Categories
	if (card.categories == "uczę się"){
		Categories = "powtarzam"
	}
	else if (card.categories == "powtarzam"){
		Categories = "znam"
	}
	const text = `update/flashcards/?notion=${card.notion}&categories=${Categories}`
	const url = `${URL}${text}`
	fetch(url, {'method': 'PUT'})
	.then(res => res.json())
	.then(res => console.log(res))
	.catch(error => console.error(error))
}
const scoring_points = (card: Flashcard) => {
	
  flashcards.forEach((element) => {
		if (element == card) {
			element.numberofrepetitions++;
			if (element.numberofrepetitions == 3) {
				updateCategories(element)
			}
		}
	});
  render_next_card()
};

const addElemetToFlashcards = (card: Card[]) => {
	for (let i = 0; i != card.length; i++) {
		const obj = card[i];
		if (obj.categories == 'uczę się') {
			const newCart: Flashcard = {
				notion: obj.notion,
				definition: obj.definition,
				name_image: obj.name_image,
				categories: obj.categories,
				numberofrepetitions: 0,
				id: obj.id,
			};
			flashcards.push(newCart);
		} else if (obj.categories == 'powtarzam') {
			const newCart: Flashcard = {
				notion: obj.notion,
				definition: obj.definition,
				name_image: obj.name_image,
				categories: obj.categories,
				numberofrepetitions: 3,
				id: obj.id,
			};
			flashcards.push(newCart);
		} else {
			const newCart: Flashcard = {
				notion: obj.notion,
				definition: obj.definition,
				name_image: obj.name_image,
				categories: obj.categories,
				numberofrepetitions: 6,
				id: obj.id,
			};
			flashcards.push(newCart);
		}
	}
	render();
};


export const download_all_flashcards = (
	event: Event,
	select: HTMLSelectElement
) => {
	event.preventDefault();
	const name_set: HTMLSelectElement = select;
	const text = `get_flashcard/${user_name}/${name_set.value}`;
	const url = `${URL}${text}`;
	fetch(url)
		.then((res) => res.json())
		.then((data) => {
			addElemetToFlashcards(data);
		});
};

const change = () => {
	const div = document.querySelector('.card');
	const strong = div.querySelector('strong');
	const notion = strong.innerHTML;
	for (let i = 0; i != flashcards.length; i++) {
		const obj = flashcards[i];
		if (obj.notion == notion) {
			suitable_facility = obj;
		}
	}
	strong.innerText = suitable_facility.definition;
	removeElement(btn_card);
	// div.appendChild(createBTN('Znam', 'btn_know'));
	const div_on_btn = creatediv("")
	div_on_btn.appendChild(creatediv("znam"))
	div_on_btn.appendChild(creatediv("nie znam"))
	div.appendChild(div_on_btn)
	// div.appendChild(createBTN('Nie znam', 'btn_not_know'));
	btn_know = document.querySelector('.btn_know');
	btn_not_know = document.querySelector('.btn_not_know')
	btn_know.addEventListener('click', () => scoring_points(suitable_facility));
	btn_not_know.addEventListener("click", render_next_card)
};
