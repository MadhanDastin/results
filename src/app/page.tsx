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
                    <div className="col-md-3 text-center">
                        <div>
                            <div>
                        <Image src="/images/Group 95.png" alt="Logo" width={90} height={90} />
                        </div>
                        <div className="mt-0">
                        <h2 className="gradeTitle mt-0">GRADE 10 RESULTS</h2>
                        <p className="subTitle">NATIONAL EXAMINATION RESULTS-2024</p>
                        </div>
                        </div>
                        {/* Logo and Department Title in the same row */}
                        <div className="row d-flex d-none d-sm-flex justify-content-center align-items-center mt-5 ">
                            <div className="col-auto mt-5 pe-0">
                                <Image src="/images/img5.png" alt="Department Logo" width={60} height={60} />
                            </div>
                            <div className="col-auto mt-5 ps-0">
                                <p className="departmentTitle">
                                    Department Of Education<br />Papua New Guinea
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right side - Form */}
                    <div className="col-md-4 d-flex justify-content-center align-items-center vh-100">
                        <div className="formCard p-3">
                            <h2 className="loginTitle mb-2">Login <Image src="/images/Group 96.png" alt="Logo" width={20} height={20} /></h2>
                            <form className='w-100'>
                                <div className="mb-2">
                                    <label className="form-label mb-0 ps-4 ms-2">Surname *</label>
                                    <input type="text" className="form-control inputField lh-lg" placeholder="Surname" />
                                </div>
                                <div className="mb-2">
                                    <label className="form-label mb-0 ps-4 ms-2">Given Names *</label>
                                    <input type="text" className="form-control inputField lh-lg" placeholder="First Name + Middle Name" />
                                </div>
                                <div className="mb-2">
                                    <label className="form-label mb-0 ps-4 ms-2">Password *</label>
                                    <input type="password" className="form-control inputField lh-lg" placeholder="Password/GFL NO" />
                                    <div className="small-label ps-4 ms-2">Default password is SIF/NO (Format: YYYYNSCHOOLID)</div>
                                </div>
                                <div className="text-center">
                                    <a href="#" className="forgotPassword"><Image src="/images/Vector.png" alt="Logo" width={10} height={10} />  Forgot Password?</a>
                                </div>
                                <div className="d-flex justify-content-center mt-3">
                                    <button type="submit" className="btn btn-primary custom-button">
                                        Get My Results &nbsp;
                                       
                                            <Image src="/images/Group 85.png" alt="Logo" width={20} height={20} />
                                            
                                    </button>
                                </div>
                            </form>
                            <div className="d-flex justify-content-between mt-4">
                                <a href="#" className="btn  btn-sm customButton">Help <Image src="/images/Vector (2).png" alt="Logo" width={12} height={12} /></a>
                                <a href="#" className="btn btn-outline-info  btn-sm customButton">Home <Image src="/images/Vector (1).png" alt="Logo" width={12} height={12} /></a>
                                <button className="btn btn-outline-info  btn-sm customButton">Reset <Image src="/images/Group.png" alt="Logo" width={12} height={12} /></button>
                            </div>
                        </div>
                    </div>
                    <div className="row d-flex d-block d-sm-none justify-content-center align-items-center mt-4">
                        <div className="col-auto pe-0">
                            <Image src="/images/img5.png" alt="Department Logo" width={70} height={70} />
                        </div>
                        <div className="col-auto ps-0">
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
                    font-size: 1.5rem;
                }

                .subTitle {
                    color: white;
                    font-size: 0.7rem;
                }

                .departmentTitle {
                    color: #FCE886;
                    font-size: 0.7rem;
                    margin-top: 20px;
                }

                .formCard {
                    //background-color: rgba(255, 255, 255, 0.1); /* Transparent background */
                    border: 1px solid  #4BB5FF;
                    border-radius: 20px;
                    box-shadow: 0px 4px 4px 4px #00000040;
                    //box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
                    width:300px;
                     padding: 1.5rem;
                }

                .loginTitle {
                    font-size: 1rem;
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
                //   background: 'linear-gradient( #181D6E 0%, #0071BD 100%)'
                    background-color: #0053ba; /* Adjust the background color to match */
                    color: #fff;
                   
                    border-radius: 10px; /* Rounded corners */
                    font-size: 10px;
                    font-weight: bold;
                    width:150px;
                }

                .inputField {
                    background-color: white; /* White input box */
                    border: none;
                    border-radius: 5px;
                    padding: 10px;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                    width:200px;
                    height: 30px;
                    margin: 0 auto;
                }
        
                .form-label{
                    color:white;
                    font-size: 12px;
                }

                .customButton{
                    color:white;
                    font-size: 12px;
                    background-color: #006FBB !important;
                     border: 1px solid #006FBB !important;
                    
                }
        
                .small-label{
                    font-size: 0.5rem;
                    color:#FCE886;
                }

                .forgotPassword {
                    font-size: 0.55rem;
                    color: white;
                    text-decoration: none;
                }

                @media (max-width: 768px) {
                    .gradeTitle {
                        font-size: 1.5rem;
                    }
                   
                  
                }
      `}</style>
        </div>
    );
};

export default Login;
