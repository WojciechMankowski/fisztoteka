import { Flashcard, Card } from "./Types/interface";
const user_name: string = "wojtek";
const flashcards: Flashcard[] = [];

const addElemetToFlashcards = (card: Card[]) => {
  for (let i = 0; i != card.length; i++) {
    const obj = card[i];
    if (obj.categories == "uczę się") {
      const newCart: Flashcard = {
        notion: obj.notion,
        definition: obj.definition,
        name_image: obj.name_image,
        categories: obj.categories, numberofrepetitions: 0, id: obj.id
      };
      flashcards.push(newCart)
    }else if (obj.categories == "powtarzam"){
      const newCart: Flashcard = {
        notion: obj.notion,
        definition: obj.definition,
        name_image: obj.name_image,
        categories: obj.categories, numberofrepetitions: 3, id: obj.id
      };
      flashcards.push(newCart)
    }else {
      const newCart: Flashcard = {
        notion: obj.notion,
        definition: obj.definition,
        name_image: obj.name_image,
        categories: obj.categories, numberofrepetitions: 6, id: obj.id
      };
      flashcards.push(newCart)
    }
  }
  console.table(flashcards)
};
const URL = "http://127.0.0.1:8000/";
export const download_all_flashcards = (
  event: Event,
  select: HTMLSelectElement
) => {
  event.preventDefault();
  const name_set: HTMLSelectElement = select;
  const text = `get_flashcard/${user_name}/${name_set.value}`;
  const url = `${URL}${text}`;
  console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      addElemetToFlashcards(data);
    });
};
