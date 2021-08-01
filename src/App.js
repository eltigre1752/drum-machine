import './App.scss';
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGrin } from "@fortawesome/free-solid-svg-icons";
import { bankOne, bankTwo} from './BankArray';
import PadBank from './PadBank';
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentPadBank: bankOne,
      currentPadBankId: "Heater Kit",
      display: String.fromCharCode(160),
      power: true,
      sliderVal: 0.2
    }

    this.powerControl = this.powerControl.bind(this);
    this.selectBank = this.selectBank.bind(this);
    this.displayClipName = this.displayClipName.bind(this);
    this.clearDisplay = this.clearDisplay.bind(this);
    this.adjustVolumn = this.adjustVolumn.bind(this);
  }

  powerControl() {
    this.setState({
      power: !this.state.power,
      display: String.fromCharCode(160)
    })
  } 

  displayClipName(name) {
    if(this.state.power){
      this.setState({
        display: name
      })
    }
  }

  clearDisplay() {
    this.setState({
      display: String.fromCharCode(160)
    })
  }

  adjustVolumn(e) {
    if(this.state.power){
      this.setState({
        sliderVal: e.target.value,
        display: "Volumn: " + Math.round(e.target.value * 100) 
      })
      setTimeout(() => this.clearDisplay(), 1000);
    }
  }

  selectBank() {
    if(this.state.power) {
      if(this.state.currentPadBankId === "Heater Kit"){
        this.setState({
          currentPadBank: bankTwo,
          currentPadBankId: "Smooth Piano Kitt",
          display: "Smooth Piano Kitt"
        })
      }
      else{
        this.setState({
          currentPadBank: bankOne,
          currentPadBankId: "Heater Kit",
          display: "Heater Kit"
        })
      }
    }
  }

  render () {
    const powerSlider = this.state.power
      ? {
        float: "left"  
      }
      : {
        float: "right"
      };
    
    const bankSlider = this.state.currentPadBank === bankOne
      ? {
        float: "left"
      }
      : {
        float: "right"
      }
    const clip = [].slice.call(document.getElementsByClassName('clip'));
    clip.forEach(element => {
      element.volume = this.state.sliderVal;
    });

    return (
      <div className = "container">
        <PadBank 
          power = {this.state.power}
          currentPadBank = {this.state.currentPadBank}
          updateDisplay = {this.displayClipName}
        />

        <div className = "logo">
          <div className = 'inner-logo'>HONG VAN </div>
          <FontAwesomeIcon className = "inner-logo" icon = {faGrin} />
        </div>

        <div className = "controls-container">
          <div className = "control">
            <p>Power</p>
            <div className = "select" onClick = {this.powerControl}>
              <div className = "inner" style = {powerSlider}/>
            </div>
            <p className = "display">{this.state.display}</p>
            <div className = "volumn-slider">
              <input 
                type = "range"
                max = "1"
                min = "0"
                step = "0.1"
                value = {this.state.sliderVal}
                onChange = {this.adjustVolumn}
              />
            </div>
            <p>Bank</p>
            <div className = "select" onClick = {this.selectBank}>
              <div className = "inner" style = {bankSlider}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
