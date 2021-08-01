(this["webpackJsonpdrum-machine"]=this["webpackJsonpdrum-machine"]||[]).push([[0],{10:function(e,t,a){},19:function(e,t,a){},26:function(e,t,a){"use strict";a.r(t);var r=a(2),s=a.n(r),i=a(12),o=a.n(i),n=(a(19),a(4)),c=a(5),d=a(3),l=a(7),p=a(6),u=(a(10),a(13)),m=a(14),h=[{keyCode:81,keyTrigger:"Q",id:"Heater-1",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"},{keyCode:87,keyTrigger:"W",id:"Heater-2",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"},{keyCode:69,keyTrigger:"E",id:"Heater-3",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"},{keyCode:65,keyTrigger:"A",id:"Heater-4",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"},{keyCode:83,keyTrigger:"S",id:"Clap",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"},{keyCode:68,keyTrigger:"D",id:"Open-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"},{keyCode:90,keyTrigger:"Z",id:"Kick-n'-Hat",url:"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"},{keyCode:88,keyTrigger:"X",id:"Kick",url:"https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"},{keyCode:67,keyTrigger:"C",id:"Closed-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"}],y=[{keyCode:81,keyTrigger:"Q",id:"Chord-1",url:"https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"},{keyCode:87,keyTrigger:"W",id:"Chord-2",url:"https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"},{keyCode:69,keyTrigger:"E",id:"Chord-3",url:"https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"},{keyCode:65,keyTrigger:"A",id:"Shaker",url:"https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"},{keyCode:83,keyTrigger:"S",id:"Open-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"},{keyCode:68,keyTrigger:"D",id:"Closed-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"},{keyCode:90,keyTrigger:"Z",id:"Punchy-Kick",url:"https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"},{keyCode:88,keyTrigger:"X",id:"Side-Stick",url:"https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"},{keyCode:67,keyTrigger:"C",id:"Snare",url:"https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"}],k=a(0),g={backgroundColor:"orange",boxShadow:"0 3px orange"},j={backgroundColor:"grey",boxShadow:"3px 3px 5px black"},C=function(e){Object(l.a)(a,e);var t=Object(p.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).state={padStyle:j},r.playSound=r.playSound.bind(Object(d.a)(r)),r.handleKeyPress=r.handleKeyPress.bind(Object(d.a)(r)),r.activatePad=r.activatePad.bind(Object(d.a)(r)),r}return Object(c.a)(a,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleKeyPress)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.handleKeyPress)}},{key:"handleKeyPress",value:function(e){e.keyCode===this.props.keyCode&&this.playSound()}},{key:"activatePad",value:function(){this.props.power?"orange"===this.state.padStyle.backgroundColor?this.setState({padStyle:j}):this.setState({padStyle:g}):"0 3px grey"===this.state.padStyle.boxShadow?this.setState({padStyle:j}):this.setState({padStyle:{backgroundColor:"#979797",boxShadow:"0 3px grey"}})}},{key:"playSound",value:function(){var e=this,t=document.getElementById(this.props.keyTrigger);t.currentTime=0,t.play(),this.activatePad(),setTimeout((function(){return e.activatePad()}),100),this.props.updateDisplay(this.props.clipId.replace(/-/g," "))}},{key:"render",value:function(){var e=this.props,t=e.clip,a=e.keyTrigger;return Object(k.jsxs)("div",{className:"drum-pad",id:this.props.clipId,onClick:this.playSound,style:this.state.padStyle,children:[Object(k.jsx)("audio",{className:"clip",id:a,src:t}),a]})}}]),a}(s.a.Component),b=function(e){Object(l.a)(a,e);var t=Object(p.a)(a);function a(e){return Object(n.a)(this,a),t.call(this,e)}return Object(c.a)(a,[{key:"render",value:function(){var e,t=this;return e=this.props.power?this.props.currentPadBank.map((function(e,a,r){return Object(k.jsx)(C,{clip:e.url,clipId:e.id,keyTrigger:e.keyTrigger,keyCode:e.keyCode,power:t.props.power,updateDisplay:t.props.updateDisplay})})):this.props.currentPadBank.map((function(e){return Object(k.jsx)(C,{clip:"#",clipId:e.id,keyTrigger:e.keyTrigger,keyCode:e.keyCode,power:t.props.power,updateDisplay:t.props.updateDisplay})})),Object(k.jsx)("div",{className:"pad-bank",children:e})}}]),a}(s.a.Component),f=function(e){Object(l.a)(a,e);var t=Object(p.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).state={currentPadBank:h,currentPadBankId:"Heater Kit",display:String.fromCharCode(160),power:!0,sliderVal:.2},r.powerControl=r.powerControl.bind(Object(d.a)(r)),r.selectBank=r.selectBank.bind(Object(d.a)(r)),r.displayClipName=r.displayClipName.bind(Object(d.a)(r)),r.clearDisplay=r.clearDisplay.bind(Object(d.a)(r)),r.adjustVolumn=r.adjustVolumn.bind(Object(d.a)(r)),r}return Object(c.a)(a,[{key:"powerControl",value:function(){this.setState({power:!this.state.power,display:String.fromCharCode(160)})}},{key:"displayClipName",value:function(e){this.state.power&&this.setState({display:e})}},{key:"clearDisplay",value:function(){this.setState({display:String.fromCharCode(160)})}},{key:"adjustVolumn",value:function(e){var t=this;this.state.power&&(this.setState({sliderVal:e.target.value,display:"Volumn: "+Math.round(100*e.target.value)}),setTimeout((function(){return t.clearDisplay()}),1e3))}},{key:"selectBank",value:function(){this.state.power&&("Heater Kit"===this.state.currentPadBankId?this.setState({currentPadBank:y,currentPadBankId:"Smooth Piano Kitt",display:"Smooth Piano Kitt"}):this.setState({currentPadBank:h,currentPadBankId:"Heater Kit",display:"Heater Kit"}))}},{key:"render",value:function(){var e=this,t=this.state.power?{float:"left"}:{float:"right"},a=this.state.currentPadBank===h?{float:"left"}:{float:"right"};return[].slice.call(document.getElementsByClassName("clip")).forEach((function(t){t.volume=e.state.sliderVal})),Object(k.jsxs)("div",{className:"container",children:[Object(k.jsx)(b,{power:this.state.power,currentPadBank:this.state.currentPadBank,updateDisplay:this.displayClipName}),Object(k.jsxs)("div",{className:"logo",children:[Object(k.jsx)("div",{className:"inner-logo",children:"HONG VAN "}),Object(k.jsx)(u.a,{className:"inner-logo",icon:m.a})]}),Object(k.jsx)("div",{className:"controls-container",children:Object(k.jsxs)("div",{className:"control",children:[Object(k.jsx)("p",{children:"Power"}),Object(k.jsx)("div",{className:"select",onClick:this.powerControl,children:Object(k.jsx)("div",{className:"inner",style:t})}),Object(k.jsx)("p",{className:"display",children:this.state.display}),Object(k.jsx)("div",{className:"volumn-slider",children:Object(k.jsx)("input",{type:"range",max:"1",min:"0",step:"0.1",value:this.state.sliderVal,onChange:this.adjustVolumn})}),Object(k.jsx)("p",{children:"Bank"}),Object(k.jsx)("div",{className:"select",onClick:this.selectBank,children:Object(k.jsx)("div",{className:"inner",style:a})})]})})]})}}]),a}(s.a.Component),v=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,27)).then((function(t){var a=t.getCLS,r=t.getFID,s=t.getFCP,i=t.getLCP,o=t.getTTFB;a(e),r(e),s(e),i(e),o(e)}))};o.a.render(Object(k.jsx)(s.a.StrictMode,{children:Object(k.jsx)(f,{})}),document.getElementById("root")),v()}},[[26,1,2]]]);
//# sourceMappingURL=main.a6db494a.chunk.js.map