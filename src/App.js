import { useState, useEffect } from "react"; 
import { Switch, Route, useHistory } from "react-router-dom";
import NavBar from './components/Nav/';
import DetailedProfile from './components/view/detailedProfile';
import rootPage from './components/view/rootPage';
import './App.css'; 
import axios from 'axios';
import Form from './components/Form';


 
function App() { 

 
     let history = useHistory(); 
     const [theme, setTheme] = useState(true); 
     const [display, SetDispaly] = useState();
     const [inputValue, SetInputValue] = useState(); 
	   const toggleTheme = () => {  setTheme(!theme); }


      

  
   
  return (
    <>  
	    <div  className={`${theme ? "grey" : "white"} App theme`}> 
		    <NavBar toggle={toggleTheme} />
        <Form inputValue = {inputValue} SetInputValue = {SetInputValue}/> 
		    <Switch>    

          {/*<Route path="/usersWhatsoever" component={Users} /> */}  
		      <Route path="/details/:detailedProfileName" component={DetailedProfile} /> 
		      <Route path="/" component={rootPage} />  
		    </Switch>  
	    </div>
    </>
  );
  
}  
export default App