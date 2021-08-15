import './styles/App.scss';
import React from 'react';
import DrumPad from './DrumPad';

class PadBank extends React.Component {
    render() {
      let padBank;
      const { power, currentPadBank, updateDisplay } = this.props;
      if(power) {
        padBank = currentPadBank.map((drumObj) => {
            return (
              <DrumPad 
                url = {drumObj.url}
                drumPadId = {drumObj.id}
                keyTrigger = {drumObj.keyTrigger}
                keyCode = {drumObj.keyCode}
                power={power}
                updateDisplay = {updateDisplay}
              />
            )
          }
        )
      } else {
        padBank = currentPadBank.map((drumObj) => {
            return (
              <DrumPad 
                url = "#"
                drumPadId = {drumObj.id}
                keyTrigger = {drumObj.keyTrigger}
                keyCode = {drumObj.keyCode}
                power={power}
                updateDisplay = {updateDisplay}
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