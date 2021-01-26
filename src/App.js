import { Switch, Route } from "react-router-dom";
import NavBar from './components/Nav/';
 
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
      <Route path="/lookup" component={Lookup} />
      <Route path="/list" component={ListWeather} />
      <Route exact path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>


    </>
  );
} 
export default App;