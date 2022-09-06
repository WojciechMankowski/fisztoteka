import React from 'react';
import { dowlandNameSet } from '../Helpers/DoawloandNameSet';
import { AddNewCard } from './AddNewFisccard';

type TypProps = {};
type TypeState = {
	NameSet: string[];
	len: number;
    SelectedCategory: string
};
type Element = {
	id: number;
	name_user: string;
	name_set: string;
	set_flascards: number;
};
class App extends React.Component<TypProps, TypeState> {
	constructor(props: TypProps) {
		super(props);
		this.state = {
			NameSet: [],
			len: 0, SelectedCategory:""
		};
	}
	
	componentDidMount() {
		const temporary: string[] = [];
		const url = `http://127.0.0.1:8000/wojtek/sets`;
		fetch(url)
			.then((res) => res.json())
			.then((res: Element[]) => {
				res.forEach((element) => {
					this.setState({ len: res.length });
					this.saveDataInState(element.name_set);
				});
			});
	}
    saveDataInState(element: string) {
		if (this.state.len !== 0) {
			if (this.state.len != this.state.NameSet.length) {
				if (this.state.NameSet.indexOf(element) == -1) {
					this.state.NameSet.push(element);
					console.log(this.state.NameSet);
				}
			}
		}
	}
    setSelectedCategory(value: string){
        this.setState({SelectedCategory: value})
    }
	render() {
		return (
			<div>
				<h2>Moja APLIKACJA</h2>
				<AddNewCard nameset={this.state.NameSet} SelectCategories={this.setSelectedCategory} />
			</div>
		);
	}
}

export default App;

// kompoment logowania
// kompoment rejestracji
