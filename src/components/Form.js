import React from 'react'
import axios from 'axios'
import { NavLink, useRouteMatch } from 'react-router-dom'
import { useState } from 'react'
import './form.css'

function Form({ user, setUser, displayUsername }) {
    const match = useRouteMatch('/search')
    //const { detailedProfileName } = useParams()

    let inputHandler = (e) => {
        setUser(e.target.value)
    }
    let submitHandler = (e) => {
        e.preventDefault()
        if (!user) return alert('Please type something')
        setUser('')
    }

    // console.log(
    //     'First Question: why can I not print detailedProfileName to the console? It does work in view/detailedProfile/index.js, but not  in my FORMS Component. Why?  ',
    //     detailedProfileName
    // )

    // console.log(
    //     'Second Question: on line 45  a NAVLink is placed inside of a button-Element. This structure works well. But what If the user hits return in the inputfield? That would neither trigger onsubmit nor the NavLink.  What is best practice here to trigger both  eventhandlers  in  the inputfield ?  ',
    // )

    return (
        <div>
            <form action="">
                <div className={`inputArea   ${match ? 'on' : 'off'}`}>
                    <input
                        className="input"
                        value={user}
                        onChange={inputHandler}
                        type="text"
                        name="task"
                        id="task"
                        placeholder="type another GitHub-Username"
                    />
                    <button onClick={submitHandler} type="submit" id="add">
                        <NavLink to={`/details/${user}`}>
                            search Github-user
                        </NavLink>
                    </button>{' '}
                    {match ? (
                        <p>
                            <span>Search for another GitHub-User now.</span>
                        </p>
                    ) : (
                        <p>Look at this Profile {user}</p>
                    )}
                </div>
            </form>
            <div className="display"></div>
        </div>
    )
}

export default Form
