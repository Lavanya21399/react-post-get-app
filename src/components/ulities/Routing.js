import React, { Component } from 'react'
//import Home from './components/Home'

import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Home from '../Pages/Home'
import FetchData from '../Postget/FetchData'
import PostData from '../Postget/PostData'
import Error from '../Pages/Error'
export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route path = "/" component ={Home}exact/>
            <Route path= "/fetchdata"component={FetchData}exact/>
             <Route path ="/postdata"component ={PostData}exact/>
             <Route path = "*" exact  component={Error}/>
     
          
          

          </Switch>
        </Router>
      </div>
    )
  }
}