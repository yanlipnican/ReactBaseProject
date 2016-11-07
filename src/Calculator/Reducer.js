import ACTIONS from 'Actions';

const initialState = {
    firstValue : 0,
    secondValue : 0,
    result : 0
};

export default (state = initialState, action) => {
    switch(action.type){
        case ACTIONS.CALCULATOR.SET_FIRST_VALUE:
        {
            state.firstValue = action.value;
            state.result = state.firstValue + state.secondValue;
            break;
        }
        case ACTIONS.CALCULATOR.SET_SECOND_VALUE:
        {
            state.secondValue = action.value;
            state.result = state.firstValue + state.secondValue;
            break;
        }
    }
    
    return Object.assign({}, state);
};