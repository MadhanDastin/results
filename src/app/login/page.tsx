"use client";
import React, { useEffect, useState, Suspense } from 'react';
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useRouter, useSearchParams } from 'next/navigation';
// import './login.css';

import dynamic from 'next/dynamic';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
type FormValues = {
    surname: string;
    givenNames: string;
    password: string;
};



const Login = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [results, setResults] = useState<string | null>(null);
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };


    const handleHomeClick = () => {
        router.push("/");
    };

    const handleReset = () => {
        reset(); // This will reset the form to its default values
    };

    const getTitle = (title: string) => {
        switch (title) {
            case "10":
                return () => {
                    router.push(`/forgotpassword?results=10`);
                };
            case "12":
                return () => {
                    router.push(`/forgotpassword?results=12`);
                };
            case "STEM":
                return () => {
                    router.push(`/forgotpassword?results=STEM`);
                };
            default:
                return () => { }; // Return a no-op function for the default case
        }
    }

    const resultsTitle = getTitle(results as string);

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


    // const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, fieldName: keyof FormValues) => {
    //     const isNumeric = /^[0-9]$/.test(e.key); // Check if the pressed key is a numeric value
    //     if (isNumeric) {
    //         e.preventDefault(); // Prevent input of numeric values
    //         // Set an error for the specific field
    //         setError(fieldName, {
    //             type: "manual",
    //             message: "Only letters are allowed"
    //         });
    //     }
    // };

    // const onSubmit: SubmitHandler<FormValues> = async (data: FormValues) => {
    //     console.log('form data ', data);
    //     try {
    //         if (results === '12') {
    //             // Make a POST request to the login API
    //             const response = await fetch("https://devapi.dastintechnologies.com/api/v1/twl/login", {
    //                 method: "POST",
    //                 headers: {
    //                     "Content-Type": "application/json",
    //                 },
    //                 body: JSON.stringify({
    //                     lastname: data.surname.toUpperCase(),
    //                     givennames: data.givenNames.toUpperCase(),
    //                     password: data.password,
    //                 }),
    //             });

    //             const result = await response.json();

    //             if (response.ok) {
    //                 if (result.token) {
    //                     localStorage.setItem('authToken', result.token); // Store token in localStorage
    //                     console.log("Token stored:", result.token);
    //                 }
    //                 console.log("Login successful:", result);
    //                 // alert("Login successful!");
    //                 // reset(); // Reset form fields after successful login
    //                 const encodedResult = encodeURIComponent(JSON.stringify(result));
    //                 router.push(`/twl?response=${encodedResult}`);

    //             } else {
    //                 // Handle API error response
    //                 console.error("Login failed:", result.message);
    //                 alert(`Login failed: ${result.message}`);
    //                 router.push('/loginfailed');
    //             }
    //         } else {
    //             alert('Work In Progress');
    //             return;
    //         }
    //     } catch (error) {
    //         console.error("An error occurred during login:", error);
    //         alert("An error occurred. Please try again.");
    //     }
    //     // reset();
    // };

    useEffect(() => {
        var results = searchParams.get('results');
        setResults(results)
    }, [searchParams])

    console.log("results", results);

    const onSubmit: SubmitHandler<FormValues> = async (data: FormValues) => {
        console.log('form data ', data);
    
        try {
            if (results === '12') {
                // POST request for the "12" result
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
                    console.log("Login successful:", result);
                    const encodedResult = encodeURIComponent(JSON.stringify(result));
                    router.push(`/twl?response=${encodedResult}`);
                } else {
                    console.error("Login failed:", result.message);
                    alert(`Login failed: ${result.message}`);
                    router.push('/loginfailed');
                }
            } else if (results === 'STEM') {
                // POST request for the "STEM" result
                const response = await fetch("https://devapi.dastintechnologies.com/api/v1/stem/login", {
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
                    console.log("STEM login successful:", result);
                    const encodedResult = encodeURIComponent(JSON.stringify(result));
                    router.push(`/stem?response=${encodedResult}`);
                } else {
                    console.error("STEM login failed:", result.message);
                    alert(`Login failed: ${result.message}`);
                    router.push('/loginfailed');
                }
            } else {
                alert('Work In Progress');
            }
        } catch (error) {
            console.error("An error occurred during login:", error);
            alert("An error occurred. Please try again.");
        }
    };
    

    

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
                                <h2 className="loginTitle mt-2 py-2 mb-3">Login <Image src="/images/Group 96.png" alt="Logo" width={28} height={28} /></h2>

                                <form className="w-100" onSubmit={handleSubmit(onSubmit)}>
                                    <div className="mb-2">
                                        <label className="form-label mb-0 ps-4 ms-2">Surname *</label>
                                        <input
                                            type="text"
                                            autoComplete="off"
                                            className={`form-control inputField ${errors.surname ? 'is-invalid' : ''}`}
                                            placeholder="Surname" maxLength={30}
                                            {...register('surname', {
                                                required: 'Surname is required',
                                                pattern: {
                                                    value: /^[A-Za-z]+$/i,
                                                    message: 'Invalid - Numbers not allowed',
                                                },
                                                // minLength: {
                                                //     value: 30,
                                                //     message: 'Upto 30 characters',
                                                // }
                                                // onChange: (e) => {
                                                //     e.target.value = e.target.value.toUpperCase(); // Convert to uppercase
                                                // },
                                            })}
                                        // onKeyDown={(e) => handleKeyDown(e, 'surname')} // Handle key down event directly
                                        />
                                        {!errors.surname && (
                                            <span className={"mb-0 ps-4 ms-2 mt-0 error-lh"}>&nbsp;</span>
                                        )}

                                        {errors.surname && (
                                            <span className={"invalid-feedback mb-0 ms-5 mt-0 text-end"}>
                                                {errors.surname.message}
                                            </span>
                                        )}
                                    </div>

                                    <div className="mb-2">
                                        <label className="form-label mb-0 ps-4 ms-2">Given Names *</label>
                                        <input
                                            type="text"
                                            autoComplete="off"
                                            className={`form-control inputField ${errors.givenNames ? 'is-invalid' : ''}`}
                                            placeholder="First Name + Middle Name" maxLength={30}
                                            {...register('givenNames', {
                                                required: 'Given names are required',
                                                pattern: {
                                                    value: /^[A-Za-z\s]+$/i, // Allow letters and spaces
                                                    message: 'Invalid - Numbers not allowed',
                                                },
                                                //  minLength: {
                                                //     value: 30,
                                                //     message: 'Upto 30 characters',
                                                // }
                                                // onChange: (e) => {
                                                //     e.target.value = e.target.value.toUpperCase(); // Convert to uppercase
                                                // },
                                            })}
                                        // onKeyDown={(e) => handleKeyDown(e, 'givenNames')} // Handle key down event directly
                                        />
                                        {!errors.givenNames && (
                                            <span className={"mb-0 ps-4 ms-2 mt-0 error-lh"}>&nbsp;</span>
                                        )}
                                        {errors.givenNames && (

                                            <span className={"invalid-feedback mb-0 ms-5 mt-0 text-end"}>
                                                {errors.givenNames.message}
                                            </span>

                                        )}
                                    </div>
                                    <div className="mb-2">
                                        <label className="form-label mb-0 ps-4 ms-2">Password* <span className="small-label">(Default Password: SLF NO)</span> </label>
                                        <div className="form-group">
                                        <input
                                            type="password"
                                            autoComplete="off"
                                            
                                            className={`form-control inputField ${errors.password ? 'is-invalid' : ''}`}
                                            placeholder="SLFNO Format:YYYYPRSCHCAND" maxLength={12}
                                            {...register('password', {
                                                required: 'Password is required',
                                                minLength: {
                                                    value: 8,
                                                    message: 'Required 8 - 12 characters',
                                                },
                                                maxLength: {
                                                    value: 12,
                                                    message: 'Password must be maximum 12 characters',
                                                }
                                            })}
                                             
                                        />
                                        
                                        {!errors.password && <span className={"error-lh mb-0 ps-4 ms-2 mt-0"}>&nbsp;</span>}
                                        {errors.password && (<span className={"invalid-feedback  mb-0 ms-5 mt-0 text-end"}>
                                               {errors.password.message?.toString()}
                                        </span>)}  </div>
                                        <div className='text-center mb-4 pb-2'>
                                            <a
                                                href={`/forgotpassword?results=${results}`}
                                                className="forgotPassword"
                                                onClick={(e) => {
                                                    e.preventDefault(); // Prevent default anchor click behavior
                                                    resultsTitle(); // Call the handler
                                                }}
                                            >
                                                <Image src="/images/Vector.png" alt="Logo" width={10} height={10} />
                                                Forgot Password?
                                            </a>
                                        </div>                                       

                                    </div>
                                    

                                    

                                    <div className="d-flex justify-content-center mt-3">
                                        <button type="submit" className="btn btn-primary custom-button d-flex align-items-center justify-content-center">
                                            <span className="d-flex align-items-center">
                                                Get My Results &nbsp;
                                                <Image src="/images/Group 85.png" alt="Logo" width={20} height={20} />
                                            </span>
                                        </button>
                                    </div>


                                </form>

                                <div className="d-flex justify-content-center align-items-center mt-4 pt-2 mb-4">
                                    <button className="btn btn-sm customButton">
                                        Help&nbsp; <Image src="/images/Vector (2).png" alt="Logo" width={12} height={12} />
                                    </button>
                                    <button className="btn btn-outline-info btn-sm customButton mx-3" onClick={handleHomeClick}>
                                        Home&nbsp;<Image src="/images/Vector (1).png" alt="Logo" width={12} height={12} />
                                    </button>
                                    <button className="btn btn-outline-info btn-sm customButton" onClick={handleReset}>
                                        Reset&nbsp; <Image src="/images/Group.png" alt="Logo" width={12} height={12} />
                                    </button>
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

                <style>
                    {`
                    .input-group .password-toggle-btn {
                        border-top-left-radius: 0;
                        border-bottom-left-radius: 0;
                        background-color: white;
                        color: black;
                        width: 30px;
                        height: 30px;
                    }
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
    
    background: radial-gradient(180.77% 285.2% at 50.05% 54.5%, #006EB9 0.17%, #006EB9 6.13%, #14317F 31.79%);
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
.input-group{
 position:relative;
 width: 284px;
 margin: 0 auto;
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
    .inputField-pass{
     height: 30px;
  box-sizing:border-box;
  padding-left: 1.5rem;
  width:230px;
    
    }
    .password-toggle-btn {
//   border: none;
//   background: none;
//   color: #666;
//   height: 28px;
 height: 1.5rem;
  width: 1.5rem;
//   background-color: red;
  padding: 4px;
  position: absolute;
  box-sizing:border-box;
  top:50%;
  left:2px;
  transform: translateY(-50%);
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
