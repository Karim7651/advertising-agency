import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from'../partial/Nav'
import Profile from '../partial/Profile'
function About() {
  const profileData = [
    { 
        image: "https://square-vn.com/app/dscms/assets/images/person-3.jpg?v=1653932875",
        name: "Karim Atef",
        desc: "Business owner Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut "
    },
    { 
        image: "https://square-vn.com/app/dscms/assets/images/person-2.jpg?v=1653932875",
        name: "Anna",
        desc: "Business co-owner Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut"
    },
    { 
        image: "https://square-vn.com/app/dscms/assets/images/person-1.jpg?v=1653932875",
        name: "Ahmed",
        desc: "full-stack web developer Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut"
    }
];
  return (
    <>
      <Nav/>
      <div className="container">
        <div className="row">
          {profileData.map((profile, index) => (
            <div className="col-md-6 col-sm-12 my-1" key={index}>
              <Profile image={profile.image} name={profile.name} desc={profile.desc}/>
          </div>
        ))}
      </div>
      </div>
    </>
  );
}

export default About;