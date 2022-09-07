import {CardState} from "./type";
export type select_props = { values: string[], class_name: string };
export type props_add_new_cart = {
    nameset: string[]
  }

export type TypProps = {};
export type TypeState = {
	NameSet: string[];
	len: number;
    SelectedCategory: string
};
export type InputProps = {
  type: string; class: string
}
export type LabelProps = {
  text: string, type: string; class: string
}

export type Props = {}
export type State = {
  cards: CardState[];
}
