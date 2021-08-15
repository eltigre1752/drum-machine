import './styles/App.scss';
import React from 'react';
import { bankOne, bankTwo} from './Data/BankArray';
import PadBank from './PadBank';
import Logo from './Logo';
import Controls from './Controls';
import Clock from './Clock';
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentPadBank: bankOne,
      currentPadBankId: "Heater Kit",
      display: String.fromCharCode(160), //String.fromCharCode(160) instead of '' in case the display collapsing
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
      display: !this.state.power ? 'Power On' : 'Power Off'
    });
    setTimeout(() => this.clearDisplay(), 1000);
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
    if(this.state.power) {
      this.setState({
        sliderVal: e.target.value,
        display: "Volumn: " + Math.round(e.target.value * 100) 
      })
      setTimeout(() => this.clearDisplay(), 1000);
    }
  }

  selectBank() {
    if(this.state.power) {
      if(this.state.currentPadBankId === "Heater Kit") {
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
    const audio = [].slice.call(document.getElementsByClassName('audio'));
    audio.forEach(element => {
      element.volume = this.state.sliderVal;
    });

    return (
      <div className = "container" style={this.state.backGroundStyle}>
        <Logo />
        <Clock />
        <PadBank 
          power = {this.state.power}
          currentPadBank = {this.state.currentPadBank}
          updateDisplay = {this.displayClipName}
        />
        <Controls
          powerControl = {this.powerControl}
          display = {this.state.display}
          sliderVal = {this.state.sliderVal}
          adjustVolumn = {this.adjustVolumn}
          selectBank = {this.selectBank}
          power = {this.state.power}
          currentPadBank = {this.state.currentPadBank}
          bankOne = {bankOne}
          bankTwo = {bankTwo}
        />
      </div>
    )
  }
}

export default App;
