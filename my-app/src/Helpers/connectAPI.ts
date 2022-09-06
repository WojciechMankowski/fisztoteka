import axios from "axios";

const URL = "http://127.0.0.1:8000";
let text: string;
let status: number = 0;
export const add_new_card = (
  nameset: string,
  notion: string,
  definition: string,
  nameImg: string,
  user: string
) => {
  let img;
  if (nameImg === "") {
    img = "None";
  } else {
    img = nameImg;
  }
  text = `flashcards/?notion=${notion}&definition=${definition}&name_set=${nameset}&nameuser=${user}&name_image=${img}`;
  const url = `${URL}/${text}`;
  axios
    .post(url)
    .then((result) => (status = result.status))
    .catch((error) => console.log(error));
  return status;
};
