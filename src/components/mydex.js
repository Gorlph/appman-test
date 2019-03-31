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
            <CardRemove card={card}/>

        )
    })
   
    return (
     <div style={{
         width:'100%',
         height:'100%',
         zIndex:-1,
         display:'flex',
         flexFlow:'row wrap',
         overflow:'scroll',
        //  position:'absolute'
     }}>
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
