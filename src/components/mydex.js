import React, { Component } from "react";
import CardRemove from './cardRemove';
import { connect } from "react-redux";
class DexField extends Component {
  constructor(props) {
    super(props);
    this.state={
        cards:[]
    }
  }
  render() {
    console.log('mydex',this.props.cards)
    let cards = this.props.cards.map(card=>{
                   
        return (
            <CardRemove  hideModal={this.props.hideModal} card={card}/>

        )
    })
   
    return (
     <div id="DexList" style={{
         width:'100%',
         height:'100%',
         maxHeight:'653px',
   
         display:'flex',
         flexFlow:'row wrap',
         overflow:'scroll',
        //  position:'absolute'
     }}
     
     >
     {cards}
     </div>
    );
  }
}
const mapStateToProps = state => {
  console.log('inside mapstate mydex',state);
  let cards = state.pokeDex
  return {
    cards
  };
};
export default DexField;
