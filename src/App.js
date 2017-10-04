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
          equation: "",
        }

        this.addLogicToEquation = this.addLogicToEquation.bind(this)
        this.evalEquation = this.evalEquation.bind(this)
      }

  addLogicToEquation(newLogic) {
    let equation = this.state.equation
    console.log(parseFloat(equation))

    if(newLogic==="10%"){
      let newEquation = Number(equation) + (Number(equation) * 0.10)
      console.log(newEquation)
      this.setState({equation: Number(newEquation).toFixed(2)})
    }else if (newLogic==="15%"){
      let newEquation = Number(equation) + (Number(equation) * 0.15)
      console.log(newEquation)
      this.setState({equation: Number(newEquation).toFixed(2)})
    }else if (newLogic==="20%"){
      let newEquation = Number(equation) + (Number(equation) * 0.20)
      console.log(newEquation)
      this.setState({equation: Number(newEquation).toFixed(2)})
    }
    else{
      // we're adding more numbers
      let newEquation = equation + newLogic
      this.setState({equation: Number(newEquation).toFixed(2)})
    }

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
