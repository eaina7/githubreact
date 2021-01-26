import { Switch, Route } from "react-router-dom";
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
      <Route path="/details" component={DetailedProfile} /> 
      <Route path="/" component={rootPage} />  
    </Switch> 

    </>
  );
} 
export default App; 