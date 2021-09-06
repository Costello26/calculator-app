export enum actionTypes {
    UPDATE_INPUT = "UPDATE_INPUT",
    CALCULATE = "CALCULATE",
    CLEAR = "CLEAR",
    SHIT_HAPPENS = "SHIT_HAPPENS"
}

export interface calculatorState {
    input: string,
    output: number | string,
    error: null | string
}

export interface ActionState {
    type: actionTypes,
    payload: calculatorState
}