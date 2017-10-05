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
      equation: (0).toFixed(2),
    }

    this.addLogicToEquation = this.addLogicToEquation.bind(this)
    this.evalEquation = this.evalEquation.bind(this)
  }

    addLogicToEquation(newLogic) {
      if(newLogic==="R"){
        console.log("sup")
        this.setState({equation: (0).toFixed(2)})
      }else{
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
          //let newEquation = Number(equation) + newLogic;
          let newEquation = equation + newLogic;
          if(newEquation.length>3){
            newEquation = newEquation.replace(/^0+/, '')
          }
          newEquation = newEquation.replace('.','')
          let resStr=newEquation.substring(0,newEquation.length-2)+"."+newEquation.substring(newEquation.length-2);
          this.setState({equation: resStr})
          //this.setState({equation: Number(newEquation).toFixed(2)})
        }

      }
    }

  evalEquation() {
    let str = this.state.equation.toString()
    //console.log('str: ', str)

    while(this.palindrome(str)===false){
      str = (Number(str) + 0.01).toFixed(2) 
      console.log("now: ", str)
      this.palindrome(str)
    }

    console.log("fuck yeah! :) ", str)
    this.setState({equation: Number(str).toFixed(2)})
  }

    palindrome(str) {
      let stringIn = str.toString().replace('.','')
      let reverseStr = stringIn.split('').reverse().join('') 
      if(reverseStr === stringIn) {
        console.log("YES")
        console.log("str: ", stringIn)
        return true
      } else {
        console.log("NOT")
        console.log("str: ", stringIn)
        return false
      }
    }

  render() {
    return (
      <div className="App">

      <div className="title_component">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>



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
