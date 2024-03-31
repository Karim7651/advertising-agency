import React from 'react'
import BootstrapSwitchButton from 'bootstrap-switch-button-react'
import {useTheme,useThemeUpdate} from '../ThemeContext'
export default function ThemeButton(props){
    const darkTheme = useTheme
    return(
        <BootstrapSwitchButton checked={useTheme} size="xs" onstyle="light" offstyle="dark" style="border" onChange={props.switch}/>

    )
}