
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

            let cards =  this.props.cards.map(card=>{       
                return (
                    <Card card={card}/>
                )
            })
           
            return(
                <div id="modalWrapper"
                style={
                    {   position:'absolute',
                        maxWidth:'1000px',
                        minHeight:'600px',
                        // top:'500px',
                        // left:'200px',
                        overflow:'scroll'
                        ,
                        display:this.props.show?'block':'none',
                        alignContent:'center',
                        zIndex:100
                        
                    }
                }
                >
                    <input type="text"
                style={
                   { width:'80%'}
                }
                    value={this.state.searchValue} onChange={this.searchChange}></input>
                <div id="listModal" style={
                    {left:'50px',
                        maxWidth :'90%',
                    minWidth:'800px',
                    minHeight:'597px',
                    maxHeight:'597px',
                    overflow:'scroll',
                    display:'flex',
                    paddingLeft:'50px',
                    flexFlow:'row wrap',
                    background:'#d2f596',
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
        let value = e.target.value
        console.log('value,',value);
        this.setState({searchValue:value});
        let url = 'http://localhost:3030/api/cards'
        let cardsPromise = axios.get('http://localhost:3030/api/cards?name='+value);
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