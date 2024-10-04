"use client";

import React, { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const HomeScreen = () => {
    
    const router = useRouter();

  const handleGrade12ResultsClick = () => {
    router.push("/login");
  };
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
            image: '/images/President Image - WEB - 1200 X 400.jpg',
            name: '3',
        },
        {
            image: '/images/Minister of Education - WEB - 1200 X 400.jpg',
            name: '4',
        },
        {
            image: '/images/Secretary - WEB - 1200 X 400.jpg',
            name: '5',
        },
    ];

    return (
        <>
            {/* Header */}
            <header className="header mb-2">
                {/* <h1>Header Section</h1> */}
                <div className="header">
                    <div className="header-content">
                        <div className='row d-flex d-block d-sm-none'>
                            <div className='col-xs-12 p-2 ms-3'>
                                <Image src="/images/pngflagv1.png" alt="Logo" width={80} height={80} className="flaglogo" />

                                <p className="mt-1 text-center d-inline-block fw-bold mb-0 align-middle ps-2">
                                    <span className='fs-4 title-color'>Department of Education</span><br />
                                    <span className='subtitle-xs title-color'>National Examination Results - 2024</span>
                                </p>
                            </div>
                        </div>
                        <div className='d-none d-sm-block d-md-none'>
                            <div className='row'>
                                <div className='col-sm-1'>
                                    <Image src="/images/pngflagv1.png" alt="Logo" width={80} height={80} className="flaglogo" />

                                </div>
                                <div className='col-sm-11'>
                                    <p className="fs-2 title-color mt-1 text-center fw-bold mb-0">Department of Education</p>
                                    <p className="fs-6 title-color mt-1 text-center fw-bold mb-0">National Examination Results - 2024</p>
                                </div>
                            </div>
                        </div>
                        <div className='row d-none d-md-block d-lg-none d-flex'>
                            <div className='col-md-2 text-start px-0 ps-3 d-inline'>
                                <Image src="/images/pngflagv1.png" alt="Logo" width={80} height={80} className="flaglogo mb-2" />

                            </div>
                            <div className='col-md-10 mt-3 d-inline-block text-center ms-3'>

                                <p className="title title-color mt-1 fw-bold mb-0 d-inline">National Examination Results - 2024</p>
                            </div>

                        </div>
                        <div className='row d-none d-lg-block d-xl-block d-flex'>
                            <div className='col-lg-2 col-xl-2 text-start px-0 ps-3 d-inline'>
                                <Image src="/images/pngflagv1.png" alt="Logo" width={80} height={80} className="flaglogo mb-2" />

                            </div>
                            <div className='col-lg-7 col-xl-7 mt-3 d-inline-block text-end ps-5 ms-5'>

                                <p className="title title-color mt-1 text-center fw-bold mb-0 d-inline">National Examination Results - 2024</p>
                            </div>
                            <div className='col-lg-3 col-xl-3 mt-2 d-inline-block float-end'>
                                <div className="row mt-2 pl-2 align-self-center">
                                    <div className='col-lg-4 col-xl-4 text-end px-0'>
                                        <Image src="/images/img5.png" alt="Logo" width={70} height={70} className="logo" />

                                    </div>
                                    <div className='col-lg-8 col-xl-8 text-start px-0 d-inline mt-3'>
                                        <p className="ministry-text mb-0 title-color lh-1">Ministry of Education</p>
                                        <p className="country-text mt-0 title-color">Papua New Guinea</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </header >

            {/* Carousel */}
            < div className='row' >


                < div className="carousel-container w-100" >
                    <Carousel interval={5000} controls={false} indicators={true}>
                        {carouselItems.map((item, index) => (
                            <Carousel.Item key={index}>
                                <Image className="d-block carousel-image" src={item.image} alt={`Slide ${index}`} width="0"
                                    height="0"
                                    sizes="100vw"
                                    style={{ width: '100%', height: '400px' }} />

                            </Carousel.Item>
                        ))}
                    </Carousel>
                </div >
                {/* </div> */}
            </div >

            {/* Content Section */}
            < div className="row m-2" >
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
                            <button className="btn bg-gradient mx-3 title-color" onClick={handleGrade12ResultsClick}>Grade 12 Results</button>
                            <p className='declaration fw-bold mt-2 color-red'>*Declared at: 11 AM, 8th December, 2024</p>
                        </div>
                        <div className='col-md-3 text-center'>
                            <button className="btn bg-gradient mx-3 title-color">STEM Results</button>
                            <p className='declaration fw-bold mt-2 color-red'>*Declared at: 11 AM, 8th December, 2024</p>
                        </div>
                    </div>
                </div>
            </div >
            <div className='row d-flex d-block d-sm-none'>
                <div className='col-xs-12 text-center'>
                    <Image src="/images/img5.png" alt="Logo" width={60} height={60} className="logo-xs" />

                    <p className="mb-0 d-inline-block mt-1 fw-bold align-middle">
                        <span className='ministry-text-xs subtitle-xs footer-text-color'>Ministry of Education</span><br />
                        <span className='country-text-xs fs-7 footer-text-color'>Papua New Guinea</span>
                    </p>
                </div>
            </div>
            <div className='row d-flex d-none d-sm-block d-md-block d-lg-none'>
                <div className='col-sm-12 text-center'>
                    <Image src="/images/img5.png" alt="Logo" width={60} height={60} className="logo-xs" />

                    <p className="mb-0 d-inline-block mt-1 fw-bold align-middle">
                        <span className='ministry-text-xs subtitle-xs footer-text-color'>Ministry of Education</span><br />
                        <span className='country-text-xs fs-7 footer-text-color'>Papua New Guinea</span>
                    </p>
                </div>
            </div>

            {/* CSS */}
            <style jsx>{`
            @font-face {
  font-family: 'MyFont';
  src: url('/fonts/Holiday_Trip_Free.ttf') format('ttf');
  font-weight: bold;
  font-style: normal;
}
 
.subtitle-xs {
  font-family: 'MyFont';
}
            body {
                overflow: hidden;
            }
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
        //   height: 85px;
          background:#00355b;
        //    linear-gradient(#fee05c, #febc5b);
        }

        .bg-gradient {
          background: #00355b;
          width: 170px;
        //   linear-gradient(#fee05c, #febc5b) !important;
        }

        .header-content {
         
        }

        .flaglogo {
          width: 80px;
          height: 80px;
        //   margin-top: 1px;
          object-fit: cover;
        //   border-radius: 50px;
        //   background-color:white;
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

        .subtitle {
          font-size: 16px;
          color: #000;
          text-align: center;
          margin-top: 5px;
          font-weight: 300;
        }
        .carousel-container {
                height: 400px;
          margin-bottom: 20px;
          object-fit: cover;
        
          
        }
        .carousel-image {
                height: 400px;
                width: 100%;
                // object-fit: cover;
                margin:0 auto;
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

        .logo-xs {
            width: 60px;
            height: 60px;
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
