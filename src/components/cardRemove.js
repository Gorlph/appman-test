import React, {
    Component
} from 'react';
import {
    addCard,
    removeCard
} from '../actions';
import { connect } from 'react-redux';
import { throws } from 'assert';
class Card extends Component {
    constructor(props) {
        super(props)
        
         
    }
    componentDidMount(){
     

    }
    render() {
        let img = this.props.card.imageUrl;
        let cardObj = {
            name:this.props.card.name,
            id:this.props.card.id
        }
        let cardID = this.props.card.id;
        let name = this.props.card.name;
  
        return (
             
            <div style = {
                {  
                    minWidth: '50%',
                    // maxWidth:'50%',
                    border:'3px',
                    minHeight: '150px',
                    maxHeight:'210px',
                    display: 'flow',
                    flexFlow:'row',
                    background: '#555555'
                }
            } >
                 <img       onClick={this.props.hideModal}
                 style={{
                     float:'left',
                    maxWidth:'150px',
                    display:'inline block',
                    padLeft:'5px'
                }} src={img} ></img>

                <div       onClick={this.props.hideModal}
                id={`${this.props.card.id}-remove-detail`}
                style = {
                    {  width:'70%',
                       display:'inline block'
                    }
                   
                }>
                    <ul style={{listStyle: 'none'}}>
                       <li>{this.props.card.name}</li>
                    </ul>
                </div>
                <div 
                style={
                    {
                        textAlign:'right',
                        display:'inline block'
                    }
                   
                }
                onClick={this.addCard}>
                    Remove
                </div>

            </div>



        )

    }
    addCard = (e) => {
      this.props.hideModal(e);
        let dispatch = this.props.dispatch
        // console.log(push(this.props.char))
        dispatch(removeCard(this.props.card))
    }

}
// const mapStateToProps = (state) => {
//     return {};
// }

export default connect()(Card);