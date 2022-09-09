import { useState } from 'react';
import Select_and_options from './Form/Selecet';
import { Card as card_type } from '../Types/type';
import { creatElement } from '../Helpers/CreatElement';
import { Card } from './Card';

const URL = 'http://127.0.0.1:8000';
let text;
const Cards: card_type[] = [];

const getCard = () => {
	const user_name = 'wojtek';
	const select: HTMLSelectElement = document.querySelector('.select_name')!;
	const select_value = select.value;
	text = `get_flashcard/${user_name}/${select_value}`;
	const url = `${URL}/${text}`;
	fetch(url)
		.then((res) => res.json())
		.then((res) =>
			res.forEach((element: card_type) => {
				const card_element: card_type = element;
				Cards.push(card_element);
			})
		);
};
export const Learn = (props: { values: string[] }) => {
	const [cards, setCards] = useState<card_type[]>([]);
	const creatInfo = (text_p: string, all_card: boolean) => {
		const element_p = document.createElement('p');
		const element_btn = document.createElement('button');
		const div_info = document.querySelector('.info');
		const p_true = document.querySelector('.true');
		const p_false = document.querySelector('.false');
		const btn = document.querySelector('.learn');
		p_true?.remove();
		p_false?.remove();
		btn?.remove();

		if (all_card) {
			element_p.innerText = text_p;
			element_p.className = 'true';
			element_btn.innerText = 'Uczę się';
			element_btn.className = 'learn';
			div_info?.appendChild(element_p);
			// div_info?.appendChild(element_btn);
		} else {
			element_p.innerText = text_p;
			element_p.className = 'false';
			div_info?.appendChild(element_p);
		}
	};
	const getcards = () => {
		getCard();
		Cards.forEach((element) => {
			cards.push(element);
		});
		console.log(cards.length != 0);
		if (cards.length !== 0) {
			creatInfo('Twoje fiszki zostały pobrane. Ucz się śmiało.', true);
		} else {
			creatInfo('Spróbuj jeszcze raz', false);
		}
	};

	
    return (
			<div>
				<Select_and_options values={props.values} class_name={'select_name'} />
				<button onClick={getcards}>Uczę się</button>
				<div className='info'></div>
				<div className='card'>
					<Card cards={cards} />
				</div>
			</div>
		);
    // if (cards.length !== 0) {
    //     console.log("TABELA TABELA")
	// 	return (
	// 		<div>
	// 			<Select_and_options values={props.values} class_name={'select_name'} />
	// 			<button onClick={getcards}>Uczę się</button>
	// 			<div className='info'></div>
	// 			<div className='card'>
	// 				<Card cards={cards} />
	// 			</div>
	// 		</div>
	// 	);
	// } else {
	// 	return (
	// 		<div>
	// 			<Select_and_options values={props.values} class_name={'select_name'} />
	// 			<button onClick={getcards}>Uczę się</button>
	// 			<div className='info'></div>
	// 			<div className='card'></div>
	// 		</div>
	// 	);
	// }
};
