const URL = 'http://127.0.0.1:8000/';
const name_set = [];

export const getNameSet = () => {
	const text = `wojtek/sets`;
	const url = `${URL}${text}`;
	fetch(url)
		.then((res) => res.json())
		.then((data) =>
			data.forEach((element) => {
				name_set.push(element.name_set);
			})
		)
		.catch((error) => console.error(error));
};

export const creatOptions = () => {
	const lengtNameSet = name_set.length;
	const elementSelect = document.querySelector('#nameset_select');
	let length = elementSelect.options.length - 1;
	if (elementSelect.options.length == 1) {
		let index = 0;
		while (lengtNameSet != index) {
			elementSelect.options[length + 1] = new Option(
				name_set[index],
				name_set[index]
			);
			index++;
			length++;
		}
	}
};

// funkcja do zapisywania fiszek do zestawu
export const addFidhCard = (event) => {
	event.preventDefault();
	const notion_value = document.querySelector('#notion').value;
	const definition_value = document.querySelector('#def').value;
	const name_set = document.querySelector('#nameset_select').value;
	const text = `flashcards/${notion_value}/${definition_value}/${name_set}/'wojtek'`;
	const url = `${URL}${text}`;
	console.log(url);
	fetch(url, {
		method: 'POST',
	})
		.then((res) => console.log(res.ok))
		.catch((error) => console.error(error));
};
// funkcja do zapisywania nowego zestawu
export const addNewSet = (event) => {
	event.preventDefault();
	const name_set = document.querySelector('#nameset').value;
	const text = `add_set/?user_name=wojtek&name_set=${name_set}`;
	const url = `${URL}${text}`;
	fetch(url, { method: 'POST' })
		.then((res) => console.log(res.ok))
		.catch((error) => console.error(error));
};