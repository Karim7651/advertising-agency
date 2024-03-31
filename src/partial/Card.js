import React from 'react';
import './Card.css'
import {useTheme,useThemeUpdate} from '../ThemeContext'
function Card (props) {
    const darkTheme = useTheme()
    return (
        <div className={`card col-lg-4 col-sm-12 m-auto w-100 shadow  ${darkTheme ? 'text-bg-dark': 'text-bg-light'}`} >
            <img src={props.image} className="card-img-top" alt={props.imageDesc}/>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.text}</p>
                <div className="row justify-content center">
                    <hr class="h-card"/>
                </div>
                <div className="social-icons">
                    <a href={props.instagram} target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-instagram " style={{ fontSize: '2rem' , color: ' #e91640' ,marginRight:'10px'  }}></i>
                    </a>

                    <a href={props.facebook} target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-facebook " style={{ fontSize: '2rem', color:'blue'}}></i>
                    </a>
                    <a href={props.x} target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-twitter-x " style={{ marginLeft: "10px",fontSize: '2rem', color:'black'}}></i>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Card;