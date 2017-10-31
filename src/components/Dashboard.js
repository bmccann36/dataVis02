
import React, {Component} from 'react'



export default class Dashboard extends Component {
  constructor(props){
    super(props)
  }
  render(){
    console.log(this.props)
    return(
    <div className= "dashboard" >
    <h1> hello world </h1>
    <p> {this.props.coor.lng} longitude </p>
    <p> {this.props.coor.lat} latitude </p>




    </div>
    )
  }

}
