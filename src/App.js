  // import Result from './Result.js'
    import React, { Component } from 'react';
    import ButtonNumberContainer from './ButtonNumberContainer.js'
    import ButtonEquationContainer from './ButtonEquationContainer.js'
    import Result from './Result'
    import './App.css';

    class App extends Component {
      constructor() {
        super()
        this.state = {
          equation: 0,
        }

        this.addLogicToEquation = this.addLogicToEquation.bind(this)
        this.evalEquation = this.evalEquation.bind(this)
      }

addLogicToEquation(newLogic) {
  let newValue, multiplier
  let equation = this.state.equation
  if (newLogic.includes("%")) {
    multiplier = parseFloat(newLogic.replace("%","")) / 100.0
    newValue = parseFloat(equation) + parseFloat(equation) * multiplier 
  } else {
    newValue = parseFloat('' + parseFloat(equation) + newLogic)
  }

console.log("newLogic", newLogic)
console.log("this.state.equation", this.state.equation)

  this.setState({equation: newValue.toFixed(2)})
}

      evalEquation() {
        let str = this.state.equation.toString()
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

  // evalEquation() {
  //   let result = eval(this.state.equation)
  //   this.setState({equation: result.toString()})
  // }
