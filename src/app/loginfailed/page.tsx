"use client";
import React, { useEffect, useState, Suspense } from 'react';
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useRouter, useSearchParams } from 'next/navigation';
// import './login.css';

import dynamic from 'next/dynamic';
type FormValues = {
    surname: string;
    givenNames: string;
    password: string;
};

const Login = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const username = searchParams.get('surname');
    const givenname = searchParams.get('givenNames');
    const [results, setResults] = useState<string | null>(null);


    const handleloginClick = () => {
        router.back();
    };

    const handleReset = () => {
        reset(); // This will reset the form to its default values
    };

    const [loginResponse, setLoginResponse] = useState<any>(null);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }, setError,
    } = useForm<FormValues>({
        mode: 'onChange', // Check form validity on every change
        reValidateMode: 'onChange', // Optional: Re-validate the form on every change
    });

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, fieldName: keyof FormValues) => {
        const isNumeric = /^[0-9]$/.test(e.key); // Check if the pressed key is a numeric value
        if (isNumeric) {
            e.preventDefault(); // Prevent input of numeric values
            // Set an error for the specific field
            setError(fieldName, {
                type: "manual",
                message: "Only letters are allowed"
            });
        }
    };

    const onSubmit: SubmitHandler<FormValues> = async (data: FormValues) => {
        console.log('form data ', data);
        try {
            if (results === '12') {
                // Make a POST request to the login API
                const response = await fetch("https://devapi.dastintechnologies.com/api/v1/twl/login", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        lastname: data.surname.toUpperCase(),
                        givennames: data.givenNames.toUpperCase(),
                        password: data.password,
                    }),
                });

                const result = await response.json();

                if (response.ok) {
                    if (result.token) {
                        localStorage.setItem('authToken', result.token); // Store token in localStorage
                        console.log("Token stored:", result.token);
                    }
                    // Handle successful login
                    console.log("Login successful:", result);
                    // alert("Login successful!");
                    reset(); // Reset form fields after successful login
                    const encodedResult = encodeURIComponent(JSON.stringify(result));
                    router.push(`/twl?response=${encodedResult}`);

                } else {
                    // Handle API error response
                    console.error("Login failed:", result.message);
                    alert(`Login failed: ${result.message}`);
                }
            } else {
                // alert('Work In Progress');
                return;
            }
        } catch (error) {
            console.error("An error occurred during login:", error);
            alert("An error occurred. Please try again.");
        }
        reset();
    };

    useEffect(() => {
        var results = searchParams.get('results');
        setResults(results)
    }, [searchParams])

    console.log("results", results);


    return (
        <Suspense fallback={<div>Loading...</div>}>
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
                                    <h2 className="gradeTitle mt-2">{results === '10' ? 'GRADE 10 RESULTS' : results === '12' ? 'GRADE 12 RESULTS' : 'STEM RESULTS'}</h2>
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
                            <div className="formCard p-3 forminput">
                                <h2 className="loginTitle mt-2 py-2 mb-3">Login Failed <Image src="/images/Group 28894.png" alt="Logo" width={29} height={29} /></h2>

                                <form className="w-100" onSubmit={handleSubmit(onSubmit)}>
                                    {/* <div className="d-flex flex-column align-items-center mt-3 text-center">
                                        <div className="mb-4 paratext justify-content-center align-items-center">
                                        <p >
                                            Dear &lt;{username} {givenname}&gt; there seems to be a problem with your Input Details or your Eligibility for Certification.
                                            Please use the <strong>FORGOT PASSWORD</strong> option to recover your password (or) contact your School as you may have issues with MSD Records.
                                            <br /><br /></p></div>
                                            <div className="mb-4 text-end">
                                            <p >   Thank you. - MSD/NDoE
                                        </p>
                                        </div>
                                    </div> */}

                                    <div className="d-flex flex-column align-items-center mt-3 text-center">

                                        <div className="mb-4 paratext justify-content-center align-items-center text-start">
                                            <p>
                                                Dear &lt;{username} {givenname}&gt;, there seems to be a problem with your Input Details or your Eligibility for Certification.
                                                Please use the <strong>FORGOT PASSWORD</strong> option to recover your password (or) contact your School as you may have issues with MSD Records.
                                                <br /><br />
                                            </p>
                                        </div>


                                        <div className="mb-4 text-end w-100 sign">
                                            <p>Thank you. - MSD/NDoE</p>
                                        </div>
                                    </div>


                                    <div className="d-flex justify-content-center mt-3">
                                        <button type="submit" className="btn btn-primary custom-button d-flex align-items-center justify-content-center" onClick={handleloginClick}>
                                            <span className="d-flex align-items-center buttontext">
                                                Login &nbsp;
                                                <Image src="/images/Vector (1).png" alt="Logo" width={20} height={20} />
                                            </span>
                                        </button>
                                    </div>


                                </form>



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

                <style>
                    {`
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
    .sign{
    color:white;
    }
    .buttontext{
    font-size:14px;
    }
.loginPage {
    
    background: radial-gradient(180.77% 285.2% at 50.05% 54.5%, #006EB9 0.17%, #006EB9 6.13%, #14317F 31.79%);
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-y: scroll;
}
    .paratext{
    color:white;
    font-size: 15px;
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


.loginTitle {
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    gap: 10px;
    color: #FF8200;
; /* White text for title */
}

.loginTitle svg {
    color: #007bff; /* Customize the arrow color */
    font-size: 18px;
}

.forminput {
   
    border: 2px solid  #4BB5FF;
    border-radius: 20px;
    box-shadow: 0px 4px 4px 4px #00000040;
    width:330px;                   
     padding: 1.5rem;
}


// .custom-button {   
//     color: #fff;
//     background-image: linear-gradient(to right, #181D6E , #0071BD);
//     border-radius: 10px; /* Rounded corners */
//     font-size: 12px;
//     font-weight: bold;
//     width:150px;
//     height:45px;
// }

.custom-button {   
    color: #fff;
    background-image: linear-gradient(to right, #181D6E, #0071BD);
    border-radius: 10px;
    font-size: 12px;
    font-weight: bold;
    width: 150px;
    height: 45px;
    display: flex;
    align-items: center; /* Vertically align items in the button */
    justify-content: center; /* Horizontally center the content */
    padding: 0 10px; /* Add some horizontal padding */
}

.custom-button img {
    display: inline-block;
    vertical-align: middle;
}
.customButton{
 display: flex;
    align-items: center; /* Vertically align text and image */
    justify-content: center;
    color: white !important;
    font-size: 12px;
    background-color: #006FBB !important;
     border: 1px solid #006FBB !important;
     box-shadow: 0px 4px 4px 4px #00000040;
     height:30px;
     width:65px;
}
.customButton img {
    display: inline-block;
    vertical-align: middle;
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
    color:#FF8200;
    font-weight: bold;
    font-size: 12px;
    line-height: 24px;
    width: 208px;
}



.small-label{
    font-size: 0.5rem;
    color:#FCE886;
}

.forgotPassword {
    font-size: 0.55rem;
    color: white !important;
    text-decoration: none;
}

.error-icon {
    margin-top: -1px;
}

.form-control.is-invalid, .was-validated .form-control:invalid {
    background-image: none !important;
}

@media (max-width: 768px) {
    .gradeTitle {
        font-size: 1.5rem;
    }
   
  
}


`}

                </style>
            </div>
        </Suspense>
    );
};

export default dynamic(() => Promise.resolve(Login), { ssr: false });
