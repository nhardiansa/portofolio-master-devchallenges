import React, { Component } from 'react'
import foto from "./assets/foto.jpg"

class Header extends Component{
    render(){
        return (
            <div className="Header">
                <img src={foto} alt=""/>

                <div className="about">
                    <div className="tag-name">
                        <h1>Nabil Hardiansa</h1>
                        <p>Website Developer</p>
                    </div>
                    <div className="contact">
                        <ul>
                            <li>
                            <span className="material-icons">email</span> nhardiansa@gmail.com
                            </li>
                            <li>
                            <span className="material-icons">call</span>
                            +62 8129 0945 780
                            </li>
                        </ul>
                    </div>
                </div>

                <p>Tech enthusiast, who willing to learn and create outstanding web applications.</p>

                <p>I'm ELectrical student but coding is my hobby</p>
                
            </div>
        )
    }
}

export default Header