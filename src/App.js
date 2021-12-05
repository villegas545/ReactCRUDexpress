import {
  Switch,
  Route,
  Link,BrowserRouter as Router
} from "react-router-dom";

import React from "react";
import Menu from "./components/Menu";
import Rutas from "./components/Rutas";

function App() {
  return (
    <Router>
      <div className="container">
       <Menu />
       <Rutas />
       </div>
    </Router>
  );
}

export default App;
