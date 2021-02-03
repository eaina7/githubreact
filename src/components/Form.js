import React from 'react';
import axios from 'axios';
import { useState} from "react"; 
import "./form.css"


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

      .catch((error) => {
        const newUser = {login:'no user', avatar_url:'https://www.flaticon.com/svg/vstatic/svg/42/42901.svg?token=exp=1612360475~hmac=28a7f58bed2d144ca854c95eab4d889d',public_repos:'' }
      setUser(newUser)}  );
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
        <div className ="display">{user ? <div>{user.login} <img src={user.avatar_url}/> {user.public_repos}</div>: null}</div>
        </div>
    )
}

export default Form
