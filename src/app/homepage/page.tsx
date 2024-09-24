
"use client";

// pages/index.js
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = ['/images/Leaders-03.png','/images/mp.jpg', '/images/mp1.jpg'];
  const totalSlides = slides.length;

  // Handle slide change
  const showSlide = (index:any) => {
    const offset = -index * 100;
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
  };

  useEffect(() => {
    showSlide(currentIndex);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % totalSlides);
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + totalSlides) % totalSlides);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % totalSlides);
    }, 5000); // Auto-slide every 5 seconds

    return () => clearInterval(interval); // Cleanup the interval
  }, [currentIndex]);

  return (
    <>
      <header className="d-flex justify-content-between align-items-center p-3">
        <div className="header-left d-flex align-items-center">
          <img src="/images/download.png" alt="Logo" className="logo me-3" />
          <h2>DEPARTMENT OF EDUCATION</h2>
        </div>

        <div className="header-right">
          <button className="btn btn-primary me-2">Results</button>
          <button className="btn btn-primary me-2">About</button>
          <button className="btn btn-primary me-2">News</button>
          <button className="btn btn-primary">Help</button>
        </div>
      </header>

      {/* Carousel */}
      <div className="carousel position-relative overflow-hidden" style={{ height: '300px' }}>
        <div className="carousel-images d-flex" style={{ transition: 'transform 0.5s ease-in-out' }}>
          {slides.map((slide, index) => (
            <div className="carousel-slide" key={index} style={{ flex: '0 0 100%' }}>
              <img src={slide} alt={`Slide ${index + 1}`} className="w-100 h-100" />
            </div>
          ))}
        </div>
        <button className="carousel-control prev position-absolute" style={{ top: '50%', left: '10px' }} onClick={handlePrev}>
          ❮
        </button>
        <button className="carousel-control next position-absolute" style={{ top: '50%', right: '10px' }} onClick={handleNext}>
          ❯
        </button>
      </div>

      {/* Results Section */}
      <section className="results text-center p-4">
        <h2>NATIONAL EXAMINATION RESULTS - 2024.</h2>
        <p>Our government's vision is to modernise and provide quality education for all that is globally comparable
          through strategic reforms. The National Department of Education (NDoE) is glad to continue to provide Grade 10, Grade 12 Student's National Examinations Results for 2023.
        </p>
        <div className="row">
          <div className="col-md-4">
            <div className="card p-3 mb-3">
              <h3>Grade 10</h3>
              <button className="btn btn-primary">View Result</button>
              <p>Declared at: 11 AM, 08th December 2023.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card p-3 mb-3">
              <h3>Grade 12</h3>
              <button className="btn btn-primary">View Result</button>
              <p>Declared at: 11 AM, 08th December 2023.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card p-3 mb-3">
              <h3>STEM</h3>
              <button className="btn btn-primary">View Result</button>
              <p>Declared at: 11 AM, 08th December 2023.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Styled JSX for CSS */}


      <style jsx>{`
        .logo {
          width: 50px;
          height: auto;
        }

        .carousel {
          height: 600px;
          width:auto;
        }

        .carousel-images img {
          height:auto;
          width:auto;
        //   object-fit:cover;
        }

        .carousel-control {
          font-size: 2rem;
          color: black;
          cursor: pointer;
        }
        
        .results {
          background-color: #f7f7f7;
        }

        .card {
          border: 1px solid #ccc;
        }

        .card h3 {
          margin-bottom: 1rem;
        }

        .card-button {
          margin-top: 1rem;
        }
      `}</style>
    </>
  );
};

export default Home;


                                 