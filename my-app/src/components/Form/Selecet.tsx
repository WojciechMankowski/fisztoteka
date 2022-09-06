import React from 'react';
import { dowlandNameSet } from '../../Helpers/DoawloandNameSet';

type TypProps = {};
type TypeState = {
	NameSet: string[];
	length: number;
};
export class Selecet extends React.Component<TypProps, TypeState> {
	constructor(props: TypProps) {
		super(props);
		this.state = {
			NameSet: [],
			length: 0,
		};
	}

	creatOptions = () => {
		const option_list = this.state.NameSet.map((Element) => {
			const option = document.createElement('option');
			option.value = Element;
			option.innerText = Element;
			return option;
		});
		return option_list;
	};
	addOption = () => {
		const select = document.querySelector('.select')!;
		const options = this.creatOptions();
		for (let i = 0; i !== options.length; i++) {
			select.appendChild(options[i]);
		}
	};
	next = 0;
	dowlandOptions = () => {
		const nameset = dowlandNameSet();	
		const NameSet_notDup = [...new Set(nameset)]
		console.log(NameSet_notDup);
		// console.log(this.state.length == this.next, this.state.length, this.next);
		// const nameset = dowlandNameSet();
		this.setState({ length: 2 });
		this.state.NameSet.push(...NameSet_notDup);
		const select: HTMLSelectElement = document.querySelector('.select')!;
		
		const options_ = select.options;
		console.log(options_);
		const options = this.creatOptions();
		const optionInList: string[] = [];
		options.forEach((Element) => {
			if (optionInList.indexOf(Element.value) == -1) {
				console.log(Element.value);
				optionInList.push(Element.value);
				select.appendChild(Element);
				this.next++;
			}
		});
	};
	render() {
		return (
			<div onClick={this.dowlandOptions}>
				<p>{this.state.length}</p>

				<select className='select'></select>
			</div>
			// if (this.state.length == this.next) {
			// 	return (
			// 		<div>
			// 			<p>{this.state.length}</p>

			// 			<select className='select'></select>
			// 		</div>
			// 	);
			// } else {
			// 	return (
			// 		<div onMouseOver={this.dowlandOptions}>
			// 			<p>{this.state.length}</p>

			// 			<select className='select'></select>
			// 		</div>
			// 	);
		);
	}
}
