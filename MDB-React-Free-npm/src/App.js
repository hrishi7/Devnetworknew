import React, { Component } from "react";
import "./index.css";
import Appbar from "./components/Appbar";
import MainRoutes from "./components/MainRoutes";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div>
        <Appbar />
        <MainRoutes />
        <Footer />
      </div>
    );
  }
}

export default App;
