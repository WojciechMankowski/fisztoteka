import {Flashcard} from '../Types/interface'
import {change} from './Change'
import { createDIV, removeElement} from './createElement';

let next_cart: number = 0;
let btn_card: HTMLButtonElement;
export const render = (flashcards: Flashcard[]) => {
	const box_learn = document.querySelector('.box_learn');
	box_learn.appendChild(createDIV(flashcards[next_cart]));
	next_cart++;
	btn_card = document.querySelector('.btn_card');
	btn_card.addEventListener('click', () => change(flashcards));
};

export const render_next_card = (flashcards: Flashcard[]) => {
	if (next_cart == flashcards.length) {
        next_cart=0;
    }
	const card: HTMLElement = document.querySelector('.card');
	removeElement(card);
	const box_learn = document.querySelector('.box_learn');
	box_learn.appendChild(createDIV(flashcards[next_cart]));
	next_cart++;
	btn_card = document.querySelector('.btn_card');
	btn_card.addEventListener('click', () => change(flashcards));
};