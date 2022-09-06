import  Selecet  from "./Form/Selecet";

type Props = {
  nameset: string[]
  SelectCategories: Function
}

export const AddNewCard = ({nameset, SelectCategories}: Props) => {
  return (
    <div className="addnewcart">
      <form action="">
        <Selecet values={nameset} />
      </form>
    </div>
  );
};
