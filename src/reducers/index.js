import { combineReducers } from 'redux';
import pokedex from './pokedex';
import cardList from './cardList';
import showModal from './modalState'
export default combineReducers({
    pokedex,
    cardList,
    showModal
})