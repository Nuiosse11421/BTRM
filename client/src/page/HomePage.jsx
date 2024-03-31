import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import '../components/css/HomePage.css'; // Import your CSS file

const HomePage = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [currentLink, setCurrentLink] = useState('');

  const handlePrev = () => {
    setActiveSlide((activeSlide - 1 + numSlides) % numSlides);
  };

  const handleNext = () => {
    setActiveSlide((activeSlide + 1) % numSlides);
  };

  const handleThumbnailClick = (index) => {
    setActiveSlide(index);
  };

  const slides = [
    {
      title: "Chart",
      description: "Description to Chart Page.",
      image: require("../images/chart.jpg"), // Use require for image paths
      link: "/chart"
    },
    {
      title: "Form",
      description: "Description to Form Page.",
      image: require("../images/form.jpg"),
      link: "/form"
    },
    {
      title: "History",
      description: "Description to History Page.",
      image: require("../images/history.jpg"),
      link: "/history"
    },
    {
      title: "Contact",
      description: "Description to Contact Page.",
      image: require("../images/contact.jpg"),
      link: "/contact"
    },
    {
      title: "Team",
      description: "Description to Team Page.",
      image: require("../images/team.jpg"),
      link: "/createform"
    },
    // Add other slides here
  ];

  const numSlides = slides.length;

  useEffect(() => {
    setCurrentLink(slides[activeSlide].link);
  }, [activeSlide]);

  return (
    <div>
      <NavBar />
      <div className="slider">
        <div className="list">
          {slides.map((slide, index) => (
            <div className={`item ${index === activeSlide ? "active" : ""}`} key={index}>
              <img src={slide.image} alt={slide.title} />
              <div className="content">
                <div className="title">{slide.title}</div>
                <div className="description">{slide.description}</div>
                <div className="button">
                  <Link to={currentLink}>
                    <button>{slide.title}</button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="thumbnail">
          {slides.map((slide, index) => (
            <div className="item" key={index} onClick={() => handleThumbnailClick(index)}>
              <img src={slide.image} alt={slide.title} />
            </div>
          ))}
        </div>
        <div className="nextPrevArrows">
          <button className="prev" onClick={handlePrev}> {'<'} </button>
          <button className="next" onClick={handleNext}> {'>'} </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
