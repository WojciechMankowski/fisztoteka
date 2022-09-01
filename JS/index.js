// TODO funkcja do pobierania nazw zestawów

const URL = 'http://127.0.0.1:8000/';
// TODO pobranie nazw zestawów fiszek
const name_set = [];
const getNameSet = () => {
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
const creatOptions = () => {
	const elementSelect = document.querySelector('#nameset_select');
	let length = elementSelect.options.length - 1;
	name_set.forEach(
		(element) =>
			(elementSelect.options[length + 1] = new Option(element, element))
	);
};

// TODO funkcja do zapisywania fiszek do zestawu
// TODO funkcja do zapisywania nowego zestawu
// TODO funkcja do pobierania fiszek z konkretnej kategorii
// TODO zmianna kategorii fiszek => uczę się - powtarzam - znam
getNameSet();

const elementSelect = document.querySelector('#nameset_select');
elementSelect.addEventListener('click', creatOptions);
