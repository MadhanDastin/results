"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import './login.css';
import { IoCloseCircle } from "react-icons/io5";

type FormValues = {
    surname: string;
    givenNames: string;
    password: string;
};

const Login = () => {
    const router = useRouter();

    const handleHomeClick = () => {
        router.push("/");
    };

    const handleReset = () => {
        reset(); // This will reset the form to its default values
    };

    const [loginResponse, setLoginResponse] = useState<any>(null);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isValid }, setError,
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
            // Make a POST request to the login API
            const response = await fetch("https://devapi.dastintechnologies.com/api/v1/twl/login", {
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
                if (result.token) {
                    localStorage.setItem('authToken', result.token); // Store token in localStorage
                    console.log("Token stored:", result.token);
                }
                // Handle successful login
                console.log("Login successful:", result);
                alert("Login successful!");
                reset(); // Reset form fields after successful login
                const encodedResult = encodeURIComponent(JSON.stringify(result));
                router.push(`/twl?response=${encodedResult}`);
                // router.push(`/twl?response=${encodeURIComponent(JSON.stringify(result))}`);
                // router.push("/twl");
                // router.push({
                //     pathname: "/twl",
                //     query: { data: JSON.stringify(result) }, // Pass data as a query parameter
                // });
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
                                <div className="mb-2">
                                    <label className="form-label mb-0 ps-4 ms-2">Surname *</label>
                                    <input
                                        type="text"
                                        className={`form-control inputField ${errors.surname ? 'is-invalid' : ''}`}
                                        placeholder="Surname"
                                        {...register('surname', {
                                            required: 'Surname is required',
                                            pattern: {
                                                value: /^[A-Za-z]+$/i,
                                                message: 'Invalid - Numbers not allowed',
                                            },
                                            onChange: (e) => {
                                                e.target.value = e.target.value.toUpperCase(); // Convert to uppercase
                                            },
                                        })}
                                        onKeyDown={(e) => handleKeyDown(e, 'surname')} // Handle key down event directly
                                    />
                                    {!errors.surname && (
                                        <span className={"mb-0 ps-4 ms-2 mt-0 error-lh"}>&nbsp;</span>
                                    )}

                                    {errors.surname && (
                                        <span className={"invalid-feedback mb-0 ps-4 ms-2 mt-0"}>
                                        <IoCloseCircle className='error-icon' />  {errors.surname.message}
                                        </span>
                                    )}
                                </div>

                                <div className="mb-2">
                                    <label className="form-label mb-0 ps-4 ms-2">Given Names *</label>
                                    <input
                                        type="text"
                                        className={`form-control inputField ${errors.givenNames ? 'is-invalid' : ''}`}
                                        placeholder="First Name + Middle Name"
                                        {...register('givenNames', {
                                            required: 'Given names are required',
                                            pattern: {
                                                value: /^[A-Za-z\s]+$/i, // Allow letters and spaces
                                                message: 'Invalid - Numbers not allowed',
                                            },
                                            onChange: (e) => {
                                                e.target.value = e.target.value.toUpperCase(); // Convert to uppercase
                                            },
                                        })}
                                        onKeyDown={(e) => handleKeyDown(e, 'givenNames')} // Handle key down event directly
                                    />
                                    {!errors.givenNames && (
                                        <span className={"mb-0 ps-4 ms-2 mt-0 error-lh"}>&nbsp;</span>
                                    )}
                                    {errors.givenNames && (
                                       
                                            <span className={"invalid-feedback mb-0 ps-4 ms-2 mt-0"}>
                                            <IoCloseCircle className='error-icon' /> {errors.givenNames.message}
                                            </span>
                                        
                                    )}
                                </div>

                                <div className="mb-2">
                                    <label className="form-label mb-0 ps-4 ms-2">Password * <span className="small-label">(SLF NO Format:YYYYPRSCHCAND)</span> </label>
                                    <input
                                        type="password"
                                        className={`form-control inputField ${errors.password ? 'is-invalid' : ''}`}
                                        placeholder="Password/SLF NO"
                                        {...register('password', {
                                            required: 'Password is required',
                                            minLength: {
                                                value: 12,
                                                message: 'Password must be at least 12 characters',
                                            }
                                        })}
                                    />
                                    {!errors.password && <span className={"error-lh mb-0 ps-4 ms-2 mt-0"}>&nbsp;</span>}
                                    {errors.password && (<span className={"invalid-feedback mb-0 ps-4 ms-2 mt-0"}> 
                                      <IoCloseCircle className='error-icon' />   {errors.password.message?.toString()}
                                    </span>)}

                                    <div className='text-center mb-4 pb-2'>
                                        <a href="/forgotpassword" className="forgotPassword"
                                        ><Image src="/images/Vector.png" alt="Logo" width={10} height={10} />  Forgot Password?</a>
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
                                <button className="btn  btn-sm customButton">Help <Image src="/images/Vector (2).png" alt="Logo" width={12} height={12} /></button>
                                <button className="btn btn-outline-info  btn-sm customButton mx-3" onClick={handleHomeClick}>Home <Image src="/images/Vector (1).png" alt="Logo" width={12} height={12} /></button>
                                <button className="btn btn-outline-info  btn-sm customButton" onClick={handleReset}>Reset <Image src="/images/Group.png" alt="Logo" width={12} height={12} /></button>
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
        </div>

    );
};

export default Login;
