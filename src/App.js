import React, { Component } from 'react';
// import Result from './Result.js'
import ButtonNumberContainer from './ButtonNumberContainer.js'
import ButtonEquationContainer from './ButtonEquationContainer.js'
import Result from './Result'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      equation: "",
    }

    this.addLogicToEquation = this.addLogicToEquation.bind(this)
    this.evalEquation = this.evalEquation.bind(this)
  }

  addLogicToEquation(newLogic) {
    let equation = this.state.equation
    const newEquation = equation + newLogic
    this.setState({equation: newEquation})
  }

  evalEquation() {
    let str = this.state.equation
    console.log('str: ', str)

    palindrome(str)

    function palindrome(str) {
      let re = /[\W_]/g;
      let lowRegStr = str.toLowerCase().replace(re, '')
      let reverseStr = lowRegStr.split('').reverse().join('') 
      if(reverseStr === lowRegStr) {
        console.log("YES")
        console.log("str: ", str)
      } else {
        console.log("NOT")
        console.log("str: ", str)
      }
    }
  }
  // evalEquation() {
  //   let result = eval(this.state.equation)
  //   this.setState({equation: result.toString()})
  // }

  render() {
    return (
      <div className="App">
        <Result text={this.state.equation}/>
        <ButtonNumberContainer addLogicToEquation={this.addLogicToEquation}/>
        <ButtonEquationContainer addLogicToEquation={this.addLogicToEquation}
                                 evalEquation={this.evalEquation}/>
      </div>
    );
  }
}

export default App;
