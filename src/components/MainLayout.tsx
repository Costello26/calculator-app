import React from 'react'
import { ControlBoard } from './ControlBoard'
import { Display } from './Display'
import { Box } from '@material-ui/core'

export const MainLayout: React.FC = () => {
    return(
        <Box className="componentOuter" position="fixed" width="100%" height="100%" display="flex" justifyContent="center" alignItems="center" bgcolor="info.main">
            <Box className="componentInner" bgcolor="#444" minWidth="150px" maxWidth="300px">
                <Display/>
                <ControlBoard/>
            </Box>
        </Box>     
    )
}