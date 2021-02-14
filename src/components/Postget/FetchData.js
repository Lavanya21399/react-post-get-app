import React, { Component } from 'react'
import ApiFetch from '../ulities/ApiFetch'

export class FetchData extends Component {
     constructor(props) {
        super(props)
     this.state = {
             data:[]
        }
    }
    componentDidMount = async () => {
        let apivalue = await ApiFetch();
        this.setState({ loading: false, data: apivalue.data })     
    };
    render() {
        console.log(this.state.data)
        return (
            <div>   
              <ul>{
            this.state.data.map(datas=>(
            <li key={datas.id}>{datas.title}------{datas.body}</li> 
             )) }
                  </ul>  

            </div>
        )
    }
}
export default FetchData
