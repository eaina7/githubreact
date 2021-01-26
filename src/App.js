import { Switch, Route , useHistory } from "react-router-dom";
import NavBar from './components/Nav/';
import DetailedProfile from './components/view/detailedProfile';
import rootPage from './components/view/rootPage';

 
function App() {
  return (
    <>
    <div className="App">
      <h1>
        GitHub Profiles
      </h1>
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