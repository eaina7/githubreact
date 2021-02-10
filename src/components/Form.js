import React from 'react'
import { NavLink, useRouteMatch } from 'react-router-dom'
import './form.css'

function Form({ user, setUser, displayUsername }) {
    // boolean: we use useRouteMatch to check if the pathname contains "/search".
    const match = useRouteMatch('/search')
    // for the Form-Component to showName below the Inputfield,
    // we need to retrieve the Username separately again
    const showName = window.location.pathname.split('/')[2]

    let inputHandler = (e) => {
        setUser(e.target.value)
    }
    let submitHandler = (e) => {
        e.preventDefault()
        if (!user) return alert('Please type something')
        setUser('')
    }

    const triggerNavLink = (event) => {
        if(event.code === 'Enter') {
            console.log('event: ', event);
        }
    }

    return (
        <div>
            <form action="">
                <div className={`inputArea   ${match ? 'on' : 'off'}`}>
                    <input
                        className="input"
                        value={user}
                        onChange={inputHandler}
                        // onKeyPress={triggerNavLink}
                        type="text"
                        name="task"
                        id="task"
                        placeholder="type another GitHub-Username"
                    />
                    <button onClick={submitHandler} type="submit" id="add">
                        <NavLink to={`/details/${user}`}>
                            search Github-user
                        </NavLink>
                    </button>
                    {match ? (
                        <p>
                            <span>Search for another GitHub-User now.</span>
                        </p>
                    ) : (
                        <p>Look at {showName ? showName : ' '} 's Profile</p>
                    )}
                </div>
            </form>
            <div className="display"></div>
        </div>
    )
}

export default Form
