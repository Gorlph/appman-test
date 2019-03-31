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
       
    }
    render() {
        console.log(this.props.card)
        let img = this.props.card.imageUrl;
        let cardID = this.props.card.id;
        let name = this.props.card.name;
        let hp = Math.max(100,parseInt(this.props.card.hp))
        let str = Math.min(this.props.card.attacks.length*50,100)
        let weakness = Math.min(this.props.card.weaknesses.length*100,100)
        let numReg = /([0-9]+)/
        let damage = Math.min(100,this.props.card.attacks.reduce((accu,redu)=>{
            console.log(redu.damage);
            if(redu.damage.length===0){
                return accu;
            }
            console.log(parseInt(numReg.exec(redu.damage)))
            return accu+ parseInt(numReg.exec(redu.damage));

        },0));
        let happy = ((hp/10)+(damage/10)+10-weakness)/5
        let cardObj = {
            name,
            hp,
            str,
            weakness,
            damage,
            happy
           
        }
        return (
             
            <div style = {
                {   margin:'5px 5px 5px 5px',
                    minWidth: '90%',
                    minHeight: '150px',
                    display: 'flow',
                    flexFlow:'row',
                    background: '#555555',
                    border:'5px',
                }
            } >
                <img style={{
                     float:'left',
                    maxWidth:'150px',
                    display:'inline block',
                    padLeft:'5px'
                }} src={img} ></img>

                <div id={`${this.props.card.id}-add-detail`}
                style = {
                    {  width:'70%',
                       display:'inline block'
                    }
                   
                }>
                    <ul style={{listStyle: 'none'}}>
                        {
                            Object.keys(cardObj).map(key =>
                                (<li>
                                {`${key}:${cardObj[key]}`}
                                </li>
                                )
                            )
                        }
                       {/* <li>{this.props.card.name}</li> */}
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