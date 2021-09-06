import { calculatorState, ActionState, actionTypes } from "store/types/storeTypes"

const initialState: calculatorState = {
    input: '',
    output: '',
    error: null
}

export const calculatorReducer = (state = initialState, action: ActionState): calculatorState => {
    switch(action.type){
        case actionTypes.UPDATE_INPUT:
            return {input: state.input + action.payload.input, output: action.payload.output, error: null}
        case actionTypes.CALCULATE:
            return {input: action.payload.input, output: action.payload.output, error: null}
        case actionTypes.CLEAR:
            return {...initialState}
        case actionTypes.SHIT_HAPPENS:
            return {input: '', output: '', error: 'INVALID EXPRESSION'}
        default: return state
    }
}