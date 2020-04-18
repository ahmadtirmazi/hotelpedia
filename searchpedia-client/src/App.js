import React from "react";
import "./App.css";
import "typeface-roboto";

import Container from "@material-ui/core/Container";
import Home from "./home/index";

function App() {
  return (
    <div className="App">
      <Container>
        <Home />
      </Container>
    </div>
  );
}

export default App;
