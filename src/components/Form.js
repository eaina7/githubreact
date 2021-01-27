import React from 'react'

function Form() {
    return (
              
        <form action="">
          <div className="inputArea shadow">
          <input 
            type="text"
            name="task"
            id="task"
            placeholder="GitHub Username"
          />
          <button type = "submit" id="add">Submit</button>
        </div>
        </form>
    )
}

export default Form
