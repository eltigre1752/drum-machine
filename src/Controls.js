import './styles/App.scss';
import React from 'react';

function Controls (props) {
  const powerSlider = props.power
      ? {
        float: "left"  
      }
      : {
        float: "right"
      };
    
    const bankSlider = props.currentPadBank === props.bankOne
      ? {
        float: "left"
      }
      : {
        float: "right"
      }

    return(
        <div className = "controls-container">
          <div className = "control">
            <p>Power</p>
            <div className = "select" onClick = {props.powerControl}>
              <div className = "inner" style = {powerSlider}/>
            </div>
            <p className = "display">{props.display}</p>
            <div className = "volumn-slider">
              <input 
                type = "range"
                max = "1"
                min = "0"
                step = "0.1"
                value = {props.sliderVal}
                onChange = {props.adjustVolumn}
              />
            </div>
            <p>Bank</p>
            <div className = "select" onClick = {props.selectBank}>
              <div className = "inner" style = {bankSlider}/>
            </div>
          </div>
        </div>
    )
}

export default Controls;