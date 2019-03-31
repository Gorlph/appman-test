let nextTodoId = 0
export const addCard = card => ({
  type: 'ADD_CARD',
  id: nextTodoId++,
  card
})
export const setList = cardList =>({
    type:'SHOW_CARD_LIST',
    id: nextTodoId++,
    cardList

})
export const removeCard = (card ) => ({
  type: 'REMOVE_CARD',
  id: nextTodoId++,
  card

})
export const showModal = ()=> ({
    type: 'SHOW_MODAL',
    id: nextTodoId++
   
  })
export const hideModal = ()=> ({
    type: 'HIDE_MODAL',
    id: nextTodoId++

  })
  
  

