import { Dispatch } from "react";
import { calculatorState } from "store/types/storeTypes";


export const updateState = (value: string, dispatch:Dispatch<any>, calcState: calculatorState): void => {
    switch(value){
        case '=': {
            try {
                const result = eval(calcState.input)
                dispatch({type: "CALCULATE", payload: {input: calcState.input, output: result}});
            } catch {
                dispatch({type: "SHIT_HAPPENS"});
            } break;
        }
        case 'DEL': {
            dispatch({type: "CLEAR"}); break;
        }
        case 'BACKSPACE': {
            const editedValue = calcState.input.substr(0, calcState.input.length - 1)
            dispatch({type: "CALCULATE", payload: {input: editedValue, output: calcState.output, error: null}}); break;
        }
        default: {
            dispatch({type: "UPDATE_INPUT", payload: {input: value, output: calcState.output, error: null}});
        }
    }
}