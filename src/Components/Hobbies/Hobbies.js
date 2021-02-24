import React, { Component } from 'react'

class Hobbies extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className={this.props.className} >
                Hobbies
            </div>
        )
    }
}

export default Hobbies