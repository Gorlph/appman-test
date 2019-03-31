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
  componentDidMount(){
    document.addEventListener('mousedown',(e)=>{
      console.log(e)
      // if(e.target.id==='MainWrap'){
      //   this.hideModal();
      // }
    },false)

  }
  render() {
    console.log('app',this.props)
    return (
 
     <div 
     onClick={this.hideModal}
     id="MainWrap" style={{
         position:'relative',
         overflow:'scroll',
         height:'768px',

        maxHeight:'768px'
    
     }}
     >
      <DexFieldWrapper  hideModal={this.hideModal}/>
        <Modal
        //  onClick={this.hideModal}
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
    // e.preventDefault();
    console.log('set hide modal')
    if(e.target.id==='MainWrap' ||e.target.id==='modalWrapper'
    || e.target.id==='listModal' 
    ){
      this.setState({showModal:false})
    }
  }
  showModal = (e) => {
    console.log('dispatch!')
    e.preventDefault();

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
