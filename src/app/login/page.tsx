"use client";
import React from 'react';
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaArrowRight } from 'react-icons/fa';
import { RiArrowGoBackFill } from "react-icons/ri";
import { IoMdHelp } from "react-icons/io";
import { GrPowerReset } from "react-icons/gr";

const Login = () => {
    return (
        <div className="loginPage">
            <div className="container-fluid">
                <div className="row align-items-center justify-content-center vh-100">


                    {/* Left side */}
                    <div className="col-md-6 text-center">
                        <Image src="/images/pngflagv1.png" alt="Logo" width={120} height={120} />
                        <h2 className="gradeTitle mt-4">GRADE 10 RESULTS</h2>
                        <p className="subTitle">NATIONAL EXAMINATION RESULTS-2024</p>

                        {/* Logo and Department Title in the same row */}
                        <div className="row justify-content-center align-items-center mt-4 d-none d-sm-block">
                            <div className="col-auto">
                                <Image src="/images/img5.png" alt="Department Logo" width={100} height={100} />
                            </div>
                            <div className="col-auto">
                                <p className="departmentTitle">
                                    Department Of Education<br />Papua New Guinea
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right side - Form */}
                    <div className="col-md-4 d-flex flex-column justify-content-center align-items-center">
                        <div className="formCard p-4">
                            <h2 className="loginTitle">Login <Image src="/images/Group 96.png" alt="Logo" width={30} height={30} /></h2>
                            <form className='w-100'>
                                <div className="mb-3">
                                    <label className="form-label">Surname *</label>
                                    <input type="text" className="form-control inputField" placeholder="Surname" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Given Names *</label>
                                    <input type="text" className="form-control inputField" placeholder="First Name + Middle Name" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Password *</label>
                                    <input type="password" className="form-control inputField" placeholder="Password/GFL NO" />
                                    <small className="small-label">Default password is SIF/NO (Format: YYYYNSCHOOLID)</small>
                                </div>
                                <div className="mb-3 d-flex justify-content-center">
                                    <a href="#" className="forgotPassword"><IoMdHelp />  Forgot Password?</a>
                                </div>
                                <button type="submit" className="btn btn-primary custom-button">
                                    Get My Results
                                    <span className="icon-wrap">
                                        <FaArrowRight className="arrow-icon" />
                                        <span className="semi-circle"></span>
                                    </span>
                                </button>
                            </form>
                            <div className="d-flex justify-content-between mt-3">
                                <a href="#" className="btn btn-outline-info btn-sm form-label">Help <IoMdHelp /></a>
                                <a href="#" className="btn btn-outline-info btn-sm form-label">Home <RiArrowGoBackFill /></a>
                                <button className="btn btn-outline-info btn-sm form-label">Reset <GrPowerReset /></button>
                            </div>
                        </div>
                    </div>
                    <div className="row d-flex d-block d-sm-none justify-content-center align-items-center mt-4">
                        <div className="col-auto">
                            <Image src="/images/img5.png" alt="Department Logo" width={100} height={100} />
                        </div>
                        <div className="col-auto">
                            <p className="departmentTitle">
                                Department Of Education<br />Papua New Guinea
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .loginPage {
                    background: url('/images/blue-gradient.jpg') no-repeat center center fixed;
                    background-size: cover;
                    height: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    overflow-y: scroll;
                }
                .gradeTitle {
                    color: white;
                    font-weight: bold;
                    font-size: 2rem;
                }

                .subTitle {
                    color: white;
                    font-size: 1.2rem;
                }

                .departmentTitle {
                    color: white;
                    font-size: 1rem;
                    margin-top: 20px;
                }

                .formCard {
                    background-color: rgba(255, 255, 255, 0.1); /* Transparent background */
                    border-radius: 10px;
                    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
                }

                .loginTitle {
                    font-size: 1.5rem;
                    font-weight: bold;
                    text-align: center;
                    gap: 10px;
                    color: white; /* White text for title */
                }

                .loginTitle svg {
                    color: #007bff; /* Customize the arrow color */
                    font-size: 18px;
                }

                .custom-button {
                    position: relative;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background-color: #0053ba; /* Adjust the background color to match */
                    color: #fff;
                    padding: 10px 20px;
                    border-radius: 10px; /* Rounded corners */
                    font-size: 16px;
                    font-weight: bold;
                    width:250px;
                }

                .icon-wrap {
                    display: flex;
                    align-items: center;
                    margin-left: 10px;
                }

                .arrow-icon {
                    font-size: 16px;
                    margin-right: 5px; /* Space between the arrow and semi-circle */
                }

                .semi-circle {
                    display: inline-block;
                    width: 30px;
                    height: 30px;
                    rotate: 40deg;
                    margin-left: -1.563rem;
                    border: 2px solid #fff; /* White semi-circle border */
                    border-radius: 50%;
                    border-left-color: transparent; /* Make half of the circle transparent */
                    border-bottom-color: transparent;
                }

                .inputField {
                    background-color: white; /* White input box */
                    border: none;
                    border-radius: 5px;
                    padding: 10px;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                    width:250px;
                }
        
                .form-label{
                    color:white;
                }
        
                .small-label{
                    font-size: 0.5rem;
                    color:#FCE886;
                }

                .forgotPassword {
                    font-size: 0.6rem;
                    color: white;
                    text-decoration: none;
                }

                @media (max-width: 768px) {
                    .gradeTitle {
                        font-size: 1.5rem;
                    }
                    .formCard {
                        padding: 1.5rem;
                    }
                }
      `}</style>
        </div>
    );
};

export default Login;
