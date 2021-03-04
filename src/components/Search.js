import React, { useContext } from "react";
import { alertContext } from "../context/alert/alertContext";

export const Search = () => {
  const { show } = useContext(alertContext);

  const onSubmit = (event) => {
    if (event.key === "Enter") {
      show("This is alert!");
    }
  };

  return (
    <div className="form-group">
      <input
        type="text"
        className="form-control"
        placeholder="Введите ник пользователя..."
        onKeyPress={onSubmit}
      />
    </div>
  );
};
