import React, { useState } from "react";
import NavBar from "./Components/header/NavBar";
import Main from "./Components/header/Main";
import Menu from "./Components/Menu/Menu";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Main />
      <Menu />
    </React.Fragment>
  );
}

export default App;
