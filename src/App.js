import React, { Component } from 'react'
import Modal from './components/cardListModal';
import DexFieldWrapper from './components/mydexWrapper'
import './App.css'
import {hideModal, showModal} from './actions'
import {connect} from 'react-redux'
import AllWrapper from './components/allWrapper'
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      test:'1'
    };
  }
  componentDidUpdate(){
    console.log('update', this.state)
  }
  render() {
    console.log('app',this.props)
    return (
      <div className="App" onClick={this.hideModal}>
      <header>My Pokedex</header>
      <AllWrapper/>
      </div>
    )
  }
}

export default App;
