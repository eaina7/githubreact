import { useState, useEffect } from "react"; 
import { Switch, Route, useHistory } from "react-router-dom";
import NavBar from './components/Nav/';
import DetailedProfile from './components/view/detailedProfile';
import rootPage from './components/view/rootPage';
import './App.css'; 
import axios from 'axios';
import Form from './components/Form';
import Users from './components/view/Users'

 
function App() { 
 
     let history = useHistory(); 
     const [theme, setTheme] = useState(true); 
     const [users, setUsers] = useState([]);
     const [inputValue, SetInputValue] = useState(); 
	   const toggleTheme = () => {  setTheme(!theme); }

      

      /*useEffect(() => {
        const fetchUsers = async () => {
          const users = await axios
            .get ("https://api.github.com/users/eaina7")
            .then(result => result.data);
            //.catch(error => {console.error('Error:', error)
          return users;
          console.log(users)
        };
        
        fetchUsers().then(res => setUsers(res));
      }, []);
     */

   useEffect(() => {
    axios
      .get("https://api.github.com/users/eaina7")
      .then((result) => { 
        console.log('data',result.data)
        setUsers(result.data)
      }
        )

      .catch((error) => console.log(error));
  }, []); 

   
  return (
    <>  
	    <div  className={`${theme ? "grey" : "white"} App theme`}> 
		    <NavBar toggle={toggleTheme} />
        <Form inputValue = {inputValue} SetInputValue = {SetInputValue}/> 
		    <Switch>
          <Route path="/usersWhatsoever" component={Users} />   
		      <Route path="/details/:detailedProfileName" component={DetailedProfile} /> 
		      <Route path="/" component={rootPage} />  
		    </Switch>  
	    </div>
    </>
  );
  
}  
export default App