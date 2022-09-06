import  Selecet  from "./Form/Selecet";
import { props_add_new_cart } from "../Types/props";
import { Label } from "./Form/Label";
export const AddNewCard = ({nameset}: props_add_new_cart) => {
  return (
    <div className="addnewcart">
      <form action="">
        <Selecet values={nameset} />
        <Label text="Pojęcie" class="notion" type="text"/>
        <Label  text="Definicja" class="definition" type="text"/>
      </form>
    </div>
  );
};
