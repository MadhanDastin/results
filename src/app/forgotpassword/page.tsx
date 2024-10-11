"use client";
import React from 'react';
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import './forgot.css'

type FormValues = {
    surname: string;
    givenNames: string;
    password: string;
};

const ForgotPassword = () => {

    const router = useRouter();
    const handleHomeClick = () => {
        router.push("/login");
    };



    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }, setError
    } = useForm<FormValues>({
        mode: 'onChange', // Check form validity on every change
        reValidateMode: 'onChange', // Optional: Re-validate the form on every change
    });

    const handleReset = () => {
        reset(); // This will reset the form to its default values
    };

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

        reset();
    };



    return (
        <div className="loginPage vh-100">
            <div className="container-fluid">
                <div className="row align-items-center justify-content-center">





                    <div className="col-md-4 offset-md-4 d-flex justify-content-center align-items-center">
                        <div className="formCard p-3">
                            <h2 className="loginTitle mt-2 py-2 mb-3">Forgot Password <Image src="/images/Group 28861.png" alt="Logo" width={28} height={28} /></h2>




                            <form className="w-100" onSubmit={handleSubmit(onSubmit)}>
                                <div className="mb-2">
                                    <label className="form-label mb-0 ps-4 ms-2">Surname *</label>
                                    <input
                                        type="text"
                                        autoComplete="off"
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
                                            {errors.givenNames.message}
                                        </span>
                                    )}
                                </div>

                                <div className="mb-2">
                                    <label className="form-label mb-0 ps-4 ms-2">SLF Number * </label>
                                    <input
                                        type="password"
                                        autoComplete="off"
                                        className={`form-control inputField ${errors.password ? 'is-invalid' : ''}`}
                                        placeholder="Password/SLF NO"
                                        {...register('password', {
                                            required: 'SLF No is required',
                                            minLength: {
                                                value: 12,
                                                message: 'SLF No must be at least 12 characters',
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

                            </form>
                            <div className="d-flex align-items-center justify-content-evenly mt-4 pt-2 mb-4">

                                <button className="btn btn-outline-info  btn-md customButton" onClick={handleHomeClick}>Back to Login <Image src="/images/Vector (1).png" alt="Logo" width={12} height={12} /></button>
                                <button className="btn btn-outline-info  btn-md customButton" onClick={handleReset}>Reset <Image src="/images/Group.png" alt="Logo" width={12} height={12} /></button>
                            </div>


                        </div>
                    </div>

                </div>

            </div>
        </div>

    );
};

export default ForgotPassword;
