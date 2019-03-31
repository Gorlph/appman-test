import React, { Component } from 'react'
import Modal from './cardListModal';
import DexFieldWrapper from './mydexWrapper'
import {hideModal, showModal} from '../actions'
import {connect} from 'react-redux'

class AllWrapper extends Component {
  constructor(props){
    super(props);
    this.state={
      test:'1',
      showModal:false
    };
  }
  componentDidUpdate(){

  }
  render() {
    console.log('app',this.props)
    return (
     <div style={{
         position:'relative',
         overflow:'scroll',
         minHeight:'100%',
         height:'100%',
         minHeight:'650px'
     }}
     >
      <DexFieldWrapper  onClick={this.hideModal}/>
        <Modal
         onClick={this.hideModal}
          show={this.state.showModal}
          existingCard={this.props.existingCard}
          cards={this.props.cards}
        />
      <footer id="footer" style={
        {
          textAlign:'center'
        }
      }
     
      ><button  onClick={this.showModal}>ADD CARD</button></footer>
     
     </div>
       

    )
  }
  hideModal = (e) => {
    e.preventDefault();
    this.setState({showModal:false})
  }
  showModal = () => {
    console.log('dispatch!')

   this.setState({showModal:true})
  }
}
const mapState= (state)=>{
   let exist = state.pokedex;
   let cards = state.cardList.filter( el =>{
    return exist.indexOf( el ) < 0;
   })
  return{
    existingCard:state.pokedex,
    cards
  }
}

export default connect(mapState)(AllWrapper);
