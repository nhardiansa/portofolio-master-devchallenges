import React, { Component } from 'react'
import Header from "./Components/Header/Header"
import Skills from "./Components/Skills/Skills"

class App extends Component{
  render(){
    return (
      <div className="container">
        <Header />
        <br/>
        <Skills />
      </div>
    )
  }
}

export default App;
