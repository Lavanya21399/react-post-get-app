import React, { Component } from 'react'
//import Button from '../components/Button';

export class Home extends Component {
    fetch =() =>{
        this.props.history.push("/fetchdata")
    }
    Post =() =>{
        this.props.history.push("/postdata")
    }

    render() {
        return (
            <div>
                <button onClick={this.fetch}>Fetchdata</button>
                <button onClick={this.Post}>Postdata</button>
                
            </div>
        )
    }
}

export default Home
