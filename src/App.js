import React, { Component } from 'react'
import Header from "./Components/Header/Header"
import Skills from "./Components/Skills/Skills"
import Blog from "./Components/Blog/Blog"
import Experiences from "./Components/Experiences/Experiences"
import Hobbies from "./Components/Hobbies/Hobbies"
import Projects from "./Components/Projects/Projects"


class App extends Component{
  render(){
    return (
      <div className="container">
        <Header className="Header" />
        <Skills className="Skills" />
        <Blog className="Blog" />
        <Experiences className="Experiences" />
        <Hobbies className="Hobbies" />
        <Projects className="Projects" />
        <div className="footer">
          <p>created by <b>Nabil Hardiansa</b> - devChallenges.io</p>
        </div>
      </div>
    )
  }
}

export default App;
