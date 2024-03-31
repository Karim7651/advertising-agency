import React from 'react';
import Nav from '../partial/Nav';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Card from '../partial/Card'; 
import Header from'../partial/Header'
import Footer from'../partial/Footer'
import {useTheme,useThemeUpdate} from '../ThemeContext'
import background from '../assets/blank-black-plain-pattern-gray.jpg'

function Home() {
  const darkTheme = useTheme()
  const cardsData = [
    {
      image: 'https://media.istockphoto.com/id/1452604857/photo/businessman-touching-the-brain-working-of-artificial-intelligence-automation-predictive.jpg?s=2048x2048&w=is&k=20&c=-dkoxqirWcLDhkIjVgkLfRXdNHqCJdPKswM7tkjTcN0=',
      title: 'Card Title 1',
      text: 'Some quick example text for card 1',
      facebook:'https://www.facebook.com/PepsiArabia/posts/364387603137616:364387603137616',
      instagram:'https://www.instagram.com/p/C4qd6TqL8lu/',
      x:"https://twitter.com/elonmusk/status/1771622119715000357"
    },
    {
      image: 'https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_1280.jpg',
      imageDesc: 'Card Image 1',
      title: 'Card Title 1',
      text: 'Some quick example text for card 1',
      facebook:'https://www.facebook.com/PepsiArabia/posts/364387603137616:364387603137616',
      instagram:'https://www.instagram.com/p/C4qd6TqL8lu/',
      x:"https://twitter.com/elonmusk/status/1771622119715000357"
    },
    {
      image: 'https://images.ctfassets.net/hrltx12pl8hq/2tGpIfjc16t14wJf4BG2Nr/66423e8cb5679d1c54d04781cf3da98a/3d-render-image-01.jpg?fit=fill&w=640&h=427&fm=webp',
      imageDesc: 'Card Image 1',
      title: 'Card Title 1',
      text: 'Some quick example text for card 1',
      facebook:'https://www.facebook.com/PepsiArabia/posts/364387603137616:364387603137616',
      instagram:'https://www.instagram.com/p/C4qd6TqL8lu/',
      x:"https://twitter.com/elonmusk/status/1771622119715000357"
    },
    {
      image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736881_640.jpg',
      imageDesc: 'Card Image 1',
      title: 'Card Title 1',
      text: 'Some quick example text for card 1',
      facebook:'https://www.facebook.com/PepsiArabia/posts/364387603137616:364387603137616',
      instagram:'https://www.instagram.com/p/C4qd6TqL8lu/',
      x:"https://twitter.com/elonmusk/status/1771622119715000357"
    }
  ];

  return (
    <>
      <Nav />
      <Header/>
      <div style={{backgroundColor : darkTheme? "#051622" : "#ffffff" , backgroundImage : darkTheme ? `url(${background})` :  "url('light-theme-background-image-url')"  , backgroundAttachment:"fixed" , backgroundSize :"contain"  ,backgroundRepeat:"repeat-x"}}>
      <div className="container py-5 " >
        <div className="row">
          {cardsData.map((card, index) => (
            <div className="col-md-6 col-sm-12 my-5 mx-au to" key={index}>
              <Card image={card.image} imageDesc={card.imageDesc} title={card.title} text={card.text} facebook={card.facebook} instagram={card.instagram} x={card.x}/>
          </div>
        ))}
      </div>
      </div>
      </div>
      <Footer/>
    </>
  );
}

export default Home;