import React from "react";
import Select_and_options from "./Form/Selecet";
import { Card } from "./Card";
import axios from "axios";
import { creatElement, removeElement } from "../Helpers/CreatElement";
// w pamięci jest lista obiektów z bazy danych
// funkcja do zmianny obiektu
// funckja odpowiedzialna za wyświetlanie odpowiedniego kodu
interface Card {
  id: number;
  notion: string;
  definition: string;
  name_image: string | null;
  categories: string;
}
type LearnProps = { values: string[] };
type LearnState = {
  next_card: number;
  cards: Card[];
};
const URL = "http://127.0.0.1:8000";
let text;
export class Learn extends React.Component<LearnProps, LearnState> {
  constructor(props: LearnProps) {
    super(props);
    this.state = {
      next_card: -1,
      cards: [],
    };
  }

  getCards = () => {
    const user_name = "wojtek";
    const select: HTMLSelectElement = document.querySelector(".select_name")!;
    const select_value = select.value;
    text = `get_flashcard/${user_name}/${select_value}`;
    const url = `${URL}/${text}`;
    let cards_temperry: Card[] = [];
    this.setState({ next_card: 0 });
    axios.get(url).then((result) => {
      cards_temperry.push(...result.data);
      cards_temperry.forEach((Element) => this.state.cards.push(Element));
    });
  };

  onfous = () => {
    console.log("focus");
    this.getCards();
    // creatElement(this.state.cards[0])
    const card = document.querySelector('.card')
    const one_card = this.state.cards[0]
    console.log( one_card);
    console.log(card)

  };
  compomentDidUpdate = () => {}
  render() {
    if (this.state.next_card == -1) {
      return (
        <div className="learn">
          <Select_and_options
            values={this.props.values}
            class_name={"select_name"}
          />
          <button 
          onClick={this.onfous} 
          className="learn" id="btn">
            Uczę się
          </button>
          <div className="card">

          </div>
        </div>
      );
    } else {
      return (
        <div className="learn">
          <Select_and_options
            values={this.props.values}
            class_name={"select_name"}
          />
          <button onClick={this.onfous} id="btn" className="learn">
            Uczę się
          </button>
          <div className="card">
            <Card cards={this.state.cards} />
          </div>
        </div>
      );
    }
  }
}
