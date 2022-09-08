import React from 'react';
import Select_and_options from './Form/Selecet';
import { Card } from './Card';
import axios from 'axios';
import { creatElement, removeElement } from '../Helpers/CreatElement';
import { click } from '@testing-library/user-event/dist/click';
// w pamięci jest lista obiektów z bazy danych
// funkcja do zmianny obiektu
// funckja odpowiedzialna za wyświetlanie odpowiedniego kodu
interface Card {
	id: number;
	notion: string;
	definition: string;
	name_image: string | null;
	categories: string;
}
type LearnProps = { values: string[] };
type LearnState = {
	next_card: number;
	cards: Card[];
};
const URL = 'http://127.0.0.1:8000';
let text;
export class Learn extends React.Component<LearnProps, LearnState> {
	constructor(props: LearnProps) {
		super(props);
		this.state = {
			next_card: -1,
			cards: [],
		};
	}
	cards: Card[] = [];
	getCards = () => {
		const user_name = 'wojtek';
		const select: HTMLSelectElement = document.querySelector('.select_name')!;
		const select_value = select.value;
		text = `get_flashcard/${user_name}/${select_value}`;
		const url = `${URL}/${text}`;
		let cards_temperry: Card[] = [];

		axios.get(url).then((result) => {
			cards_temperry.push(...result.data);
			cards_temperry.forEach((Element) => this.state.cards.push(Element));
		});
		const btn: HTMLButtonElement = document.querySelector('#btn')!;
		removeElement(btn);

		const btns = document.createElement('button');
		btns.innerText = 'Uczę się!!';
		btns.addEventListener('click', () => {
			this.setState({ next_card: 0 });
			creatElement(this.state.cards[0]);
		});
		const div = document.querySelector('.learn')!;
		div.appendChild(btns);
	};
	render() {
		if (this.state.next_card == -1) {
			return (
				<div className='learn'>
					<Select_and_options
						values={this.props.values}
						class_name={'select_name'}
					/>
					<button onClick={this.getCards} className='learn' id='btn'>
						Uczę się
					</button>
				</div>
			);
		} else {
			return (
				<div className='learn'>
					<Select_and_options
						values={this.props.values}
						class_name={'select_name'}
					/>
					<button onClick={this.getCards} id='btn' className='learn'>
						Uczę się
					</button>
					<div className='card'>
						<Card cards={this.state.cards} />
					</div>
				</div>
			);
		}
	}
}
