import React from 'react'
import { Box, IconButton } from '@material-ui/core'
import { Backspace } from '@material-ui/icons'
import { useDispatch } from 'react-redux'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { updateState } from 'functions/updateState'


export const Display:React.FC = () => {
    const {input, output, error} = useTypedSelector(state => state.calculator)
    const dispatch = useDispatch()
    return(
        <Box className="display" height="120px" bgcolor="#fff" textAlign="center" p={1} display="flex" alignItems="flex-end" justifyContent="flex-end" flexDirection="column" position="relative">
            <Box position="absolute" top="5px">
                <IconButton size="small" onClick={() => updateState('BACKSPACE', dispatch, {input, output, error})}>
                    <Backspace style={{fontSize: '20px'}}/>
                </IconButton>
            </Box>
            
            <input className="inputField" value={error ? error:input}/>
            <p className="outputField">{output ? output : 0}</p>
        </Box>
    )
}