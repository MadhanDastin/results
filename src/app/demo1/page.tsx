"use client"
import React from 'react';
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
    return (
        <div className="header-section">
            <div className="container-fluid py-3 text-center">
                <div className="row align-items-center">
                    <div className="col-2 text-left">
                        {/* Left logo (Papua New Guinea Emblem) */}
                        <Image 
                            src="/images/pngflagv1.png" 
                            alt="Papua New Guinea Emblem" 
                            width={90} 
                            height={90} 
                        />
                    </div>
                    <div className="col-8">
                        {/* Title Section */}
                        <h1 className="title">NATIONAL EXAMINATION RESULTS – 2024</h1>
                        <p className="subTitle">Ministry of Education <br />Papua New Guinea</p>
                    </div>
                    <div className="col-2 text-right">
                        {/* Right logo (Department of Education) */}
                        <Image 
                            src="/images/img5.png" 
                            alt="Department of Education" 
                            width={100} 
                            height={100} 
                        />
                    </div>
                </div>
            </div>

            <style jsx>{`
                .header-section {
                    background-color: #003f88;
                    color: white;
                    padding: 10px 0;
                }

                .title {
                    font-size: 1.8rem;
                    font-weight: bold;
                }

                .subTitle {
                    font-size: 1rem;
                }

                @media (max-width: 768px) {
                    .title {
                        font-size: 1.2rem;
                    }

                    .subTitle {
                        font-size: 0.9rem;
                    }
                }
            `}</style>
        </div>
    );
};

export default Header;
