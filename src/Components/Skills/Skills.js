import React, { Component } from 'react'

class Skills extends Component{
    
    constructor(props){
        super(props)
    }
    
    render(){
        return(
            <div className={this.props.className}>
                <h2>Front End</h2>
                <ul className="title">
                    <li>
                        <p>React</p>
                        <div className="border">
                            <div className="fill newbie"></div>
                        </div>
                    </li>
                    <li>
                        <p>Javascript</p>
                        <div className="border">
                            <div className="fill medium"></div>
                        </div>
                    </li>
                    <li>
                        <p>CSS</p>
                        <div className="border">
                            <div className="fill high"></div>
                        </div>
                    </li>
                    <li>
                        <p>Vue</p>
                        <div className="border">
                            <div className="fill newbie"></div>
                        </div>
                    </li>
                    <li>
                        <p>Redux</p>
                        <div className="border">
                            <div className="fill medium"></div>
                        </div>
                    </li>
                    <li>
                        <p>React Native</p>
                        <div className="border">
                            <div className="fill high"></div>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Skills