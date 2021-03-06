// Template for React-ComponentName.js
import { NavLink } from 'react-router-dom'
import './style.css'
import ToggleTheme from './toggleTheme'

const NavBar = ({ toggle }) => { 
	return (
		<>
			<div>
				<nav>
					<div id="logo">
						<NavLink to="/search">
							<h1> GitHub Profiles </h1>
						</NavLink>
					</div>
					<div id="nav">
						<NavLink to="/details/eaina7">Eric</NavLink>
						<NavLink to="/details/stefanibus">Stefan</NavLink>
						<NavLink to="/details/waldemar-bl">Waldemar</NavLink>
						<NavLink to="/search">search</NavLink>
					</div> 
                    <div onClick={toggle}>
                        <ToggleTheme handler={toggle} />
                    </div>
                </nav>
            </div>
        </>
    )
}
export default NavBar
