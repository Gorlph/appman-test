import React, { Component } from "react";
import Card from './card';
import { connect } from "react-redux";
import DexField from './mydex.js';
class DexFieldWrapper extends Component {
  constructor(props) {
    super(props);
    this.state={
        cards:[]
    }
  }
  render() {
    return (<div id="dexfieldwrapper" onClick={this.props.onClick}>
      <DexField   cards={this.props.cards}></DexField>
    </div>
    )
  }
}
const mapStateToProps = state => {
  console.log('inside mapstate wrapper',state);
  let cards = state.pokedex
  console.log('cards,',cards)
  return {
    cards:cards
  };
};
export default connect(mapStateToProps)(DexFieldWrapper);
