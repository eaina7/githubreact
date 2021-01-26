import { Switch, Route , useHistory } from "react-router-dom";
import NavBar from './components/Nav/';
import DetailedProfile from './components/view/detailedProfile';
import rootPage from './components/view/rootPage';
import './App.css'

 
function App() {
  return (
    <>
    <div className="App">

      <NavBar />        
    </div>
 
    <Switch>
      <Route path="/details/:detailedProfileName" component={DetailedProfile} /> 
      <Route path="/" component={rootPage} />  
    </Switch> 

    </>
  );
} 
export default App; 