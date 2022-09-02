const URL = "http://127.0.0.1:8000/";
const name_set = [];
export const getNameSet = () => {
    const text = `wojtek/sets`;
    const url = `${URL}${text}`;
    fetch(url)
        .then((res) => res.json())
        .then((data) => data.forEach((element) => {
        if (element.name_set in name_set) {
            console.log();
        }
        else {
            name_set.push(element.name_set);
        }
    }))
        .catch((error) => console.error(error));
};
export const creatOptions = (select) => {
    const nameset = [...new Set(name_set)];
    const lengtNameSet = nameset.length;
    const elementSelect = select;
    let length = elementSelect.options.length - 1;
    if (elementSelect.options.length == 1) {
        let index = 0;
        while (lengtNameSet != index) {
            elementSelect.options[length + 1] = new Option(nameset[index], nameset[index]);
            index++;
            length++;
        }
    }
};
// funkcja do zapisywania fiszek do zestawu
export const addFidhCard = (event) => {
    event.preventDefault();
    const notion = document.querySelector("#notion");
    const notion_value = notion.value;
    const definition = document.querySelector("#def");
    const definition_value = definition.value;
    const name_set = document.querySelector("#nameset_select");
    const name_set_value = name_set.value;
    const text = `flashcards/${notion_value}/${definition_value}/${name_set_value}/'wojtek'`;
    const url = `${URL}${text}`;
    console.log(url);
    fetch(url, {
        method: "POST",
    })
        .then((res) => console.log(res.ok))
        .catch((error) => console.error(error));
};
// funkcja do zapisywania nowego zestawu
export const addNewSet = (event) => {
    event.preventDefault();
    const name_set = document.querySelector('#nameset');
    const name_set_value = name_set.value;
    const text = `add_set/?user_name=wojtek&name_set=${name_set_value}`;
    const url = `${URL}${text}`;
    fetch(url, { method: 'POST' })
        .then((res) => console.log(res.ok))
        .catch((error) => console.error(error));
};
