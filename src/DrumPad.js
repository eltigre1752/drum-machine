import './App.scss';
import React from 'react';

const activeStyle = {
    backgroundColor: 'orange',
    boxShadow: '0 3px orange',
  
};
const inactiveStyle = {
    backgroundColor: 'grey',
    boxShadow: '3px 3px 5px black'
};

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

    componentDidMount(){
      document.addEventListener("keydown", this.handleKeyPress)
    }

    componentWillUnmount(){
      document.removeEventListener("keydown", this.handleKeyPress)
    }

    handleKeyPress(e){
      if(e.keyCode === this.props.keyCode) {
        this.playSound();
      }
    }
  
    activatePad() {
      if(this.props.power){
        if(this.state.padStyle.backgroundColor === 'orange') {
          this.setState({
            padStyle: inactiveStyle
          });
        } else {
          this.setState({
            padStyle: activeStyle
          });
        }
      } else if(this.state.padStyle.boxShadow === '0 3px grey') {
        this.setState({
          padStyle: inactiveStyle
        });
      } else {
        this.setState({
          padStyle: {
            backgroundColor: '#979797',
            boxShadow: '0 3px grey'
          }
        });
      }
    }
   
    playSound() {
      const sound = document.getElementById(this.props.keyTrigger);
      sound.currentTime = 0;
      sound.play();
      this.activatePad();
      setTimeout(() => this.activatePad(), 100);
      this.props.updateDisplay(this.props.clipId.replace(/-/g,' '));
    }
  
    render() {
      const {clip, keyTrigger} = this.props;
      return (
        <div 
          className = "drum-pad"
          id = {this.props.clipId}
          onClick = {this.playSound}
          style = {this.state.padStyle}
        >
          <audio 
            className = "clip"
            id = {keyTrigger}
            src = {clip}
          />
          {keyTrigger}
        </div>
      )
    }
  }

  export default DrumPad;