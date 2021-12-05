import React from "react";
import Intro from "./pages/Intro";
import {
  Switch,
  Route,
  Link,BrowserRouter as Router
} from "react-router-dom";
function App() {
  return (
    
   <Router>
  <nav>
    <ul class="nav">
      
      <li class="nav-item">
        <Link to="/putito" class="nav-link active" aria-current="page">About</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      <li>
        <Link to="/">Home</Link>
      </li>
    </ul>
  </nav>
 
 <Switch>
          <Route exact path="/">
            <Intro />
          </Route>
          <Route exact path="/putito">
            <div>gasd</div>
          </Route>
          <Route exact path="/hola">
            <div>hola</div>
          </Route>
        </Switch>
         </Router>
    
  );
}

export default App;
