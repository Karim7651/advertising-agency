import React from 'react'
import './HomeMainText.css'
import {useTheme} from '../ThemeContext';
export default function HomeMainText(){
    const darkTheme = useTheme();
    return(
        <div>
            <hr className={ `${darkTheme?'rounded':'roundedLight'}`}/>
            <div className= {`${darkTheme ? 'HomeMainText' :'HomeMainTextLight'}`}>
                <h1 >Available to businesses of all sizes</h1>
                <h5>And accessible to marketers of every level of expertise. BrandName Ads provides ad solutions that help your business connect with customers at every stage of their journey.</h5>
            </div>
            
        </div>
    )
}