import React, { Component } from 'react'
import pict1 from './assets/1.svg'
import pict2 from './assets/2.svg'

class Experiences extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className={this.props.className} >
                <h2>Experiences</h2>
                <div className="experience">
                    <img src={pict1} alt=""/>
                    <div className="desc">
                        <p>Jan 2021 - Current</p>
                        <h3>Front-End developer</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, adipisci.</p>
                    </div>
                </div>
                <div className="experience">
                    <img src={pict2} alt=""/>
                    <div className="desc">
                        <p>Sep 2020 - Des 2020</p>
                        <h3>Back-End developer</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, adipisci.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Experiences