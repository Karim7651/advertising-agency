import React from 'react';
import Nav from '../partial/Nav';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Card from '../partial/Card'; 
import Header from'../partial/Header'
import './Home.css'
function Home() {
  const cardsData = [
    {
      image: 'https://media.istockphoto.com/id/1452604857/photo/businessman-touching-the-brain-working-of-artificial-intelligence-automation-predictive.jpg?s=2048x2048&w=is&k=20&c=-dkoxqirWcLDhkIjVgkLfRXdNHqCJdPKswM7tkjTcN0=',
      title: 'Card Title 1',
      text: 'Some quick example text for card 1',
      facebook:'https://www.facebook.com/PepsiArabia/posts/364387603137616:364387603137616',
      instagram:'https://www.instagram.com/p/C4qd6TqL8lu/'
    },
    {
      image: 'https://media.istockphoto.com/id/1452604857/photo/businessman-touching-the-brain-working-of-artificial-intelligence-automation-predictive.jpg?s=2048x2048&w=is&k=20&c=-dkoxqirWcLDhkIjVgkLfRXdNHqCJdPKswM7tkjTcN0=',
      imageDesc: 'Card Image 1',
      title: 'Card Title 1',
      text: 'Some quick example text for card 1',
      facebook:'https://www.facebook.com/PepsiArabia/posts/364387603137616:364387603137616',
      instagram:'https://www.instagram.com/p/C4qd6TqL8lu/'
    },
    {
      image: 'https://images.ctfassets.net/hrltx12pl8hq/2tGpIfjc16t14wJf4BG2Nr/66423e8cb5679d1c54d04781cf3da98a/3d-render-image-01.jpg?fit=fill&w=640&h=427&fm=webp',
      imageDesc: 'Card Image 1',
      title: 'Card Title 1',
      text: 'Some quick example text for card 1',
      facebook:'https://www.facebook.com/PepsiArabia/posts/364387603137616:364387603137616',
      instagram:'https://www.instagram.com/p/C4qd6TqL8lu/'
    },
    {
      image: 'https://media.istockphoto.com/id/1452604857/photo/businessman-touching-the-brain-working-of-artificial-intelligence-automation-predictive.jpg?s=2048x2048&w=is&k=20&c=-dkoxqirWcLDhkIjVgkLfRXdNHqCJdPKswM7tkjTcN0=',
      imageDesc: 'Card Image 1',
      title: 'Card Title 1',
      text: 'Some quick example text for card 1',
      facebook:'https://www.facebook.com/PepsiArabia/posts/364387603137616:364387603137616',
      instagram:'https://www.instagram.com/p/C4qd6TqL8lu/'
    }
  ];

  return (
    <>
      <Nav />
      <Header/>
      <div className="container">
        <div className="row">
          {cardsData.map((card, index) => (
            <div className="col-md-6 col-sm-12 my-5" key={index}>
              <Card image={card.image} imageDesc={card.imageDesc} title={card.title} text={card.text} facebook={card.facebook} instagram={card.instagram} />
          </div>
        ))}
      </div>
      </div>
    </>
  );
}

export default Home;