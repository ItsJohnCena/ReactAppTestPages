import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  //screen resize
  constructor(props){
    super(props);
    this.state={width: '0', height: '0', tester: 'background true'};
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  componentDidMount(){
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount(){
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions(){
    var setter;
    if(this.state.width < 500){
      setter='nope';
    }else{
      setter='background true';
    } 
    this.setState({width: window.innerWidth, height: window.innerHeight, tester: setter});
    console.log(this.state.tester);
  }
  //screen resize

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
      </div>
    );
  }
}

export default App;
