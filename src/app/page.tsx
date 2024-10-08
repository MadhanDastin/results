"use client";

import React, { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Carousel } from 'react-bootstrap';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Footer from './footer/footer';
import { Carousel } from 'react-responsive-carousel';



const HomeScreen: React.FC = () => {

    const containerStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh', // Full height to ensure footer sticks to the bottom
    };

    const mainContentStyle: React.CSSProperties = {
        flex: 1, // This ensures the main content takes up remaining space
    };

    const router = useRouter();

    const handleGrade12ResultsClick = () => {
        router.push("/login");
    };
    const carouselItems = [
        {
            image: '/images/Home-carousel-Img-01.png',
            name: '1',
        },
        {
            image: '/images/Home-carousel-Img-02.png',
            name: '2',
        },
        {
            image: '/images/Home-carousel-Img-03.png',
            name: '3',
        },
        {
            image: '/images/Home-carousel-Img-04.png',
            name: '4',
        },
    ];

    const images = [
        { src: '/images/3 (1) 1.jpg', alt: 'classroom image 1' },
        { src: '/images/image 7.jpg', alt: 'classroom image 2' },
        { src: '/images/image 8.jpg', alt: 'classroom image 3' },
        { src: '/images/image 9.jpg', alt: 'classroom image 4' },
        { src: '/images/image 10.jpg', alt: 'classroom image 5' },
        { src: '/images/image 11.jpg', alt: 'classroom image 6' },
        { src: '/images/image 6.jpg', alt: 'classroom image 7' },
    ];

    return (
        <>
            {/* Header */}
            <div className="container-fluid p-0">
                <div className="row no-gutters">
                    <div className="col p-1 bg-color-blue">
                    </div>
                </div>
            </div>
            <header className="header">
                {/* <h1>Header Section</h1> */}
                <div className="header">
                    <div className="header-content">
                        <div className="row justify-content-center header-row-div d-none d-md-block">
                            <div className="col-12">
                                <div className="row align-items-center justify-content-between g-1">

                                    <div className="col-3 col-sm-3 col-md-2 col-lg-1 ps-3 text-start left-logo-div">
                                        <Image src="/images/Papua New Guinea.png" alt="Emblem of Papua New Guinea" width={80} height={80} className="img-fluid" />
                                    </div>

                                    <div className="col-6 text-center text-color-blue">
                                        <p className="head fw-bold m-0 fs-sm-4 fs-md-3 fs-lg-2 pt-0">
                                            NATIONAL EXAMINATION RESULTS - 2024
                                        </p>
                                        <p className="subhead fw-bold fs-6 fs-sm-5 fs-md-4 mb-0 p-lh">
                                            Department Of Education
                                        </p>
                                        <p className="fw-bold fs-7 fs-sm-6 fs-md-5 ">
                                            Papua New Guinea
                                        </p>
                                    </div>

                                    <div className="col-3 col-sm-3 col-md-2 col-lg-1 text-end right-logo-div">
                                        <Image src="/images/img5.png" alt="Department of Education logo" width={80} height={80} className="img-fluid" />
                                    </div>

                                </div>

                            </div>
                        </div>
                        <div className="row justify-content-center header-row-div d-block d-md-none">
                            <div className="col-12 d-inline-flex align-items-center justify-content-center">
                                <Image src="/images/Papua New Guinea.png" alt="Emblem of Papua New Guinea" width={80} height={80}
                                    className="img-fluid mt-2 ps-2" />
                                <p className="head fw-bold m-0 mx-2 fs-6 pt-3 text-center">
                                    NATIONAL EXAMINATION RESULTS 2024
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </header >

            {/* Carousel */}
            < div className='row mt-0' >

                <div className="carousel-container w-100">
                    <Carousel useKeyboardArrows={true} showArrows={false} showStatus={false}>
                        {carouselItems.map((item, index) => (
                            <div className="slide" key={index}>
                                <Image className="d-block carousel-image" src={item.image} alt={`Slide ${index}`} width="0"
                                    height="0"
                                    sizes="100vw"
                                    style={{ width: '100%', height: '200px' }}
                                    key={index} />
                            </div>
                        ))}
                    </Carousel>
                </div>
                {/* < div className="carousel-container w-100" >
                    <Carousel interval={5000} controls={false} indicators={true} className='c-indicator'>
                        {carouselItems.map((item, index) => (
                            <Carousel.Item key={index}>
                                <Image className="d-block carousel-image" src={item.image} alt={`Slide ${index}`} width="0"
                                    height="0"
                                    sizes="100vw"
                                    style={{ width: '100%', height: '200px' }} />

                            </Carousel.Item>
                        ))}
                    </Carousel>
                </div > */}
                {/* </div> */}
            </div >
            <div className="container-fluid">
                <div className="row no-gutters d-md-flex">
                    {images.map((image, index) => (
                        <div className="col p-1" key={index}>
                            <div className="card">
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    className="card-img-top"
                                    width={300} // Adjust this based on your layout needs
                                    height={70}
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* Content Section */}
            < div className="row m-2 mt-2" >
                <p className="col-md-10 offset-md-1 mb-1 mt-3">
                    Our government&apos;s vision is to modernize and provide quality education for all that is globally comparable through strategic reforms.
                </p>
                <p className="col-md-10 offset-md-1 mb-1 mt-1">The National Department of Education (NDoE) is glad to continue to provide <span className='fw-bold text-color-blue'>Grade 10 and Grade 12 Student&apos;s National Examination Results for 2024.</span> Every student and parent can go online now to access their examination results in real time.
                </p>

                {/* Buttons Section */}
                <div className="col-md-12 mb-3 d-none d-lg-block">
                    <div className="row mt-4 justify-content-center">
                        <div className="col-md-3 text-center px-0 d-inline-flex align-items-center justify-content-center">
                            <Image src="/images/Group 28812.png" alt="Logo" width={40} height={40} className='mt-1' />
                            <button className="btn btn-bg-gradient ms-1 me-3 color-white btn-font">Grade Results</button>
                        </div>

                        <div className="col-md-4 text-center px-0 d-inline-flex align-items-center justify-content-center">
                            <Image src="/images/Group 28817.png" alt="Logo" width={40} height={40} className='mt-1' />
                            <button className="btn btn-bg-gradient ms-1 me-3 color-white btn-font" onClick={handleGrade12ResultsClick}>
                                Grade Results
                            </button>
                        </div>

                        <div className="col-md-3 text-center px-0 d-inline-flex align-items-center justify-content-center">
                            <Image src="/images/Group 28829.png" alt="Logo" width={40} height={40} className='mt-1' />
                            <button className="btn btn-bg-gradient ms-1 me-3 color-white btn-font">STEM Results</button>
                        </div>
                    </div>
                </div>

                <div className="col-md-12 mb-3 d-none d-sm-block d-md-block d-lg-none">
                    <div className="row mt-4 justify-content-center">
                        <div className="col-md-3 text-center px-0 d-inline-flex align-items-center justify-content-center">
                            <Image src="/images/Group 28812.png" alt="Logo" width={40} height={40} className='mt-1' />
                            <button className="btn btn-bg-gradient ms-1 me-3 color-white btn-md-font">Grade Results</button>
                        </div>

                        <div className="col-md-4 text-center px-0 d-inline-flex align-items-center justify-content-center">
                            <Image src="/images/Group 28817.png" alt="Logo" width={40} height={40} className='mt-1' />
                            <button className="btn btn-bg-gradient ms-1 me-3 color-white btn-md-font" onClick={handleGrade12ResultsClick}>
                                Grade Results
                            </button>
                        </div>

                        <div className="col-md-3 text-center px-0 d-inline-flex align-items-center justify-content-center">
                            <Image src="/images/Group 28829.png" alt="Logo" width={40} height={40} className='mt-1' />
                            <button className="btn btn-bg-gradient ms-1 me-3 color-white btn-md-font">STEM Results</button>
                        </div>
                    </div>
                </div>

                <div className="col-md-12 mb-3 d-block d-sm-none">
                    <div className="row mt-4 justify-content-center">
                        <div className="col-md-3 text-center px-0 d-inline-flex align-items-center justify-content-center">
                            <Image src="/images/Group 28812.png" alt="Logo" width={40} height={40} className='mt-1' />
                            <button className="btn btn-bg-gradient ms-1 me-3 color-white btn-md-font">Grade Results</button>
                        </div>

                        <div className="col-md-4 text-center px-0 d-inline-flex align-items-center justify-content-center">
                            <Image src="/images/Group 28817.png" alt="Logo" width={40} height={40} className='mt-1' />
                            <button className="btn btn-bg-gradient ms-1 me-3 color-white btn-md-font" onClick={handleGrade12ResultsClick}>
                                Grade Results
                            </button>
                        </div>

                        <div className="col-md-3 text-center px-0 d-inline-flex align-items-center justify-content-center">
                            <Image src="/images/Group 28829.png" alt="Logo" width={40} height={40} className='mt-1' />
                            <button className="btn btn-bg-gradient ms-1 me-3 color-white btn-md-font">STEM Results</button>
                        </div>
                    </div>
                </div>


            </div >
            <div className='row d-flex d-block d-sm-none mt-5'>
                <div className='col-xs-12 text-center'>
                    <Image src="/images/img5.png" alt="Logo" width={50} height={50} className="logo-xs" />

                    <p className="mb-0 d-inline-block mt-0 fw-bold align-middle lh-1">
                        <span className='ministry-text-xs subtitle-xs footer-text-color'>Department of Education</span><br />
                        <span className='country-text-xs fs-7 footer-text-color'>Papua New Guinea</span>
                    </p>
                </div>
            </div>
            <div className='row d-flex d-none d-sm-block d-md-none d-lg-none'>
                <div className='col-sm-12 text-center'>
                    <Image src="/images/img5.png" alt="Logo" width={60} height={60} className="logo-xs" />

                    <p className="mb-0 d-inline-block mt-1 fw-bold align-middle lh-1">
                        <span className='ministry-text-xs subtitle-xs footer-text-color'>Department of Education</span><br />
                        <span className='country-text-xs fs-7 mb-0 footer-text-color'>Papua New Guinea</span>
                    </p>
                </div>
            </div>

            <Footer />
            {/* <div className="p-1 mb-0 mt-4 bg-gradient-custom ">
                by DASTIN Technologies
            </div> */}

            {/* CSS */}
            <style jsx>{`

            .p-lh {
                line-height: 16px;
            }
            .right-logo-div {
                margin-top: -4px;
            }
            .left-logo-div {
                margin-top: -8px;
            }
            .header-row-div {
                height: 75px;
            }



            .bg-gradient-custom {
    background: linear-gradient(to right, white 5%, #4BB5FF);
    color: #000;
    height:18px;
    font-size:10px;
  }

            /* Ensure full-width elements */
            .container-fluid {
            padding: 0 !important;
            margin: 0 !important;
            width: 100%;
            }

            .text-color-blue {
                color: #14317F;
            }
            .bg-color-blue {
                background-color: #14317F;
            }
          
            .fs-7 {
                font-size: 0.675rem;
            }
            .subtitle-xs {
                font-size: 0.75rem;
                color: #00355b;
            }
            
            .declaration{
                font-size: 0.675rem !important;
                
            }
                .color-blue {
                    color: #00355b;
                }
      .header {
          width: 100%;
       
        }

        .btn-bg-gradient {
            width: 144px;
            height: 34.85px;
            background: linear-gradient(180deg, #181D6E 0%, #0071BD 100%);
            border-radius: 13px;
            border: 0.75px solid #1A4CD3;
            color: white !important;
            font-weight: bold;
            font-size: 16px;
            display: flex;
            justify-content: center;
            align-items: center;

        }
       .btn-bg-gradient:hover {
  background: linear-gradient(180deg, #0071BD 0%, #181D6E 100%); /* Hover effect - reverse gradient */
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

        .btn-font {
          font-size: 12px !important;
        }
        .btn-md-font {
            font-size: 12px !important;
        }
        .subtitle {
          font-size: 16px;
          color: #00355b;
          text-align: center;
          margin-top: 5px;
          font-weight: 300;
        }
        .carousel-container {
                height: 200px;
        //   margin-bottom: 20px;
          object-fit: cover;
        
          
        }
        .carousel-image {
                height: 200px;
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
            width: 50px;
            height: 50px;
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
