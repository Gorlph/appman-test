const pokedex = (state =[], action) => {
    console.log('inside pokedex redux', state)
    switch (action.type){
        case 'ADD_CARD':
            return [
                ...state,
                action.card
            ]
        case 'REMOVE_CARD':
            return state.filter(card=>{
                console.log('remove',card.id,action.card.id)
                return card.id != action.card.id;
            })
        case 'NORMAL_CLEAR': 
            return [];
        default:
            return state;
    }
}
export default pokedex