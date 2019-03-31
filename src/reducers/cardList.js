const cardList = (state =[], action) => {
    switch (action.type){
        case 'SHOW_CARD_LIST':
            return action.cardList.filter(card=> card.supertype==='Pokémon')
        case 'NORMAL_CLEAR': 
            return [];
        default:
            return state;
    }
}
export default cardList