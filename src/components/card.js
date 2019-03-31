import React, {
    Component
} from 'react';
import {
    addCard
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
        this.setState({card:{
            name:curCard.name,
            hp:curCard.hp,
            id:curCard.id
        //  weak:parseInt(curCard.weaknesses[0].value.replace('x','')),

        }})
    }
    render() {
        let img = this.props.card.imageUrl;
        let cardID = this.props.card.id;
        return (
             
            <div style = {
                {  
                    minWidth: '50%',
                    minHeight: '150px',
                    display: 'flow',
                    flexFlow:'row',
                    background: '#555555'
                }
            } >
                <img style={{
                     float:'left',
                    maxWidth:'150px',
                    display:'inline block',
                    padLeft:'5px'
                }} src={img} ></img>

                <div id={`${this.state.card.id}-add-detail`}
                style = {
                    {  width:'70%',
                       display:'inline block'
                    }
                   
                }>
                    <ul style={{listStyle: 'none'}}>
                       <li>{this.state.card.name}</li>
                    </ul>
                </div>
                <div style={
                    {
                        textAlign:'right',
                        display:'inline block'
                    }
                   
                }
                onClick={this.addCard}>
                    ADD
                </div>

            </div>



        )

    }
    addCard = () => {
      
        let dispatch = this.props.dispatch
        // console.log(push(this.props.char))
        dispatch(addCard(this.props.card))
    }

}
// const mapStateToProps = (state) => {
//     return {};
// }

export default connect()(Card);