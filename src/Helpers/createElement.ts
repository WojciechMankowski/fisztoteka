import { Flashcard } from '../Types/interface';

export const removeElement = (element: HTMLElement) => {
	element.remove();
};
export const createBTN = (text: string, classname: string) => {
	const btn = document.createElement('button');
	btn.innerText = text;
	btn.className = classname;
	return btn;
};

const creatInfoElement = (card: Flashcard) => {
	const strong = document.createElement('strong');
	strong.innerHTML = card.notion;
	return strong;
};

const createInfo = (card: Flashcard) => {
	const elementP = document.createElement('p');
	elementP.appendChild(creatInfoElement(card));
	return elementP;
};

export const createDIV = (card: Flashcard) => {
	const div = document.createElement('div');
	div.className = 'card';
	div.appendChild(createInfo(card));
	div.appendChild(createBTN('Pokaż odpowieć', 'btn_card'));
	return div;
};
export const creatediv= (name: string) => {
	const div = document.createElement('div');
	if (name== "znam"){
		div.innerText = name
	}else if (name ==" nie znam"){
		div.innerText = name
	}
	return div
}