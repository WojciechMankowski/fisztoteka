export const removeElement = (element) => {
	element.remove();
};
export const createBTN = (text, classname) => {
	const btn = document.createElement('button');
	btn.innerText = text;
	btn.className = classname;
	return btn;
};

const creatInfoElement = (card) => {
	const strong = document.createElement('strong');
	strong.innerHTML = card.notion;
	return strong;
};
export const creat_img = (card) => {
	if (card.name_image == '') return null;
	const img = document.createElement('img');
	img.src = card.name_image;
	img.className = 'img_cart';
	return img;
};

export const createDIV = (card) => {
	const div = document.createElement('div');
	div.className = 'card';
	div.appendChild(creatInfoElement(card));
	div.appendChild(createBTN('Pokaż odpowieć', 'btn_card'));
	return div;
};

const creat_button = (name) => {
	const btn = document.createElement('button');
	const span = document.createElement('span');
	const br = document.createElement('br');

	if (name == 'nie znam') {
		btn.className = 'not_know';
		span.innerHTML = '<i class="fa-solid fa-arrow-left"></i>';
	} else if (name == 'znam') {
		btn.className = 'know';
		span.innerHTML = `<i class="fa-solid fa-arrow-right"></i>`;
	}
	btn.appendChild(br);
	btn.appendChild(span);
	return btn;
};
export const creatediv = (name) => {
	const div = document.createElement('div');
	if (name == 'znam') {
		div.appendChild(creat_button(name));
	} else if (name == 'nie znam') {
		div.appendChild(creat_button(name));
	}
	div.className = 'div_btn';
	return div;
};
