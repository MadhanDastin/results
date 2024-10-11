"use client";

import React, { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Footer from '../lib/ui/footer/footer';
import './home.css'
import Header from '../lib/ui/header/header';
// import { content } from '../../public/content.json';
import CustomCarousel from '../lib/ui/carousel/carousel';


const HomeScreen: React.FC = () => {
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
        <div className="vh-100">
            {/* Header */}
            <div className="container-fluid p-0">
                <div className="row no-gutters">
                    <div className="col p-1 bg-color-blue">
                    </div>
                </div>
            </div>

            <Header />
           
            {/* Carousel */}
            < div className='row mt-0' >

                <div className="carousel-container w-100">

                <CustomCarousel />
                    
                </div>
               
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
                Our government&apos;s vision is to modernize and provide quality education for all that is globally comparable through strategic reforms. </p>
                <p className="col-md-10 offset-md-1 mb-1 mt-1" >The National Department of Education (NDoE) is glad to continue to provide <span className='fw-bold text-color-blue'>Grade 10 and Grade 12 Student&apos;s National Examination Results for 2024.</span> Every student and parent can go online now to access their examination results in real time.
                </p>

                {/* Buttons Section */}
                <div className="col-md-12 mb-3 d-none d-lg-block">
                    <div className="row mt-4 justify-content-center">
                        <div className="col-md-3 text-center px-0 d-inline-flex align-items-center justify-content-center">
                            <Image src="/images/Group 28812.png" alt="Logo" width={40} height={40} className='mt-1' />
                            <button className="btn btn-bg-gradient ms-1 me-3 color-white btn-font"> Grade 10 Results</button>
                        </div>

                        <div className="col-md-4 text-center px-0 d-inline-flex align-items-center justify-content-center">
                            <Image src="/images/Group 28817.png" alt="Logo" width={40} height={40} className='mt-1' />
                            <button className="btn btn-bg-gradient ms-1 me-3 color-white btn-font" onClick={handleGrade12ResultsClick}>
                            Grade 12 Results
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
                        <span className='ministry-text-xs subtitle-xs footer-text-color'>Department Of Education</span><br />
                        <span className='country-text-xs fs-7 footer-text-color'>Papua New Guinea</span>
                    </p>
                </div>
            </div>
            <div className='row d-flex d-none d-sm-block d-md-none d-lg-none'>
                <div className='col-sm-12 text-center'>
                    <Image src="/images/img5.png" alt="Logo" width={60} height={60} className="logo-xs" />

                    <p className="mb-0 d-inline-block mt-1 fw-bold align-middle lh-1">
                        <span className='ministry-text-xs subtitle-xs footer-text-color'>Department Of Education</span><br />
                        <span className='country-text-xs fs-7 mb-0 footer-text-color'>Papua New Guinea</span>
                    </p>
                </div>
            </div>

            <Footer />

            </div>
           
            
        </>
    );
};

export default HomeScreen;
