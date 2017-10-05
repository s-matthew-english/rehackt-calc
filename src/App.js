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



  // addLogicToEquation(newLogic) {
  //   if(newLogic==="D"){
  //     let keeperOfTheGate = this.state.equation.toString()
  //     if(keeperOfTheGate.slice(-1)==="0"){
  //       console.log("got 'em ;)")
  //     }
  //     //let newCalc = keeperOfTheGate + newLogic
  //     // newValue = parseFloat('' + parseFloat(this.state.equation) + (newLogic/100.0))
  //     // this.state.equation = newValue
  //   }
  //   if(newLogic==="R"){
  //     this.state = {
  //       equation: 0.00
  //     }
  //   }
  //   let newValue, multiplier
  //   let equation = this.state.equation
  //   if (newLogic.includes("%")) {
  //     multiplier = parseFloat(newLogic.replace("%","")) / 100.0
  //     newValue = parseFloat(equation) + parseFloat(equation) * multiplier 
  //   } else {
  //     newValue = parseFloat('' + parseFloat(equation) + newLogic)
  //   }

  // console.log("newLogic", newLogic)
  // console.log("this.state.equation", this.state.equation)

  //   this.setState({equation: newValue.toFixed(2)})
  // }

  evalEquation() {
    let str = this.state.equation.toString()
    //console.log('str: ', str)

    while(this.palindrome(this.state.equation)==false){
      this.state.equation = (Number(this.state.equation) + 0.01).toFixed(2) 
      console.log("now: ", this.state.equation)
      this.palindrome(this.state.equation)
    }

    console.log("fuck yeah! :) ", this.state.equation)

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
