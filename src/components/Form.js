import React, { useState } from "react";

function Form() {
  const [inputValue, setInputValue] = useState("");

  const handleInputValue = (ev) => {
    setInputValue(ev.target.value);
  };

  return (
    <form action="">
      <div className="inputArea shadow">
        <input
          value={inputValue}
          onChange={handleInputValue}
          type="text"
          name="task"
          id="task"
          placeholder="GitHub Username"
        />
        <button type="submit" id="add">
          Submit
        </button>
      </div>
    </form>
  );
}

export default Form;
