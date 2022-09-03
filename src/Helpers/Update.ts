import {Flashcard} from '../Types/interface'
import {Categories} from '../Types/type'
const URL = 'http://127.0.0.1:8000/';
export const updateCategories = (card: Flashcard) => {
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