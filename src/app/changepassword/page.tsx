"use client";
import React from 'react';
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useForm,SubmitHandler } from 'react-hook-form';
import { useRouter } from 'next/navigation';
// import './changepassword.css'

type FormValues = {
    surname: string;
    givenNames: string;
    password: string;
};

const ForgotPassword = () => {

    const router = useRouter();
    const handleHomeClick = () => {
        router.push("/");
    };

    const handleReset = () => {
        reset(); // This will reset the form to its default values
    };

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isValid }, setError,
    } =  useForm<FormValues>({
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
                console.log("ForgotPassword successful:", result);
                alert("ForgotPassword successful!");
                reset(); // Reset form fields after successful login
            } else {
                // Handle API error response
                console.error("ForgotPassword failed:", result.message);
                alert(`ForgotPassword failed: ${result.message}`);
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


                 

                    
                    <div className="col-md-4 d-flex justify-content-center align-items-center">
                        <div className="formCard p-3">
                            <h2 className="loginTitle mt-2 py-2 mb-3">Change Password <Image src="/images/Group 96.png" alt="Logo" width={28} height={28} /></h2>




                            <form className="w-100" onSubmit={handleSubmit(onSubmit)}>
                

                                <div className="mb-2">
                                    <label className="form-label mb-0 ps-4 ms-2">Current Password * </label>
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
                                    {errors.password && <span className={"invalid-feedback mb-0 ps-4 ms-2 mt-0"}>
                                        {errors.password.message?.toString()}
                                    </span>}

                                  
                                </div>

                                <div className="mb-2">
                                    <label className="form-label mb-0 ps-4 ms-2">New Password * </label>
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
                                    {errors.password && <span className={"invalid-feedback mb-0 ps-4 ms-2 mt-0"}>
                                        {errors.password.message?.toString()}
                                    </span>}

                                  
                                </div>

                                <div className="d-flex justify-content-center mt-3">
                                    <button type="submit" className="btn btn-primary custom-button">
                                        Submit &nbsp;

                                        <Image src="/images/Group 85.png" alt="Logo" width={20} height={20} />

                                    </button>
                                </div>
                                <div className="d-flex align-items-center justify-content-evenly mt-4 pt-2 mb-4">
                               
                                <button className="btn btn-outline-info  btn-sm customButton mx-3" onClick={handleHomeClick}>Back to Login <Image src="/images/Vector (1).png" alt="Logo" width={12} height={12} /></button>
                                <button className="btn btn-outline-info  btn-sm customButton mx-3" onClick={handleReset}>Reset <Image src="/images/Group.png" alt="Logo" width={12} height={12} /></button>
                            </div>

                            </form>

                           
                        </div>
                    </div>
                   
                </div>

            </div>
                </div>

    );
};

export default ForgotPassword;
