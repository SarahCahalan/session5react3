import React, { Component } from 'react';
import './App.css';
import Address from './Address';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      address: {
        address: "123 South Street",
        city: "Pgh",
        state: "PA",
        zip: "19265"
      },
      workAddress: {
        address: "Zzz",
        city: "",
        state: "",
        zip: ""
      }
    }

    this.changeAddress = this.changeAddress.bind(this);
    this.changeWorkAddress = this.changeWorkAddress.bind(this);
  }

  changeAddress(newAddress) {
    this.setState({address: newAddress});
  }

  changeWorkAddress(newAddress) {
    this.setState({workAddress: newAddress});
  }

  render() {
    return (
      <div className="App">
        <Address address={this.state.address} toChangeAddress={this.changeAddress}/>
        <Address address={this.state.workAddress} toChangeAddress={this.changeWorkAddress} />
      </div>
    );
  }
}

export default App;
