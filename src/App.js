import { useState } from "react"; 
import { Switch, Route, useHistory } from "react-router-dom";
import NavBar from './components/Nav/';
import DetailedProfile from './components/view/detailedProfile';
import rootPage from './components/view/rootPage';
import './App.css';
import './theme.css';
 
function App() { 
	 const [theme, setTheme] = useState(true); 
	 const toggleTheme = () => { 
	 	 setTheme(!theme)
	 }  
  return (
    <>  
	    <div  className={`${theme ? "grey" : "white"} App theme`}> 
		    <NavBar toggle={toggleTheme} />
		    <Switch>
		      <Route path="/details/:detailedProfileName" component={DetailedProfile} /> 
		      <Route path="/" component={rootPage} />  
		    </Switch>  
	    </div>
    </>
  );
} 
export default App;   