const user_name = "wojtek";
const flashcards = [];
const addElemetToFlashcards = (card) => {
    console.log('card')
    console.log(card)
    for (let i = 0; i != card.length; i++) {
        const obj = card[i];
        console.log(`obj == ${obj.notion}`);
        if (obj.categories == "uczę się") {
            const newCart = {
                notion: obj.notion,
                definition: obj.definition,
                name_image: obj.name_image,
                categories: obj.categories, numberofrepetitions: 0, id: obj.id
            };
            flashcards.push(newCart);
        }
        else if (obj.categories == "powtarzam") {
            const newCart = {
                notion: obj.notion,
                definition: obj.definition,
                name_image: obj.name_image,
                categories: obj.categories, numberofrepetitions: 3, id: obj.id
            };
            flashcards.push(newCart);
        }
        else {
            const newCart = {
                notion: obj.notion,
                definition: obj.definition,
                name_image: obj.name_image,
                categories: obj.categories, numberofrepetitions: 6, id: obj.id
            };
            flashcards.push(newCart);
        }
    }
    console.table(flashcards);
};
const URL = "http://127.0.0.1:8000/";
export const download_all_flashcards = (event, select) => {
    event.preventDefault();
    const name_set = select;
    const text = `get_flashcard/${user_name}/${name_set.value}`;
    const url = `${URL}${text}`;
    console.log(url);
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
        addElemetToFlashcards(data);
    });
};
