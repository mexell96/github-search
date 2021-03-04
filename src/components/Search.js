import React, { useContext, useState } from "react";
import { alertContext } from "../context/alert/alertContext";

export const Search = () => {
  const [value, setValue] = useState("");
  const { show } = useContext(alertContext);

  const onSubmit = (event) => {
    if (event.key !== "Enter") {
      return;
    }
    if (value.trim()) {
      console.log(value);
    } else {
      show("Введите данные пользователя");
    }
  };

  return (
    <div className="form-group">
      <input
        type="text"
        className="form-control"
        placeholder="Введите ник пользователя..."
        value={value}
        onChange={(event) => setValue(event.target.value)}
        onKeyPress={onSubmit}
      />
    </div>
  );
};
