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
    const username = searchParams.get('surname');
    const givenname = searchParams.get('givennames');
    const passwordfield=searchParams.get('password');
    const [password, setPassword] = useState<string | null>('');
    const [results, setResults] = useState<string | null>(null);
    const handleLoginRedirect = () => {
     
            router.push(`/forgotpassword?surname=${username}&givennames=${givenname}&passwordrec=${passwordfield}&results=${results}`); // Go back if there's a history
        
       
    };

    
    const getTitle = (title: string) => {

        switch (title) {
            case "10":
                return "GRADE 10 RESULTS"
            case "12":
                return "GRADE 12 RESULTS"
            case "STEM":
                return "STEM RESULTS"


            default:
                break;
        }
    }

    const resultTitle = getTitle(results as string)

    useEffect(() => {
        var password = searchParams.get('password');
        setPassword(password)
    }, [searchParams])

    useEffect(() => {
        var results = searchParams.get('results');
        console.log('Retrieved results:', results);
        setResults(results)
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

                    <div className="col-md-4 text-center">
                            <div>
                                <div>
                                    <Image src="/images/Group 95.png" alt="Logo" width={100} height={100} />
                                </div>
                                <div className="mt-0">
                                    <h2 className="gradeTitle mt-2">{resultTitle}</h2>
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

                        <div className="col-md-4 d-flex justify-content-center align-items-center">
                            <div className="formCard p-3">
                                <h2 className="loginTitle mt-5 pb-2 mb-3">Forgot Password <Image src="/images/Group 28861.png" alt="Logo" width={28} height={28} />
                                </h2>
                                <form className="w-100" >
                                    <div className='d-flex justify-content-center align-items-center'>
                                        <div className='card border-0 rounded invalid-card'>
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
                                         Ok&nbsp;&nbsp;

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
