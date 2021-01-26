// Template for React-ComponentName.js   
import { NavLink } from "react-router-dom"; 


const NavBar = () => {  
    return (   
		<div>
            <nav> 
                <NavLink to="/" >rootPage (Search/Home)</NavLink> 
                <NavLink to="/details/eric">Eric</NavLink>
                <NavLink to="/details/stefan">Stefan</NavLink>
                <NavLink to="/details/waldemar">Waldemar</NavLink>  
            </nav>
        </div> 
	);
} 
export default NavBar