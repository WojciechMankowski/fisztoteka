import React from "react";
import ReactDOM from "react-dom/client";

export const AddNewCard = () => {
  return (
    <div className="addnewcart">
      <form action="">
        <label htmlFor="select_add">Wybiecz nazwę zestawu</label>
        <select name="" id="select_add" className="select_add">
          <option value="0">Wybierz nazwę zestawu</option>
        </select>
        <label htmlFor="notion">Pojęcie</label>
        <input type="text" id="notion" />
        <label htmlFor="defin">Definicja</label>
        <input type="text" id="defin" />
        <input type="submit" value="Dodaj fiszkę" />
      </form>
    </div>
  );
};
