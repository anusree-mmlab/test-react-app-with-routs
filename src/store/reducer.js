
const initialState = {
    counter : 0
}

const reducer = (state = initialState, action) => {
    if(action.type === 'ON_ADD_COUNTER') {
        let prevCounter = state.counter;
        state = {
            counter : prevCounter+1
        }

        return state;
    } 

    return state;
}

export default reducer;