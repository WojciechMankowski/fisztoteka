import { Card as card } from '../Types/type';
import {creatElement} from '../Helpers/CreatElement'
// element strong z pojęciem i definicją
// element z zdjęciem
// div z przyckami 1. pokaż odpowieć 2. znam 3 nie znam
// props => card: CardState i funckę do zmianny numeru karty
type Card_props = {
	cards: card[];
};
export const Card = (props: Card_props) => {
	const cards = props.cards;
	let next_card = 0;
	console.log(cards[next_card]);
	const btn: HTMLButtonElement = document.querySelector('.learn_card')!;
	
	const creat_element = () => {
		btn.addEventListener('click', () => {
			const card = cards[0]
			creatElement(card);
		});
	}
	return (
		
		<div className='card'>
			<button className='learn_card'
			onClick={creat_element}
			>Pokaż fiszkę</button>
		</div>
	);
};
