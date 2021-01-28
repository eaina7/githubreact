import React from 'react';
import axios from 'axios';

function Form({SetInputValue,inputValue}) {

  let inputHandler = (e) => {
    SetInputValue(e.target.value);
    

};
let submitHandler = (e) => {
    e.preventDefault();
    if(!inputValue) return alert("Please type something");
    axios
      .get(`https://api.github.com/users/${inputValue}`)
      .then((result) => { 
        console.log('data',result.data)

        //setUsers(result.data)
      }
        )

      .catch((error) => console.log(error));
    SetInputValue("");
};
    return (
              
        <form action="">
          <div className="inputArea">
          <input value = {inputValue} onChange = {inputHandler}
            type="text"
            name="task"
            id="task"
            placeholder="GitHub Username"
          />
          <button onClick = {submitHandler}type = "submit" id="add">Submit</button>
        </div>
        </form>
    )
}

export default Form
