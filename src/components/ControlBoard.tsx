import React from 'react'
import { Grid } from '@material-ui/core'
import { ControlButton} from './ControlButton'

export const ControlBoard:React.FC = () => {
    return(
        <Grid className="controlBoard" container>
            <Grid container className="nums" xs={9}>
                <ControlButton value="7"/>
                <ControlButton value="8"/>
                <ControlButton value="9"/>

                <ControlButton value="4"/>
                <ControlButton value="5"/>
                <ControlButton value="6"/>

                <ControlButton value="1"/>
                <ControlButton value="2"/>
                <ControlButton value="3"/>

                <ControlButton value="."/>
                <ControlButton value="0"/>
                <ControlButton value="="/>
            </Grid>   
            <Grid container className="operators" xs={3}>
                <ControlButton value="DEL" widthCol={12}/>
                <ControlButton value="/" widthCol={12}/>
                <ControlButton value="*" widthCol={12}/>
                <ControlButton value="-" widthCol={12}/>
                <ControlButton value="+" widthCol={12}/>
            </Grid>
        </Grid>
    )
}