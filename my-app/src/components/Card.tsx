import { CardState } from '../Types/type';
import {creatElement} from '../Helpers/CreatElement'
// element strong z pojęciem i definicją
// element z zdjęciem
// div z przyckami 1. pokaż odpowieć 2. znam 3 nie znam
// props => card: CardState i funckę do zmianny numeru karty
type Card_props = {
	cards: CardState[];
};
export const Card = (props: Card_props) => {
	const cards = props.cards;
	let next_card = 0;
	// const btn: HTMLButtonElement = document.querySelector('#btn')!
	// btn.addEventListener('click', () => {console.log('jestem button')})
	const creat_element = () => {
		// btn.addEventListener('click', () => {console.log('jestem button')})
		console.log('creat element')
		creatElement(cards[next_card])
	};
	return (
		<div className='card'>
            
			
		</div>
	);
};
