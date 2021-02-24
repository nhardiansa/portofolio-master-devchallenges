import React, { Component } from 'react'

class Projects extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className={this.props.className} >
                Projects
            </div>
        )
    }
}

export default Projects