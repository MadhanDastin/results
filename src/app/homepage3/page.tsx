"use client";
import React, { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';

const HomeScreen = () => {
    const carouselItems = [
        {
            image: '/images/pngexam.png',
            name: '1',
        },
        {
            image: '/images/img2.png',
            name: '2',
        },
        {
            image: '/images/leaders.png',
            name: '3',
        },
    ];

    return (
        <>
            {/* Header */}
            <header className="header mb-2">
                {/* <h1>Header Section</h1> */}
                <div className="header">
                    <div className="header-content">
                        <div className='row'>
                            <div className='col-md-4 text-start px-0'>
                                <img src="/images/flag.png" alt="Logo" className="flaglogo" />
                            </div>
                            <div className='col-md-8 pe-3'>
                                <p className="title mt-1 text-end fw-bold mb-0">National Examination Results - 2024</p>
                                <p className="subtitle fw-bold text-end">Department of Education</p>
                            </div>
                        </div>
                        {/* <img src="/images/flag.png" alt="Logo" className="flaglogo" />
                        <div className="text-container text-center">
                            <p className="title mt-5">Department of Education</p>
                            <p className="subtitle">National Examination Results - 2024</p>
                        </div> */}
                    </div>
                </div>
            </header>

            {/* Carousel */}
            <div className='row'>
                {/* <div className='col-md-8 offset-md-2'> */}

                    <div className="carousel-container w-100">
                        <Carousel interval={7000} controls={false} indicators={true}>
                            {carouselItems.map((item, index) => (
                                <Carousel.Item key={index}>
                                    <img className="d-block carousel-image" src={item.image} alt={`Slide ${index}`} />
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    </div>
                {/* </div> */}
            </div>

            {/* Content Section */}
            <div className="row m-2">
                <p className="col-md-10 offset-md-1">
                    Our government's vision is to modernize and provide quality education for all that is globally comparable through strategic reforms. The National Department of Education (NDoE) is glad to continue to provide Grade 10 and Grade 12 Student's National Examination Results for 2024. Every student and parent can go online now to access their examination results in real time.
                </p>

                {/* Buttons Section */}
                <div className='col-md-12'>
                    <div className="row">
                        <div className='col-md-4 text-center'>
                            <button className="btn btn-warning mx-3">Grade 10 Results</button>
                        </div>
                        <div className='col-md-4 text-center'>
                            <button className="btn btn-warning mx-3">Grade 12 Results</button>
                        </div>
                        <div className='col-md-4 text-center'>
                            <button className="btn btn-warning mx-3">STEM Results</button>
                        </div>
                    </div>
                </div>

                {/* Bottom Section with Logo and Text */}
                <div className="row mt-5 pl-2">
                    <div className='col-md-6 text-end px-0'>
                        <img className="logo" src="/images/img5.png" alt="Logo" />
                    </div>
                    <div className='col-md-6 text-start px-0'>
                        <p className="ministry-text mb-0">Ministry of Education</p>
                        <p className="country-text mt-0">Papua New Guinea</p>
                    </div>
                </div>
            </div>

            {/* CSS */}
            <style jsx>{`
      .header {
          width: 100%;
          height: 100px;
          background: linear-gradient(#fee05c, #febc5b);
        }

        .bg-gradient {
          background: linear-gradient(#fee05c, #febc5b);
        }

        .header-content {
         
        }

        .flaglogo {
          width: 150px;
          height: 150px;
          margin-top: -20px;
          object-fit: cover;
        }

        .text-container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .title {
          font-size: 36px;
          color: #992202;
        }

        .subtitle {
          font-size: 16px;
          color: #000;
          text-align: center;
          margin-top: 5px;
          font-weight: 300;
        }
        .carousel-container {
                height: 300px;
          margin-bottom: 20px;
          object-fit: cover;
        }
        .carousel-image {
                height: 300px;
                width: 100%;
        }
        
        .paragraph {
          font-size: 14px;
          color: #3c3c3c;
          text-align: justify;
          line-height: 1.5;
        }
       
        .btn {
          padding: 10px 20px;
          font-size: 14px;
          font-weight: bold;
        }
        .bottom-section {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 50px;
        }
        .logo {
          width: 50px;
          height: 50px;
          margin-right: 10px;
        }
        
        .ministry-text {
          font-size: 16px;
          font-weight: bold;
          color: #2d5da9;
        }
        .country-text {
          font-size: 14px;
          color: #333;
        }
      `}</style>
        </>
    );
};

export default HomeScreen;
