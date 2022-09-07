import React from 'react';
import { AddNewCard } from './AddNewFisccard';
import {Element} from '../Types/type'
import {TypProps, TypeState} from '../Types/props'
import {LearnDiv} from './LernDiv'
class App extends React.Component<TypProps, TypeState> {
	constructor(props: TypProps) {
		super(props);
		this.state = {
			NameSet: [],
			len: 0, SelectedCategory:""
		};
	}
	
	componentDidMount() {
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
				}
			}
		}
	}

	render() {
		return (
			<div>
				<h2>Moja APLIKACJA</h2>
				<AddNewCard nameset={this.state.NameSet} />
                <LearnDiv values={this.state.NameSet}/>
			</div>
		);
	}
}

export default App;

// kompoment logowania
// kompoment rejestracji
