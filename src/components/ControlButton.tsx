import React from 'react'
import { useDispatch } from 'react-redux'
import { useTypedSelector } from 'hooks/useTypedSelector';
import { Grid, Button, GridSize } from '@material-ui/core'
import { updateState } from '../functions/updateState'

interface Props {
    value: string,
    widthCol?: GridSize
}

export const ControlButton:React.FC<Props> = ({value, widthCol = 4}) => {
    const dispatch = useDispatch()
    const calcState = useTypedSelector(state => state.calculator)
    return(
        <Grid container item xs={widthCol} justify="center">
            <Button fullWidth={true} classes={{root:'button-dark'}} onClick={() => updateState(value, dispatch, calcState)}>{value}</Button>
        </Grid>
    )
}