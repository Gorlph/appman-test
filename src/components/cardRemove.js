import React, {
    Component
} from 'react';
import {
    addCard,
    removeCard
} from '../actions';
import { connect } from 'react-redux';
class Card extends Component {
    constructor(props) {
        super(props)
        this.state = {
           card:{name:'',
            hp:0,

            weak:0,
            damage:0,
            happiness:0
            },
            id:''
        }
    }
    componentDidMount(){
     
        let curCard = this.props.card
        // this.setState({card:{
        //     hp:curCard.hp,
        //  weak:parseInt(curCard.weaknesses[0].value.replace('x','')),

        // }})
    }
    render() {
        let img = this.props.card.imageUrl;
        let cardID = this.props.card.id;
        return (
             
            <div style = {
                {
                    minWidth: '50%',
                    minHeight: '150px',
                    display: 'block',
                    background: '#555555'
                }
            } >
                <img style={{
                    maxWidth:'150px',
                    display:'inline block'
                }} src={img} ></img>

                <div
                style = {
                    {  width:'70%',
                       display:'inline block'
                    }
                   
                }>
                    <ul>
                        {Object.keys(this.state.card).forEach((key,index)=>{
                            `${key}: ${this.state.card[key]}`
                        })}
                    </ul>
                </div>
                <div style={
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
    addCard = () => {
      
        let dispatch = this.props.dispatch
        // console.log(push(this.props.char))
        dispatch(removeCard(this.props.card))
    }

}
// const mapStateToProps = (state) => {
//     return {};
// }

export default connect()(Card);