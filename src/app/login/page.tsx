"use client";
import React from 'react';
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useForm } from 'react-hook-form';

type FormValues = {
    surname: string;
    givenNames: string;
    password: string;
  };
  
const Login = () => {

   

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors,isValid },
    } = useForm({
        mode: 'onChange', // Check form validity on every change
    });
    
    const onSubmit = async (data: FormValues) => {
        console.log('form data ', data);
        try {
          // Make a POST request to the login API
          const response = await fetch("http://devapi.dastintechnologies.com/api/v1/twl/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
                lastname: data.surname,
              givennames: data.givenNames,
              slfnumber: data.password,
            }),
          });
    
          const result = await response.json();
    
          if (response.ok) {
            // Handle successful login
            console.log("Login successful:", result);
            alert("Login successful!");
            reset(); // Reset form fields after successful login
          } else {
            // Handle API error response
            console.error("Login failed:", result.message);
            alert(`Login failed: ${result.message}`);
          }
        } catch (error) {
          console.error("An error occurred during login:", error);
          alert("An error occurred. Please try again.");
        }
        reset();
      };



    return (
        <div className="loginPage vh-100">
            <div className="container-fluid">
                <div className="row align-items-center justify-content-center">


                    {/* Left side */}
                    <div className="col-md-4 text-center">
                        <div>
                            <div>
                                <Image src="/images/Group 95.png" alt="Logo" width={100} height={100} />
                            </div>
                            <div className="mt-0">
                                <h2 className="gradeTitle mt-2">GRADE 12 RESULTS</h2>
                                <p className="subTitle">NATIONAL EXAMINATION RESULTS - 2024</p>
                            </div>
                        </div>
                        {/* Logo and Department Title in the same row */}
                        <div className="row d-flex d-none d-sm-flex justify-content-center align-items-center mt-5 pe-4 ">
                            <div className="col-auto mt-5 pe-0">
                                <Image src="/images/img5.png" alt="Department Logo" width={70} height={70} />
                            </div>
                            <div className="col-auto mt-5 ps-0">
                                <p className="departmentTitle mb-0 mt-3">
                                    Department Of Education
                                </p>
                                <p className="departmentTitle text-start">
                                Papua New Guinea
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right side - Form */}
                    <div className="col-md-4 d-flex justify-content-center align-items-center">
                        <div className="formCard p-3">
                            <h2 className="loginTitle mt-2 py-2 mb-3">Login <Image src="/images/Group 96.png" alt="Logo" width={28} height={28} /></h2>
                            <form className="w-100" onSubmit={handleSubmit(onSubmit)}>
                                {/* Surname Field */}
                                <div className="mb-4">
                                    <label className="form-label mb-0 ps-4 ms-2">Surname *</label>
                                    <input
                                        type="text"
                                        className={`form-control inputField ${errors.surname ? 'is-invalid' : ''}`}
                                        placeholder="Surname"
                                        {...register('surname', { required: 'Surname is required' })}
                                    />
                                    {errors.surname && <div className="invalid-feedback mb-0 ps-4 ms-2">{errors.surname.message?.toString()}</div>}
                                </div>

                                {/* Given Names Field */}
                                <div className="mb-4">
                                    <label className="form-label mb-0 ps-4 ms-2">Given Names *</label>
                                    <input
                                        type="text"
                                        className={`form-control inputField ${errors.givenNames ? 'is-invalid' : ''}`}
                                        placeholder="First Name + Middle Name"
                                        {...register('givenNames', { required: 'Given names are required' })}
                                    />
                                    {errors.givenNames && <div className="invalid-feedback mb-0 ps-4 ms-2">{errors.givenNames.message?.toString()}</div>}
                                </div>

                                {/* Password Field */}
                                <div className="mb-3">
                                    <label className="form-label mb-0 ps-4 ms-2">Password *</label>
                                    <input
                                        type="password"
                                        className={`form-control inputField ${errors.password ? 'is-invalid' : ''}`}
                                        placeholder="Password/GFL NO"
                                        {...register('password', {
                                            required: 'Password is required',
                                            minLength: {
                                                value: 6,
                                                message: 'Password must be at least 6 characters',
                                            },
                                        })}
                                    />
                                    {errors.password && <div className="invalid-feedback mb-0 ps-4 ms-2">{errors.password.message?.toString()}</div>}
                                    <div className="small-label ps-4 ms-2 mt-1">Default password=SLF NO(Format:YYYYPRSCHCAND)</div>
                                    <div className='text-center mb-4 pb-2'>
                                        <a href="#" className="forgotPassword"><Image src="/images/Vector.png" alt="Logo" width={10} height={10} />  Forgot Password?</a>
                                    </div>
                                </div>

                                <div className="d-flex justify-content-center mt-3">
                                    <button type="submit" className="btn btn-primary custom-button">
                                        Get My Results &nbsp;

                                        <Image src="/images/Group 85.png" alt="Logo" width={20} height={20} />

                                    </button>
                                </div>


                            </form>
                            
                            <div className="text-center mt-4 pt-2 mb-4">
                                <a href="#" className="btn  btn-sm customButton">Help <Image src="/images/Vector (2).png" alt="Logo" width={12} height={12} /></a>
                                <a href="#" className="btn btn-outline-info  btn-sm customButton mx-3">Home <Image src="/images/Vector (1).png" alt="Logo" width={12} height={12} /></a>
                                <button className="btn btn-outline-info  btn-sm customButton">Reset <Image src="/images/Group.png" alt="Logo" width={12} height={12} /></button>
                            </div>
                        </div>
                    </div>
                    <div className="row d-flex d-block d-sm-none justify-content-center align-items-center mt-4">
                        <div className="col-auto pe-0">
                            <Image src="/images/img5.png" alt="Department Logo" width={70} height={70} />
                        </div>
                        <div className="col-auto ps-0">
                            <p className="departmentTitle mt-3">
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
                    font-size: 1rem;
                }

                .departmentTitle {
                    color: #FCE886;
                    font-size: 0.7rem;
                }

                .formCard {
                   
                    border: 2px solid  #4BB5FF;
                    border-radius: 20px;
                    box-shadow: 0px 4px 4px 4px #00000040;
                    width:330px;                   
                     padding: 1.5rem;
                }

                .loginTitle {
                    font-size: 24px;
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
              
                    //background-color: #0053ba; /* Adjust the background color to match */
                    color: #fff;
                    background-image: linear-gradient(to right, #181D6E , #0071BD);
                    border-radius: 10px; /* Rounded corners */
                    font-size: 12px;
                    font-weight: bold;
                    width:150px;
                    height:45px;
                }

                .inputField {
                    background-color: white; /* White input box */
                    border: none;
                    border-radius: 5px;
                    padding: 10px;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                    width:230px;
                    height: 30px;
                    margin: 0 auto;
                }
        
                .form-label{
                    color:white;
                    font-size: 14px;
                }

                .invalid-feedback{
                    color:yellow;
                    font-size: 12px;
                }

                .customButton{
                    color:white;
                    font-size: 12px;
                    background-color: #006FBB !important;
                     border: 1px solid #006FBB !important;
                     box-shadow: 0px 4px 4px 4px #00000040;
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
