import { useState } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import NavBar from './components/Nav/'
import DetailedProfile from './components/view/detailedProfile'
import rootPage from './components/view/rootPage'
import './App.css'
import Form from './components/Form'

function App() {
    const [theme, setTheme] = useState(true)
    const [user, setUser] = useState('')
    const toggleTheme = () => {
        setTheme(!theme)
    }

    return (
        <>
            <div className={`${theme ? 'grey' : 'white'} App theme`}>
                <NavBar toggle={toggleTheme} />
                <Form setUser={setUser} user={user} />
                <Switch>
                    <Route
                        path="/details/:detailedProfileName"
                        component={DetailedProfile}
                    />
                    <Route path="/search" component={rootPage} />
                    <Route exact path="/">
                        <Redirect to="/search" />
                    </Route>
                </Switch>
            </div>
        </>
    )
}
export default App
