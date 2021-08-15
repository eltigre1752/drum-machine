import './styles/App.scss';
import React from 'react';

const activeStyle = {
  backgroundColor: 'orange',
  boxShadow: '3px 3px 5px orange'
};
const inactiveStyle = {
  backgroundColor: 'grey',
  boxShadow: '3px 3px 5px black'
};

const powerOffActiveStyle = {
  backgroundColor: '#979797',
  boxShadow: '0 3px grey'
}

  class DrumPad extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        padStyle: inactiveStyle
      };

      this.playSound = this.playSound.bind(this);
      this.handleKeyPress = this.handleKeyPress.bind(this);
      this.activatePad = this.activatePad.bind(this);
    }

    componentDidMount() {
      document.addEventListener("keydown", this.handleKeyPress)
    }

    componentWillUnmount() {
      document.removeEventListener("keydown", this.handleKeyPress)
    }

    handleKeyPress({ keyCode }) {
      if(keyCode === this.props.keyCode) {
        this.playSound();
      }
    }
  
    activatePad() {
      if(this.props.power){
        if(this.state.padStyle === activeStyle) {
          this.setState({
            padStyle: inactiveStyle
          });
        } else {
          this.setState({
            padStyle: activeStyle
          });
        }
      } else if(this.state.padStyle === powerOffActiveStyle) {
        this.setState({
          padStyle: inactiveStyle
        });
      } else {
        this.setState({
          padStyle: powerOffActiveStyle
        });
      }
    }
   
    playSound() {
      const sound = document.getElementById(this.props.keyTrigger);
      sound.currentTime = 0;
      sound.play();
      this.activatePad();
      setTimeout(() => this.activatePad(), 100);
      this.props.updateDisplay(this.props.drumPadId.replace(/-/g,' '));
    }
  
    render() {
      return (
        <div 
          className = "drum-pad"
          id = {this.props.drumPadId}
          onClick = {this.playSound}
          style = {this.state.padStyle}
        >
          <audio 
            className = "audio"
            id = {this.props.keyTrigger}
            src = {this.props.url}
          />
          {this.props.keyTrigger}
        </div>
      )
    }
  }

  export default DrumPad;