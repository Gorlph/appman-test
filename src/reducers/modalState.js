const showModal = (state = false, action) => {
    console.log('show modal state',state,action)

    switch (action.type){
        case 'SHOW_MODAL':
            return true
        case 'HIDE_MODAL':
            return false; 

        default:
            return state;
    }
}
export default showModal