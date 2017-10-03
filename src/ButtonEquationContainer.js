import React, { Component,  } from 'react';
import ButtonEquation from './ButtonEquation.js'

export default class ButtonEquationContainer extends Component {
  componentWillUpdate() {
    console.log("==== Component Updated!");
  }
  render() {
    return(
      <div className="equations">
        <div className="btn-equation-container">
          <ButtonEquation equation="10%" addLogicToEquation={this.props.addLogicToEquation} />
          <ButtonEquation equation="15%" addLogicToEquation={this.props.addLogicToEquation} />
          <ButtonEquation equation="20%" addLogicToEquation={this.props.addLogicToEquation} />
          <ButtonEquation equation="PDR" evalEquation={this.props.evalEquation} />
        </div>
      </div>
    )
  }
}
