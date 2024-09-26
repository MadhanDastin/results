"use client";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import Image from 'next/image'; // Import the Image component

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
                <div className="header-content">
                    <div className='row align-items-center'>
                        <div className='col-12 col-md-2 text-center text-md-start'>
                            {/* Using Next.js Image component */}
                            <Image src="/images/pngflagv1.png" alt="Logo" width={80} height={80} className="flaglogo" />
                        </div>
                        <div className='col-12 col-md-7 mt-2 text-center'>
                        
                            <p className="title title-color fw-bold mb-0">National Examination Results - 2024</p>
                        </div>
                        <div className='col-12 col-md-3 mt-2 text-center text-md-end'>
                            <div className="row align-items-center justify-content-center">
                                <div className='col-4 text-end'>
                                    {/* Using Next.js Image component */}
                                    <Image src="/images/img5.png" alt="Logo" width={70} height={70} className="logo" />
                                </div>
                                <div className='col-8 text-start'>
                                    <p className="ministry-text mb-0 title-color">Ministry of Education</p>
                                    <p className="country-text title-color">Papua New Guinea</p>
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
                                {/* Using Next.js Image component */}
                                <Image className="d-block carousel-image" src={item.image} alt={`Slide ${index}`} width="0"
                                    height="0"
                                    sizes="100vw"
                                    style={{ width: '100%', height: '250px' }} />
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
                        <div className='col-12 col-md-4 text-center'>
                            <button className="btn bg-gradient title-color w-100">Grade 10 Results</button>
                            <p className='declaration fw-bold mt-2 color-red'>*Declared at: 11 AM, 8th December, 2024</p>
                        </div>
                        <div className='col-12 col-md-4 text-center'>
                            <button className="btn bg-gradient title-color w-100">Grade 12 Results</button>
                            <p className='declaration fw-bold mt-2 color-red'>*Declared at: 11 AM, 8th December, 2024</p>
                        </div>
                        <div className='col-12 col-md-4 text-center'>
                            <button className="btn bg-gradient title-color w-100">STEM Results</button>
                            <p className='declaration fw-bold mt-2 color-red'>*Declared at: 11 AM, 8th December, 2024</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* CSS */}
            <style jsx>{`
            .declaration {
                font-size: 0.675rem !important;
            }
            .color-red {
                color: #00355b;
            }
            .header {
                width: 100%;
                height: 75px;
                background: #00355b;
                padding: 10px 0;
            }
            .header-content {
                padding: 10px;
            }
            .bg-gradient {
                background: #00355b;
            }
            .flaglogo {
                object-fit: cover;
                border-radius: 50px;
                background-color: white;
                width: 2.50rem;
                height: 2.50rem;
            }
            .title {
                font-size: 24px;
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
            .btn {
                padding: 10px 20px;
                font-size: 14px;
                font-weight: bold;
            }
            .logo {
                width: 50px;
                height: 50px;
                margin-right: 10px;
            }
            .ministry-text {
                font-size: 16px;
                font-weight: bold;
                color: white;
            }
            .country-text {
                font-size: 14px;
                color: white;
            }
            `}</style>
        </>
    );
};

export default HomeScreen;
