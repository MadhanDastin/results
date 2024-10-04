"use client";
import { Poppins } from '@next/font/google';
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
            image: '/images/courasle_page-0001.jpg',
            name: '1',
        },
        {
            image: '/images/courasle_page-0002.jpg',
            name: '2',
        },
        {
            image: '/images/courasle_page-0003.jpg',
            name: '3',
        },
        {
            image: '/images/courasle_page-0004.jpg',
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
                        <div className="row justify-content-center header-row-div">
                            <div className="col-12">
                                <div className="row align-items-center justify-content-between g-1">

                                    <div className="col-3 col-sm-3 col-md-2 col-lg-1 ps-3 text-start left-logo-div">
                                        <Image src="/images/Papua New Guinea.png" alt="Emblem of Papua New Guinea" width={80} height={80} className="img-fluid" />
                                    </div>

                                    <div className="col-6 text-center text-color-blue">
                                        <p className="head fw-bold m-0 fs-4 fs-sm-5 fs-md-3 fs-lg-2 pt-0 d-sm-fllex">
                                            NATIONAL EXAMINATION RESULTS - 2024
                                        </p>
                                        <p className="subhead fw-bold fs-6 fs-sm-5 fs-md-4 mb-0 p-lh d-none d-sm-block">
                                            Department Of Education
                                        </p>
                                        <p className="fw-bold fs-7 fs-sm-6 fs-md-5 d-none d-sm-block ">
                                            Papua New Guinea
                                        </p>
                                    </div>

                                    <div className="col-3 col-sm-3 col-md-2 col-lg-1 text-end right-logo-div d-none d-sm-block">
                                        <Image src="/images/img5.png" alt="Department of Education logo" width={80} height={80} className="img-fluid" />
                                    </div>

                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </header >

            {/* Carousel */}
            < div className='row mt-0' >


                < div className="carousel-container w-100" >
                    <Carousel interval={5000} controls={false} indicators={true}>
                        {carouselItems.map((item, index) => (
                            <Carousel.Item key={index}>
                                <Image className="d-block carousel-image" src={item.image} alt={`Slide ${index}`} width="0"
                                    height="0"
                                    sizes="100vw"
                                    style={{ width: '100%', height: '200px' }} />

                            </Carousel.Item>
                        ))}
                    </Carousel>
                </div >
                {/* </div> */}
            </div >
            <div className="container-fluid">
                <div className="row no-gutters">
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
                <div className='col-md-12 mb-3'>
                    <div className="row mt-4">
                        <div className='offset-md-3 col-md-2 text-center px-0 mb-sm-5'>
                            <button className="btn btn-bg-gradient mx-3 title-color">Grade 10 Results</button>
                            {/* <p className='declaration fw-bold mt-2 color-red'>*Declared at: 11 AM, 8th December, 2024</p> */}
                        </div>
                        <div className='col-md-2 text-center px-0 mb-sm-5'>
                            <button className="btn btn-bg-gradient mx-3 title-color" onClick={handleGrade12ResultsClick}>Grade 12 Results</button>
                            {/* <p className='declaration fw-bold mt-2 color-red'>*Declared at: 11 AM, 8th December, 2024</p> */}
                        </div>
                        <div className='col-md-2 text-center px-0 mb-sm-5'>
                            <button className="btn btn-bg-gradient mx-3 title-color">STEM Results</button>
                            {/* <p className='declaration fw-bold mt-2 color-red'>*Declared at: 11 AM, 8th December, 2024</p> */}
                        </div>
                    </div>
                </div>
            </div >
            <div className='row d-flex d-block d-sm-none'>
                <div className='col-xs-12 text-center'>
                    <Image src="/images/img5.png" alt="Logo" width={60} height={60} className="logo-xs" />

                    <p className="mb-0 d-inline-block mt-1 fw-bold align-middle">
                        <span className='ministry-text-xs subtitle-xs footer-text-color'>Department of Education</span><br />
                        <span className='country-text-xs fs-7 footer-text-color'>Papua New Guinea</span>
                    </p>
                </div>
            </div>
            <div className='row d-flex d-none d-sm-block d-md-block d-lg-none'>
                <div className='col-sm-12 text-center'>
                    <Image src="/images/img5.png" alt="Logo" width={60} height={60} className="logo-xs" />

                    <p className="mb-0 d-inline-block mt-1 fw-bold align-middle">
                        <span className='ministry-text-xs subtitle-xs footer-text-color'>Department of Education</span><br />
                        <span className='country-text-xs fs-7 footer-text-color'>Papua New Guinea</span>
                    </p>
                </div>
            </div>
            <div className="p-1 mb-0 mt-4 bg-gradient-custom ">
                by DASTIN Technologies
            </div>

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

//              @font-face {
//   font-family: 'MyFont';
//   src: url('/fonts/IntroRust-Base.otf') format('otf');
//   font-weight: normal;
//   font-style: normal;
// }
 
// .header {
//   font-family: 'MyFont';
// }

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
            // body {
            //     overflow: hidden;
            // }
            .fs-7 {
                font-size: 0.675rem;
            }
            .subtitle-xs {
                font-size: 0.875rem;
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
        //   height: 85px;
        //   background:#00355b;
        //    linear-gradient(#fee05c, #febc5b);
        }

        .btn-bg-gradient {
        color: #fff;
                    background-image: linear-gradient(to right, #181D6E , #0071BD);
          width: 170px;
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
