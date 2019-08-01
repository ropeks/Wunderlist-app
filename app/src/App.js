import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      welcomeMsg: ''
    }
  }

  componentDidMount() {
    axios
      .get('https://wunderlist-api.herokuapp.com')
      .then(res => {
        this.setState({ welcomeMsg: res.data.message });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="App">
        <strong>{this.state.welcomeMsg}</strong>
      </div>
    );
  }
  
}

export default App;