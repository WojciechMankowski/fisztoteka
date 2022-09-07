import axios from 'axios';
import { CardState } from '../Types/type';

const URL = 'http://127.0.0.1:8000';
let text: string;
let status: number = 0;
export const add_new_card = (
	nameset: string,
	notion: string,
	definition: string,
	nameImg: string,
	user: string
) => {
	let img;
	if (nameImg === '') {
		img = 'None';
	} else {
		img = nameImg;
	}
	text = `flashcards/?notion=${notion}&definition=${definition}&name_set=${nameset}&nameuser=${user}&name_image=${img}`;
	const url = `${URL}/${text}`;
	axios
		.post(url)
		.then((result) => (status = result.status))
		.catch((error) => console.log(error));
	return status;
};
export const get_carts = (user_name: string, name_set: string) => {
	text = `get_flashcard/${user_name}/${name_set}`;
	const url = `${URL}/${text}`;
	const cards: CardState[] = [];
	const dataToCars = (card: CardState) => {
		const data_to_card: CardState = {
			id: card.id,
			notion: card.notion,
			definition: card.definition,
			categories: card.categories,
			name_image: card.name_image,
		};
		cards.push(data_to_card);
	};
	axios
		.get(url)
		.then((result) => {
			const data: CardState[] = result.data;
			data.forEach((element) => {
				dataToCars(element);
			});
		})
		.catch((error) => console.log(error));
	return cards;
};
