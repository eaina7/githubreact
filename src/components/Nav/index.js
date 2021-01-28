// Template for React-ComponentName.js   
import { NavLink } from "react-router-dom"; 
import './style.css'

const NavBar = ( {toggle}) => {  
    return (   
	  <>
	  <div>
		    <nav> 
			    <div id="logo">   
	                <NavLink to="/" > <h1> GitHub Profiles </h1> </NavLink> 
		      	</div>
				<div id="nav"> 				
	                <NavLink to="/" >Search</NavLink> 
	                <NavLink to="/details/eric">Eric</NavLink>
	                <NavLink to="/details/stefan">Stefan</NavLink>
	                <NavLink to="/details/waldemar">Waldemar</NavLink>  
	        	</div> 

	        	<div>
	        		<span onClick={toggle}>Toggle Theme</span>
	        	</div>
        	</nav>
      </div>
     </>  
	);
} 
export default NavBar