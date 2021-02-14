import axios from 'axios'
import React, { Component } from 'react'
export class PostData extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             title:'',
             body:''
        }
    };
    handlebody= event => {
        this.setState({body: event.target.value});
      }
      
 handletitle = event => {
        this.setState({ title: event.target.value});
      }
      
      submitHandler = e =>{
          e.preventDefault()
          console.log(this.state)
           axios.post('https://jsonplaceholder.typicode.com/posts',this.state)
           .then(response =>{
            console.log(response)
        })
        .catch(error =>{
            console.log(error)
        })
    }
    render() {
        const {title,body}=this.state
        
        return (
            <form onSubmit={this.submitHandler}>

                <label>body</label>
                <input type="text" placeholder="enter the data" value={body} onChange={this.handlebody} />
                <label>title</label>
                <input type="text"placeholder="enter the data" value={title} onChange={this.handletitle} />
                <button type="submit">submit</button>
            </form>
             )
    }
}

export default PostData
