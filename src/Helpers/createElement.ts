import { Flashcard } from "../Types/interface";

export const removeElement = (element: HTMLElement) => {
  element.remove();
};
export const createBTN = (text: string, classname: string) => {
  const btn = document.createElement("button");
  btn.innerText = text;
  btn.className = classname;
  return btn;
};

const creatInfoElement = (card: Flashcard) => {
  const strong = document.createElement("strong");
  strong.innerHTML = card.notion;
  return strong;
};

export const creat_img = (card: Flashcard)=> {
  console.log(card.name_image);
  if (card.name_image == "") return null
  const img = document.createElement('img')
  img.src = card.name_image
  img.className = "img_cart"
  return img

}
export const createDIV = (card: Flashcard) => {
  const div = document.createElement("div");
  div.className = "card";
  div.appendChild(creatInfoElement(card));
  div.appendChild(createBTN("Pokaż odpowieć", "btn_card"));
  return div;
};
const creat_button = (name) => {
  const btn = document.createElement("button");
  const img = document.createElement("img");
  const strong = document.createElement("strong");

  const br = document.createElement("br");
  img.className = "img_button";
  console.log("creat button");
  if (name == "nie znam") {
    img.src = "../IMG/left-arrow.png";
    btn.className = "not_know";
    strong.innerText = "Uczę się jeszcze raz";
  } else if (name == "znam") {
    img.src = "../IMG/right-arrow.png";
    strong.innerText = "Rozumiem";
    btn.className = "know";
  }

  btn.appendChild(strong);
  btn.appendChild(br);
  btn.appendChild(img);
  return btn;
};
export const creatediv = (name: string) => {
  const div = document.createElement("div");
  if (name == "znam") {
    div.appendChild(creat_button(name));
  } else if (name == "nie znam") {
    div.appendChild(creat_button(name));
  }
  div.className = "div_btn";
  return div;
};
