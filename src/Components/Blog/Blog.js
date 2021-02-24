import React, { Component } from 'react'
import gambar from "./assets/pict-2.jpg"

class Blog extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className={this.props.className}>
                <h2>Blog</h2>
                <h3>How to organize your CSS</h3>
                <img src={gambar} alt="thumbnail post" srcset=""/>
                <p>In this article I tell the story about Proin eu justo sit amet lacus bibendum tincidunt. Vivamus non volutpat nisl, a luctus mi.</p>
                <p>Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.</p>
                <a href="#">dev.to</a>
            </div>
        )
    }
}

export default Blog