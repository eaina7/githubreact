// Template for React-ComponentName.js   
import { NavLink } from "react-router-dom"; 
import './style.css'
import ToggleTheme from './toggleTheme'

const NavBar = ( {toggle}) => {  
    return (   
	  <>
	  <div>
		    <nav> 
			    <div id="logo">   
	                <NavLink to="/" >
	                	<h1> GitHub Profiles </h1>
	                </NavLink> 
		      	</div>
				<div id="nav"> 				
	                <NavLink to="/" >Search</NavLink> 
	                <NavLink to="/details/eaina7">Eric</NavLink>
	                <NavLink to="/details/stefanibus">Stefan</NavLink>
	                <NavLink to="/details/waldemar">Waldemar</NavLink> 
	                <NavLink to="/usersWhatsoever">usersWhatsoever</NavLink>  
	        	</div> 

	        	<div  onClick={toggle}> 
	        		<ToggleTheme handler={toggle}/>
	        	</div>
        	</nav>
      </div>
     </>  
	);
} 
export default NavBar