import { Selecet } from "./Form/Selecet";
type Props = {
  readonly values: string[] 
}
export const AddNewCard = () => {

  return (
    <div className="addnewcart">
      <form action="">
        <Selecet />
      </form>
    </div>
  );
};
