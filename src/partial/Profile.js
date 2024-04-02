import React from "react";
import './Profile.css'
import { useTheme } from "../ThemeContext";
function Profile(props) {
    const darkTheme = useTheme()
    return ( 
        <div className={`profileCardContainer shadow  ${darkTheme? 'profileCardContainer':'profileCardContainerLight'}`}>
            <img src={props.image} className="profileImage" alt="staff name"/>
            <hr className={`${darkTheme?'profilehr':'profilehrLight'}`}/>
            <div className={`${darkTheme?'profileCardInfo':'profileCardInfoLight'}`}>
                <h2>{props.name}</h2>
                <p>{props.desc}</p>
            </div>

        </div>
     );
}

export default Profile;