const user_name = "wojtek";
const flashcards = [];
const addElemetToFlashcards = (card) => {
    console.log(card);
};
export const download_all_flashcards = (event) => {
    event.preventDefault();
    const name_set = document.querySelector("#nameset");
    const text = `get_flashcard/${user_name}/${name_set.value}`;
    const url = `${URL}${text}`;
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
        addElemetToFlashcards(data);
    });
};
//# sourceMappingURL=server_learn.js.map