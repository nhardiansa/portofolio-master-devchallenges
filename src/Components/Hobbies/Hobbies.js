import React, { Component } from 'react'
import gambar1 from './assets/1.jpg'
import gambar2 from './assets/2.jpg'
import gambar3 from './assets/3.jpg'

class Hobbies extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className={this.props.className} >
                <h2>Hobbies</h2>

                <div className="hobbie">
                    <img src={gambar1} alt="" srcset=""/>
                    <h3>Photography</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                </div>
                <div className="hobbie">
                    <img src={gambar2} alt="" srcset=""/>
                    <h3>Technology</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                </div>
            </div>
        )
    }
}

export default Hobbies