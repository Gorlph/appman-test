
import React, { Component } from 'react';
import axios from 'axios';
import modal from 'react-modal';
import { connect }from 'react-redux'
import Card from './card.js'
import {setList} from '../actions'
class Modal extends Component {
    constructor(props){
        super(props)
        this.state = {
            searchValue: '',
            cards:[]
           
        }
    }
    render(){
        console.log('/////////////////')
        console.log(this.props,'modal')
        // let img = this.props.card.imageUrl;
        // let cardID = this.props.card.id;
        // let cardName = this.props.card.name;
        
            let cards =  this.props.cards.map(card=>{
                   
                return (
                    <Card card={card}/>
    
                )
            })
           
            return(
                <div 
                style={
                    {
                        display:this.props.show?'block':'none',
                        alignContent:'center',
                    }
                }
                >
                    <input type="text"
                style={
                   { width:'80%'}
                }
                    value={this.state.searchValue} onChange={this.searchChange}></input>
                <div id="listModal" style={
                    {maxWidth :'90%',
                    maxHeight:'600px',
                    overflow:'scroll',
                    display:'flex',
                    paddingLeft:'50px',
                    flexFlow:'row wrap',
                    background:'#555555',
                    zIndex:100
                   
                    
                    // overflowX:'scroll'
                }
                
                }>
                    
                        {
                        cards
                        }
                </div>
                </div>
             )
       
                        
       
        
    }
    searchChange=async(e)=>{
        console.log('value,',e.value);
        this.setState({searchValue:e.value});
        let url = 'http://localhost:3030/api/cards'
        let cardsPromise = axios.get('http://localhost:3030/api/cards?name='+e.value);
        let cards = await cardsPromise;
        console.log('cards in searcxh',cards)
        let exist = this.props.existingCard
        this.setState({cards:cards.data.cards})
        this.props.dispatch(setList(cards.data.cards))


    }
    componentDidMount = async () => {
       let cardsPromise = axios.get('http://localhost:3030/api/cards');
       let cards = await cardsPromise;
       console.log(cards.data);
       let exist = this.props.existingCard
       this.setState({cards:cards.data.cards})
       console.log('inside modal',this.props)
       this.props.dispatch(setList(cards.data.cards))
       
    }
 
    
}
const mapStateToProps = (state) => {
    return {};
}


export default connect()(Modal);