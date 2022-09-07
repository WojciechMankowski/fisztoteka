import { CardState } from '../Types/type';
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
	const creat_element = () => {
		console.log('creat_element');
		const strong = document.createElement('strong');
		strong.innerText = cards[next_card].notion;
		const div_card = document.querySelector('.card');
		div_card?.appendChild(strong);
	};

	return (
		<div>
            <button id='btn' onClick={creat_element}>
					Pokaż fiszkę
				</button>
			<div className='card'>
				
			</div>
		</div>
	);
};
