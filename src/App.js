import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import User from './components/User';
import ClickityClick from './components/ClickityClick';

const message = "hola1....";
var name2 = "anselmo3";

class App extends Component {

  name = "anselmo";
  apellidos = "aroca";

  constructor(props){
    super(props);
    this.state = {
      actualScreen: 0,
      finalScreen: false,
      showFirst: false,
      data: 'Initial data...',
      report: "",
      reportScript: ""
    }
    this.updateState = this.updateState.bind(this);
    this.onClick = this.onClick.bind(this);

    this.name = "anselmox";
  }

  pasalo(){
    return <User 
      name={ this.name }
      name2={ name2 }
      email="anselmo.aroca@gmail.com"
      onClick={ this.onClick }
      />;
  }

  updateState() {
    this.setState({data: 'Data updated...'})
   }

  onClick() {
    console.log('hoalallala');
    this.setState({ actualScreen: this.state.actualScreen + 1 });
  }

  componentDidUpdate() {
        // this runs the contents in script tag on a window/global scope
        let scriptToRun = this.state.reportScript
        if (scriptToRun !== undefined) {
            //remove <script> and </script> tags since eval expects only code without html tags
            let scriptLines = scriptToRun.split("\n")
            scriptLines.pop()
            scriptLines.shift()
            let cleanScript = scriptLines.join("\n")
            console.log('running script ',cleanScript)
            window.eval(cleanScript)
        }

    }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <User name={ this.name } name2={ name2 } email="aarocax@gmail.com" onClick={ this.onClick } />
        { this.pasalo() }
        <div>count:{this.state.actualScreen}</div>
        <button onClick={this.onClick}>click!</button>
        <button onClick = {this.updateState}>CLICK</button>
        <h4>{this.state.data}</h4>
        <ClickityClick />
        <div id="reportPlaceholder">
          <div dangerouslySetInnerHTML={{__html: this.state.report}}/>
        </div>
      </div>
    );
  }
}

export default App;
