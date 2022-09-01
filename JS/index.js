// TODO funkcja do pobierania nazw zestawów

const URL = "http://127.0.0.1:8000/";
// TODO pobranie nazw zestawów fiszek
const name_set = [];
const addNameSet = [];
let next_click = 0;
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
  const elementSelect = document.querySelector("#nameset_select");
  let length = elementSelect.options.length - 1;
  console.log(next_click);
  if (next_click == 0) {
    name_set.forEach((element) => {
		console.log(element);
      elementSelect.options[length + 1] = new Option(element, element);
      addNameSet.push(element);
    });
    next_click++;
	length++;
  } else {
    console.log(addNameSet);
    next_click++;
	console.log(name_set);
    name_set.forEach((element) => {
		console.log(element in addNameSet);
      if (element in addNameSet) {
        elementSelect.options[length + 1] = new Option(element, element);
        addNameSet.push(element);
		length++
      }
    });
  }
};

// TODO funkcja do zapisywania fiszek do zestawu
// TODO funkcja do zapisywania nowego zestawu
const addNewSet = (event) => {
  event.preventDefault();
  const name_set = document.querySelector("#nameset").value;
  console.log(name_set);
  const text = `add_set/?user_name=wojtek&name_set=${name_set}`;
  const url = `${URL}${text}`;
  console.log(url);
  fetch(url, { method: "POST" })
    .then((res) => console.log(res))
    .catch((error) => console.error(error));
};
// TODO funkcja do pobierania fiszek z konkretnej kategorii
// TODO zmianna kategorii fiszek => uczę się - powtarzam - znam
getNameSet();

const elementSelect = document.querySelector("#nameset_select");
const btn_addset = document.querySelector("#addset");
elementSelect.addEventListener("click", creatOptions);
btn_addset.addEventListener("click", addNewSet);
