"use client";
import React, { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import Image from 'next/image'; // Import Next.js Image component

const HomeScreen = () => {
    const carouselItems = [
        {
            image: '/images/pnglogov4.png',
            name: '1',
        },
        {
            image: '/images/img2.png',
            name: '2',
        },
        {
            image: '/images/james.png',
            name: '3',
        },
        {
            image: '/images/kombra.png',
            name: '4',
        },
        {
            image: '/images/uguro.png',
            name: '5',
        },
    ];

    return (
        <>
            {/* Header */}
            <header className="header mb-2">
                <div className="header">
                    <div className="header-content">
                        <div className='row d-flex d-block d-sm-none'>
                            <div className='col-xs-12 p-2 ms-3'>
                                <Image src="/images/pngfllag.jpg" alt="Logo" className="flaglogo-xs" width={80} height={80} />
                                <p className="mt-1 text-center d-inline-block fw-bold mb-0 align-middle ps-2">
                                    <span className='fs-4 title-color'>Department of Education</span><br />
                                    <span className='subtitle-xs title-color'>National Examination Results - 2024</span>
                                </p>
                            </div>
                        </div>
                        <div className='d-none d-sm-block d-md-none'>
                            <div className='row'>
                                <div className='col-sm-1'>
                                    <Image src="/images/pngfllag.jpg" alt="Logo" className="flaglogo" width={70} height={70} />
                                </div>
                                <div className='col-sm-11'>
                                    <p className="fs-2 title-color mt-1 text-center fw-bold mb-0">Department of Education</p>
                                    <p className="fs-6 title-color mt-1 text-center fw-bold mb-0">National Examination Results - 2024</p>
                                </div>
                            </div>
                        </div>
                        <div className='row d-none d-md-block d-flex'>
                            <div className='col-md-2 col-sm-2 col-lg-2 text-start px-0 ps-3 d-inline'>
                                <Image src="/images/pngfllag.jpg" alt="Logo" className="flaglogo" width={70} height={70} />
                            </div>
                            <div className='col-md-7 col-sm-7 col-lg-7 mt-3 d-inline-block text-end ps-5 ms-5'>
                                <p className="title title-color mt-1 text-center fw-bold mb-0 d-inline">National Examination Results - 2024</p>
                            </div>
                            <div className='col-md-3 col-sm-3 col-lg-3 mt-2 d-inline-block float-end'>
                                <div className="row mt-2 pl-2 align-self-center">
                                    <div className='col-md-4 text-end px-0'>
                                        <Image className="logo" src="/images/img5.png" alt="Logo" width={50} height={50} />
                                    </div>
                                    <div className='col-md-8 text-start px-0 d-inline'>
                                        <p className="ministry-text mb-0 title-color">Ministry of Education</p>
                                        <p className="country-text mt-0 title-color">Papua New Guinea</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Carousel */}
            <div className='row'>
                <div className="carousel-container w-100">
                    <Carousel interval={5000} controls={false} indicators={true}>
                        {carouselItems.map((item, index) => (
                            <Carousel.Item key={index}>
                                <Image className="d-block carousel-image" src={item.image} alt={`Slide ${index}`} width={1200} height={250} />
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </div>
            </div>

            {/* Content Section */}
            <div className="row m-2">
                <p className="col-md-10 offset-md-1 mb-4">
                    Our government&apos;s vision is to modernize and provide quality education for all that is globally comparable through strategic reforms. The National Department of Education (NDoE) is glad to continue to provide <span className='fw-bold color-red'>Grade 10 and Grade 12 Student&apos;s National Examination Results for 2024.</span> Every student and parent can go online now to access their examination results in real time.
                </p>

                {/* Buttons Section */}
                <div className='col-md-12'>
                    <div className="row">
                        <div className='offset-md-2 col-md-3 text-center'>
                            <button className="btn bg-gradient mx-3 title-color">Grade 10 Results</button>
                            <p className='declaration fw-bold mt-2 color-red'>*Declared at: 11 AM, 8th December, 2024</p>
                        </div>
                        <div className='col-md-3 text-center'>
                            <button className="btn bg-gradient mx-3 title-color">Grade 12 Results</button>
                            <p className='declaration fw-bold mt-2 color-red'>*Declared at: 11 AM, 8th December, 2024</p>
                        </div>
                        <div className='col-md-3 text-center'>
                            <button className="btn bg-gradient mx-3 title-color">STEM Results</button>
                            <p className='declaration fw-bold mt-2 color-red'>*Declared at: 11 AM, 8th December, 2024</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='row d-flex d-block d-sm-none'>
                <div className='col-xs-12 text-center'>
                    <Image className="logo-xs mt-2" src="/images/img5.png" alt="Logo" width={60} height={60} />
                    <p className="mb-0 d-inline-block mt-1 fw-bold align-middle">
                        <span className='ministry-text-xs subtitle-xs footer-text-color'>Ministry of Education</span><br />
                        <span className='country-text-xs fs-7 footer-text-color'>Papua New Guinea</span>
                    </p>
                </div>
            </div>
            <div className='row d-flex d-none d-sm-block d-md-none'>
                <div className='col-sm-12 text-center'>
                    <Image className="logo-xs mt-2" src="/images/img5.png" alt="Logo" width={60} height={60} />
                    <p className="mb-0 d-inline-block mt-1 fw-bold align-middle">
                        <span className='ministry-text-xs subtitle-xs footer-text-color'>Ministry of Education</span><br />
                        <span className='country-text-xs fs-7 footer-text-color'>Papua New Guinea</span>
                    </p>
                </div>
            </div>

            {/* CSS */}
            <style jsx>{`
                .fs-7 {
                    font-size: 0.675rem;
                }
                .subtitle-xs {
                    font-size: 0.875rem;
                }
                
                .declaration{
                    font-size: 0.675rem !important;
                    
                }
                .color-blue {
                    color: #00355b;
                }
                .header {
                    width: 100%;
                    background: #00355b;
                }

                .bg-gradient {
                    background: #00355b;
                    width: 170px;
                }

                .header-content {}

                .flaglogo {
                    width: 70px;
                    height: 70px;
                    object-fit: cover;
                    border-radius: 50px;
                    background-color:white;
                }

                .flaglogo-xs {
                    width: 80px;
                    height: 80px;
                    object-fit: cover;
                    border-radius: 50px;
                    background-color:white;
                }

                .footer-text-color {
                    color: #00355b;
                }

                .text-container {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }

                .title {
                    font-size: 36px;
                }

                .title-color {
                    color: white;
                }

                .carousel-container {
                    height: 250px;
                    margin-bottom: 20px;
                    object-fit: cover;
                }
                .carousel-image {
                    height: 250px;
                    width: 100%;
                }

                .paragraph {
                    font-size: 14px;
                    color: #3c3c3c;
                    text-align: justify;
                    line-height: 1.5;
                }
            
                .btn {
                    padding: 10px 15px;
                    color: #ffffff !important;
                }

                .btn:hover {
                    background-color: #ffffff !important;
                    border: 2px solid #00355b !important;
                    color: #00355b !important;
                }

                @media (max-width: 576px) {
                    .header {
                        height: 150px;
                    }

                    .header-content p {
                        font-size: 12px;
                    }
                }
            `}</style>
        </>
    );
};

export default HomeScreen;
