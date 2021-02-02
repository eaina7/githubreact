import React from 'react';
import axios from 'axios';
import { useState} from "react"; 

function Form({SetInputValue,inputValue}) {
  const [user, setUser] = useState();

  let inputHandler = (e) => {
    SetInputValue(e.target.value);
    

};
let submitHandler = (e) => {
    e.preventDefault();
    if(!inputValue) return alert("Please type something");
    axios
      .get(`https://api.github.com/users/${inputValue}`)
      .then((result) => { 

        console.log(result)
        setUser(result.data)

        //setUsers(result.data)
      }
        )

      .catch((error) => console.log(error));
    SetInputValue("");
};
    return (
         <div>     
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
        <div>{user ? <div>{user.login} <img src={user.avatar_url}/></div>: null}</div>
        </div>
    )
}

export default Form
