import  Selecet  from "./Form/Selecet";
import { props_add_new_cart } from "../Types/props";
import { Label } from "./Form/Label";
import { InputSubmit } from "./Form/InputSubmit";
import { add_new_card } from "../Helpers/connectAPI";

export const AddNewCard = ({nameset}: props_add_new_cart) => {
  const onsubmit = (event: any) => {
    event.preventDefault();
    // nazwa kategorii
    const select: HTMLSelectElement = document.querySelector('.select_props')!
    const nameset = select.value
    // pojęcie i definicja
    const notion_input: HTMLInputElement = document.querySelector('.notion')!
    const value_notion = notion_input.value
    const definition_input: HTMLInputElement = document.querySelector('.definition')!
    const value_definition = definition_input.value
    
    // za chwilę potrzebna nazwa pliku-> zdjęcia

    // wywłoanie funkcji
    const status = add_new_card(nameset, value_notion, value_definition, "", "wojtek")
    const div = document.querySelector('.addnewcart')
    if (status === 200 || status === 0){
      const info = document.createElement('p')
      info.innerText = 'Twoja fiszka została dodoana'
      info.className = "info"
      div?.appendChild(info)
    }else{
      const info = document.createElement('p')
      info.className = "info"
      info.innerText = "Natpokalićmy na błąd. Sprobuj poźniej"
    }
  }
  return (
    <div className="addnewcart">
      <form method="POST" onSubmit={onsubmit}>
        <Selecet values={nameset} class_name={"select_add_cart"}/>
        <Label text="Pojęcie" class="notion" type="text"/>
        <Label  text="Definicja" class="definition" type="text"/>
        <InputSubmit value="Dodaj nową kartę"/>
      </form>
    </div>
  );
};
