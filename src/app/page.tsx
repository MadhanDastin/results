"use client";
import React from 'react';
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';


const Login = () => {
    return (
        <div className="loginPage">
            <div className="container-fluid">
                <div className="row align-items-center justify-content-center vh-100">


                    {/* Left side */}
                    <div className="col-md-6 text-center">
                        <div>
                            <div>
                        <Image src="/images/Group 95.png" alt="Logo" width={120} height={120} />
                        </div>
                        <div className="mt-1">
                        <h2 className="gradeTitle mt-4">GRADE 10 RESULTS</h2>
                        <p className="subTitle">NATIONAL EXAMINATION RESULTS-2024</p>
                        </div>
                        </div>
                        {/* Logo and Department Title in the same row */}
                        <div className="row d-flex d-none d-sm-flex justify-content-center align-items-center mt-4 ">
                            <div className="col-auto mt-5">
                                <Image src="/images/img5.png" alt="Department Logo" width={70} height={70} />
                            </div>
                            <div className="col-auto mt-5">
                                <p className="departmentTitle">
                                    Department Of Education<br />Papua New Guinea
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right side - Form */}
                    <div className="col-md-4 d-flex flex-column justify-content-center align-items-center">
                        <div className="formCard p-4">
                            <h2 className="loginTitle mb-4">Login <Image src="/images/Group 96.png" alt="Logo" width={30} height={30} /></h2>
                            <form className='w-100'>
                                <div className="mb-4">
                                    <label className="form-label mb-0">Surname *</label>
                                    <input type="text" className="form-control inputField py-0 lh-lg" placeholder="Surname" />
                                </div>
                                <div className="mb-4">
                                    <label className="form-label mb-0">Given Names *</label>
                                    <input type="text" className="form-control inputField py-0 lh-lg" placeholder="First Name + Middle Name" />
                                </div>
                                <div className="mb-4">
                                    <label className="form-label mb-0">Password *</label>
                                    <input type="password" className="form-control inputField py-0 lh-lg" placeholder="Password/GFL NO" />
                                    <div className="small-label float-end">Default password is SIF/NO (Format: YYYYNSCHOOLID)</div>
                                </div>
                                <div className="mb-3 d-flex justify-content-center">
                                    <a href="#" className="forgotPassword"><Image src="/images/vector.png" alt="Logo" width={15} height={15} />  Forgot Password?</a>
                                </div>
                                <div className="d-flex justify-content-center mt-5">
                                    <button type="submit" className="btn btn-primary custom-button">
                                        Get My Results &nbsp;
                                        {/* <span className="icon-wrap"> */}
                                            <Image src="/images/Group 85.png" alt="Logo" width={25} height={25} />
                                            {/* <span className="semi-circle"></span> */}
                                        {/* </span> */}
                                    </button>
                                </div>
                            </form>
                            <div className="d-flex justify-content-between mt-4">
                                <a href="#" className="btn btn-outline-info btn-sm form-label custom-btn-bg">Help <Image src="/images/Vector (2).png" alt="Logo" width={15} height={15} /></a>
                                <a href="#" className="btn btn-outline-info  btn-sm form-label custom-btn-bg">Home <Image src="/images/Vector (1).png" alt="Logo" width={15} height={15} /></a>
                                <button className="btn btn-outline-info  btn-sm form-label custom-btn-bg">Reset <Image src="/images/Group.png" alt="Logo" width={15} height={15} /></button>
                            </div>
                        </div>
                    </div>
                    <div className="row d-flex d-block d-sm-none justify-content-center align-items-center mt-4">
                        <div className="col-auto">
                            <Image src="/images/img5.png" alt="Department Logo" width={70} height={70} />
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
                ::-webkit-input-placeholder {
                    font-size: 25px;
                }

                :-moz-placeholder { /* Firefox 18- */
                    font-size: 25px;
                }

                ::-moz-placeholder {  /* Firefox 19+ */
                    font-size: 25px;
                }

                /* Overriding styles */

                ::-webkit-input-placeholder {
                font-size: 13px!important;
                }

                :-moz-placeholder { /* Firefox 18- */
                    font-size: 13px!important;
                }
                ::-moz-placeholder {  /* Firefox 19+ */
                    font-size: 13px!important;
                }
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
                    color: #FCE886;
                    font-size: 0.7rem;
                    margin-top: 20px;
                }

                .formCard {
                    //background-color: rgba(255, 255, 255, 0.1); /* Transparent background */
                    border: 3px solid  #4BB5FF;
                    border-radius: 26px;
                    box-shadow: 0px 4px 4px 4px #00000040;
                    //box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
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
                    // position: relative;
                    // display: flex;
                    // align-items: center;
                    // justify-content: center;
                    background-color: #0053ba; /* Adjust the background color to match */
                    color: #fff;
                    // padding: 10px 20px;
                    border-radius: 10px; /* Rounded corners */
                    font-size: 16px;
                    font-weight: bold;
                    width:200px;
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
                    height: 36px;
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
                    .custom-btn-bg{
                     background-color: #006FBB !important;
                     border: 1px solid #006FBB !important;
                    }    
                }
      `}</style>
        </div>
    );
};

export default Login;
