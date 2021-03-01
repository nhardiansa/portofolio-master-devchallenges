import React, { Component } from 'react'
import gambar1 from "./assets/1.jpg"
import gambar2 from "./assets/2.jpg"
import gambar3 from "./assets/3.jpg"

class Projects extends Component{
    constructor(props){
        super(props);
        this.state = { class : '' }
    }

    // ketikaKlik(){
    //     console.log();
        
    // }

    render(){
        return(
            <div className={this.props.className} >
                <div className="navigation">
                    <h2>Projects (3)</h2>
                    <button>React</button>
                    <button >Vue</button>
                    <button >Responsive</button>
                </div>
                <div className="cards">
                    <div className="card">
                        <img src={gambar1} alt=""/>
                        <ul>
                            <li>#HTML</li>
                            <li>#CSS</li>
                            <li>#responsive</li>
                        </ul>
                        <h3>Recipe Blog</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit, qui deleniti? Mollitia, repudiandae. Ut, soluta.</p>
                        <button>Demo</button>
                        <button>Code</button>
                    </div>
                    <div className="card">
                        <img src={gambar2} alt=""/>
                        <ul>
                            <li>#HTML</li>
                            <li>#CSS</li>
                            <li>#responsive</li>
                        </ul>
                        <h3>Recipe Blog</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit, qui deleniti? Mollitia, repudiandae. Ut, soluta.</p>
                        <button>Demo</button>
                        <button>Code</button>
                    </div>
                    <div className="card">
                        <img src={gambar3} alt=""/>
                        <ul>
                            <li>#HTML</li>
                            <li>#CSS</li>
                            <li>#responsive</li>
                        </ul>
                        <h3>Recipe Blog</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit, qui deleniti? Mollitia, repudiandae. Ut, soluta.</p>
                        <button>Demo</button>
                        <button>Code</button>
                    </div>
                </div>
                <ul className="pages" >
                    <li>&#5176;</li>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>...</li>
                    <li>10</li>
                    <li>&#5171;</li>
                </ul>
            </div>
        )
    }
}

export default Projects