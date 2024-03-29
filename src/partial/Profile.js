import React from "react";
import './Profile.css'
function Profile(props) {
    return ( 
        <div className="profileCardContainer shadow border border-dark">
            <img src={props.image} className="profileImage" alt="staff name"/>
            <hr class="profilehr"/>
            <div className="profileCardInfo">
                <h2>{props.name}</h2>
                <p>{props.desc}</p>
            </div>

        </div>
     );
}

export default Profile;