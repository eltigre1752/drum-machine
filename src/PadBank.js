import './App.scss';
import React from 'react';
import DrumPad from './DrumPad';

class PadBank extends React.Component {
    constructor(props){
      super(props);
    }
  
    render() {
      let padBank;
      if(this.props.power){
        padBank = this.props.currentPadBank.map((drumObj, i, padBankArr) => {
            return (
              <DrumPad 
                clip = {drumObj.url}
                clipId = {drumObj.id}
                keyTrigger = {drumObj.keyTrigger}
                keyCode = {drumObj.keyCode}
                power={this.props.power}
                updateDisplay = {this.props.updateDisplay}
              />
            )
          }
        )
      }
      else {
        padBank = this.props.currentPadBank.map((drumObj) => {
            return (
              <DrumPad 
                clip = "#"
                clipId = {drumObj.id}
                keyTrigger = {drumObj.keyTrigger}
                keyCode = {drumObj.keyCode}
                power={this.props.power}
                updateDisplay = {this.props.updateDisplay}
              />
            )
          }
        )
      }
      return(
       <div className = "pad-bank">
         {padBank}
       </div>
      )
    }
  }

  export default PadBank;