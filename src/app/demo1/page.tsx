"use client";
import React from 'react';
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';

const HomePage = () => {
    return (
        <div className="homePage">
            <div className="container-fluid">
                {/* Header Section */}
                <header className="row bg-primary text-white py-2 align-items-center">
                    <div className="col text-center">
                        <h1 className="title">NATIONAL EXAMINATION RESULTS – 2024</h1>
                        <p className="subTitle">Ministry of Education <br />Papua New Guinea</p>
                    </div>
                </header>

                {/* Banner Section */}
                <section className="row banner-section align-items-center text-center py-4">
                    <div className="col">
                        <h2 className="mainTitle">NATIONAL EXAMINATION</h2>
                        <h3 className="resultsTitle">RESULTS - 2024</h3>
                    </div>
                    <div className="col-auto">
                        <Image src="/images/png-flag.png" alt="PNG Flag" width={150} height={150} />
                    </div>
                </section>

                {/* Image Carousel Section */}
                <div className="row image-carousel text-center">
                    <div className="col-12">
                        <div className="row">
                            {/* You can use a carousel component here */}
                            <div className="col">
                                <Image src="/images/img1.png" alt="Education Image 1" width={100} height={100} />
                            </div>
                            <div className="col">
                                <Image src="/images/img2.png" alt="Education Image 2" width={100} height={100} />
                            </div>
                            <div className="col">
                                <Image src="/images/img3.png" alt="Education Image 3" width={100} height={100} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Description Section */}
                <section className="row text-center description-section mt-3">
                    <div className="col-md-12">
                        <p className="descriptionText">
                            Our government’s vision is to modernize and provide quality education for all that is globally comparable through strategic reforms. 
                            The National Department of Education (NDoE) is glad to continue to provide Grade 10 and Grade 12 Students’ National Examination Results for 2024. 
                            Every student and parent can go online now to access their examination results in real-time.
                        </p>
                    </div>
                </section>

                {/* Buttons Section */}
                <section className="row text-center mt-4 buttons-section">
                    <div className="col-md-4">
                        <button className="btn btn-primary btn-lg w-100">
                            <span className="button-text">Grade 10 Results</span>
                        </button>
                    </div>
                    <div className="col-md-4">
                        <button className="btn btn-primary btn-lg w-100">
                            <span className="button-text">Grade 12 Results</span>
                        </button>
                    </div>
                    <div className="col-md-4">
                        <button className="btn btn-primary btn-lg w-100">
                            <span className="button-text">STEM Results</span>
                        </button>
                    </div>
                </section>

                {/* Footer Section */}
                <footer className="row footer-section text-center mt-5">
                    <div className="col-md-12">
                        <p className="footer-text">Mobile App for Android platform can be downloaded from Google Playstore.</p>
                    </div>
                </footer>
            </div>

            <style jsx>{`
                .homePage {
                    background-color: #f0f8ff;
                }

                .title {
                    font-size: 1.8rem;
                    font-weight: bold;
                    text-transform: uppercase;
                }

                .subTitle {
                    font-size: 1.2rem;
                }

                .mainTitle {
                    font-size: 2.5rem;
                    font-weight: bold;
                    color: #004d99;
                }

                .resultsTitle {
                    font-size: 2rem;
                    color: #004d99;
                }

                .descriptionText {
                    font-size: 1.2rem;
                    color: #333;
                    margin-top: 10px;
                }

                .banner-section {
                    background: url('/images/blue-gradient.jpg') no-repeat center center;
                    background-size: cover;
                    color: white;
                    padding: 30px 0;
                }

                .image-carousel {
                    margin: 20px 0;
                }

                .buttons-section .btn {
                    background-color: #004d99;
                    border: none;
                    color: white;
                    font-size: 1.2rem;
                }

                .buttons-section .btn .button-text {
                    padding: 10px;
                }

                .footer-section {
                    margin-top: 50px;
                    background-color: #f0f8ff;
                }

                .footer-text {
                    font-size: 1rem;
                    color: #777;
                }

                @media (max-width: 768px) {
                    .title {
                        font-size: 1.5rem;
                    }

                    .mainTitle {
                        font-size: 2rem;
                    }

                    .resultsTitle {
                        font-size: 1.5rem;
                    }

                    .buttons-section .btn {
                        font-size: 1rem;
                    }
                }
            `}</style>
        </div>
    );
};

export default HomePage;
