import { Flashcard } from '../Types/interface';

export const createBTN = (text: string) => {
    const btn = document.createElement("button")
    btn.innerText = text
    btn.className = "btn_card"
    return btn
}

const creatInfoElement = (card: Flashcard) => {
    const strong = document.createElement("strong")
    strong.innerHTML = card.notion
    return strong
}

const createInfo = (card: Flashcard) => {
    const elementP = document.createElement("p")
    elementP.appendChild(creatInfoElement(card))
    return elementP
}


export const createDIV = (card: Flashcard) => {
	const div = document.createElement('div');
    div.className = "card"
    div.appendChild(createInfo(card))
    div.appendChild(createBTN("Pokaż odpowieć"))
    return div
};
