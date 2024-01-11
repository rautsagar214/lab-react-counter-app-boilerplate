import React, { Component } from 'react'

export default class Counter extends Component {
    constructor( ){
        super() 
        {
            this.state={count:0}
        }
    }
    //js code below 
    handleClick = (number)=>{
        if (number==0){
            this.setState({count:0})
        }else{this.setState({count:this.state.count+number})}
    }
  render() {
    return (
      <div>
        <h1>Counter App</h1>
        <p>{this.state.count}</p>
        <button  onClick={()=>{this.handleClick(+1)}} >+</button>
        <button onClick={()=>{this.handleClick(-1)}}>-</button>
        <button onClick={()=>{this.handleClick(-this.state.count)}} >reset</button>


      </div>
    )
  }
}
