// Template for React-ComponentName.js   
import { NavLink } from "react-router-dom";

const NavBar = () => {  
    return (   
		<div>
            <nav> 
                <NavLink to="/" >rootPage (Search/Home)</NavLink> 
                <NavLink to="/details">Eric</NavLink>
                <NavLink to="/details">Stefan</NavLink>
                <NavLink to="/details">Waldemar</NavLink>  
            </nav>
        </div> 
	);
} 
export default NavBar