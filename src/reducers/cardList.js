const cardList = (state =[], action) => {
    switch (action.type){
        case 'SHOW_CARD_LIST':
            return action.cardList
        case 'NORMAL_CLEAR': 
            return [];
        default:
            return state;
    }
}
export default cardList