"use client";
import React, { useEffect, useState, Suspense } from 'react';
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useForm } from 'react-hook-form';
import { useRouter, useSearchParams } from 'next/navigation';
import './invalid.css'
import dynamic from 'next/dynamic';

type FormValues = {
    surname: string;
    givenNames: string;
    password: string;
};

const InvalidPassword = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const [password, setPassword] = useState<string | null>('');

    const handleLoginRedirect = () => {
        if (window.history.length > 1) {
            router.back(); // Go back if there's a history
        } else {
            router.push('/login'); // Fallback to login page if no history
        }
    };

    useEffect(() => {
        var password = searchParams.get('password');
        setPassword(password)
    }, [searchParams])

    console.log(password);
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




    return (
        <Suspense fallback={<div>Loading...</div>}>
            <div className="loginPage vh-100">
                <div className="container-fluid">
                    <div className="row align-items-center justify-content-center">

                        <div className="col-md-4 d-flex justify-content-center align-items-center">
                            <div className="formCard p-3">
                                <h2 className="loginTitle mt-5 pb-2 mb-3">Forgot Password <Image src="/images/Group 28861.png" alt="Logo" width={28} height={28} />
                                </h2>
                                <form className="w-100" >
                                    <div className='d-flex justify-content-center align-items-center'>
                                        <div className='card border-0 rounded'>
                                            <div className="card-header rounded d-flex justify-content-center align-items-center bg-primary text-white w-100 py-4">
                                                <p className="fs-18 mb-0">Invalid Credentials!</p>
                                            </div>
                                            <div className="card-body rounded bg-white w-100">
                                                <div className='d-flex justify-content-center align-items-center my-4'>
                                                    <Image src="/images/Vector (10).png" alt="Logo" width={60} height={60} />
                                                </div>
                                                <div className='d-flex justify-content-center align-items-center my-4 pt-2'>
                                                    <p className='fs-6 fw-bold'>Please try again</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-center mt-5 pt-3">
                                        <button type="submit" className="btn btn-primary custom-button btn-sm buttontext" onClick={(e) => {
                                            e.preventDefault(); // Prevent default form submission
                                            handleLoginRedirect();
                                        }}>
                                         Login&nbsp;&nbsp;

                                            <Image src="/images/Vector (1).png" alt="Logo" width={15} height={15} />

                                        </button>
                                    </div>


                                </form>


                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </Suspense>
    );
};

export default dynamic(() => Promise.resolve(InvalidPassword), { ssr: false });
