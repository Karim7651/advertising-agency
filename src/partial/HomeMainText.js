import React from 'react'
import './HomeMainText.css'
import {useTheme} from '../ThemeContext';
export default function HomeMainText(props){
    const darkTheme = useTheme();
    return(
        <div>
            <hr className={ `${darkTheme?'rounded':'roundedLight'}`}/>
            <div className= {`${darkTheme ? 'HomeMainText' :'HomeMainTextLight'}`}>
                <h1>{props.main}</h1>
                <h5>{props.sec}</h5>
            </div>
            
        </div>
    )
}