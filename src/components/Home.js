import React, { useState, useEffect } from 'react';
import Nav from '../partial/Nav';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Card from '../partial/Card'; 
import Header from '../partial/Header';
import Footer from '../partial/Footer';
import { useTheme } from '../ThemeContext';
import background from '../assets/blank-black-plain-pattern-gray.jpg';
import HomeMainText from '../partial/HomeMainText';

function Home() {
  const darkTheme = useTheme();
  const [cardsData, setCardsData] = useState([]);

  useEffect(() => {
    // Fetch data from your API when the component mounts
    fetch('http://localhost:3001/main')
      .then(response => response.json())
      .then(data => {
        console.log("Fetched Data:", data); // Print the fetched data
        setCardsData(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <>
      <Nav />
      <Header/>
      <div style={{
        backgroundColor: darkTheme ? "#051622" : "#ffffff",
        backgroundImage: darkTheme ? `url(${background})` : "",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}>
        <div className="container py-5" >
          <HomeMainText main={"Available to businesses of all sizes"} sec={"And accessible to marketers of every level of expertise. BrandName Ads provides ad solutions that help your business connect with customers at every stage of their journey."} />

          <div className="row">
            {cardsData.map((card, index) => (
              <div className="col-md-6 col-sm-12 my-5 mx-auto" key={index}>
                <Card 
                  title={card.Title} 
                  image={`http://localhost:3001/uploads/${card.Image}`} 
                  text={card.Description} 
                  facebook={card.Facebook} 
                  instagram={card.Instagram} 
                  x={card.X} 
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
