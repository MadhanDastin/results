"use client";
import React, { Suspense, useEffect, useState } from 'react';
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useForm,SubmitHandler } from 'react-hook-form';
import { useRouter, useSearchParams } from 'next/navigation';
import './changepassword.css'
import dynamic from 'next/dynamic';


type FormValues = {
    
    currentPassword: string;
    newPassword: string;
    confirmPassword: string;
};

const ChangePassword = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    
    const [results, setResults] = useState<string | null>(null);
    const [formData, setFormData] = useState<FormValues | null>(null);
    const [slf, setSlf] = useState<any>(null);
    console.log(slf);
    
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

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }, setError, clearErrors
    } = useForm<FormValues>({
        mode: 'onChange', // Check form validity on every change
        reValidateMode: 'onChange', // Optional: Re-validate the form on every change
    });
console.log(formData);

    const handleReset = () => {
        reset({
            currentPassword: '',
            newPassword: '',
            confirmPassword: '',
        }, {
            keepErrors: false, // This will clear the validation errors
        });
    };

    useEffect(() => {
        const data = searchParams.get('data');
        if (data) {
          const decodedData: FormValues = JSON.parse(decodeURIComponent(data));
          setFormData(decodedData);
        }
      }, [searchParams]);

    useEffect(() => {
        var results = searchParams.get('results');
        setResults(results)
    }, [searchParams])

    const handleHomeClick = () => {
        router.push(`/login?results=${results}`);
    };

    useEffect(() => {
        const slfData = searchParams.get('student');
        if (slfData) {
          try {
            const parsedSlf = JSON.parse(decodeURIComponent(slfData)); // Parse the string to an object
            setSlf(parsedSlf);
          } catch (error) {
            console.error('Error parsing student data', error);
          }
        }
      }, [searchParams]);
    


   
    const onSubmit: SubmitHandler<FormValues> = async (data: FormValues) => {
        console.log('slf ', slf);
        try {
            if (results === '12') {
            const response = await fetch('https://devapi.dastintechnologies.com/api/v1/twl/reset', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    lastname: slf.lastname,
                    givennames: slf.givennames,
                    slfnumber: slf.slfnumber,
                    newPassword:data.newPassword,
                }),
            });

            if (!response.ok) {
                router.push(`/invalid?results=${results}`);
                throw new Error('Failed to reset password');

            }
            else {

                const responseData = await response.json();
                console.log(responseData);


                router.push(`/changesuccess?results=${results}`);
            }
        } 
        else  if (results === 'STEM') {
            const response = await fetch('https://devapi.dastintechnologies.com/api/v1/stem/reset', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    lastname: slf.lastname,
                    givennames: slf.givennames,
                    slfnumber: slf.slfnumber,
                    newPassword:data.newPassword,
                }),
            });

            if (!response.ok) {
                router.push(`/invalid?results=${results}`);
                throw new Error('Failed to reset password');

            }
            else {

                const responseData = await response.json();
                console.log(responseData);


                router.push(`/changesuccess?results=${results}`);
            }
        } 
        else  if (results === '10') {
            const response = await fetch('https://devapi.dastintechnologies.com/api/v1/ten/reset', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    lastname: slf.lastname,
                    givennames: slf.givennames,
                    slfnumber: slf.slfnumber,
                    newPassword:data.newPassword,
                }),
            });

            if (!response.ok) {
                router.push(`/invalid?results=${results}`);
                throw new Error('Failed to reset password');

            }
            else {

                const responseData = await response.json();
                console.log(responseData);


                router.push(`/changesuccess?results=${results}`);
            }
        } 
    }
    catch (error) {
            console.error('API error:', error);
          

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
                            <h2 className="loginTitle mt-2 py-2 mb-3">Change Password <Image src="/images/Group 96.png" alt="Logo" width={28} height={28} /></h2>




                            <form className="w-100" onSubmit={handleSubmit(onSubmit)}>
                

                                <div className="mb-2">
                                    <label className="form-label mb-0 ps-4 ms-2">SLF Number * </label>
                                    <input
                                        type="password"
                                        autoComplete="off"
                                        className={`form-control inputField ${errors.currentPassword ? 'is-invalid' : ''}`}
                                        placeholder="Password/SLF NO"  maxLength={12}
                                        {...register('currentPassword', {
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
                                    {!errors.currentPassword && <span className={"error-lh mb-0 ps-4 ms-2 mt-0"}>&nbsp;</span>}
                                    {errors.currentPassword && <span className={"invalid-feedback mb-0 ps-4 ms-2 mt-0"}>
                                        {errors.currentPassword.message?.toString()}
                                    </span>}

                                  
                                </div>

                                <div className="mb-2">
                                    <label className="form-label mb-0 ps-4 ms-2">New Password * </label>
                                    <input
                                        type="password"
                                        className={`form-control inputField ${errors.newPassword ? 'is-invalid' : ''}`}
                                        placeholder="Password/SLF NO"
                                        {...register('newPassword', {
                                            required: 'Password is required',
                                            minLength: {
                                                value: 12,
                                                message: 'Password must be at least 12 characters',
                                            }
                                        })}
                                    />
                                    {!errors.newPassword && <span className={"error-lh mb-0 ps-4 ms-2 mt-0"}>&nbsp;</span>}
                                    {errors.newPassword && <span className={"invalid-feedback mb-0 ps-4 ms-2 mt-0"}>
                                        {errors.newPassword.message?.toString()}
                                    </span>}

                                  
                                </div>

                                <div className="mb-2">
                                    <label className="form-label mb-0 ps-4 ms-2">Confirm Password * </label>
                                    <input
                                        type="password"
                                        className={`form-control inputField ${errors.confirmPassword ? 'is-invalid' : ''}`}
                                        placeholder="Password/SLF NO"
                                        {...register('confirmPassword', {
                                            required: 'Password is required',
                                            minLength: {
                                                value: 12,
                                                message: 'Password must be at least 12 characters',
                                            }
                                        })}
                                    />
                                    {!errors.confirmPassword && <span className={"error-lh mb-0 ps-4 ms-2 mt-0"}>&nbsp;</span>}
                                    {errors.confirmPassword && <span className={"invalid-feedback mb-0 ps-4 ms-2 mt-0"}>
                                        {errors.confirmPassword.message?.toString()}
                                    </span>}

                                  
                                </div>


                                <div className="d-flex justify-content-center mt-3">
                                    <button type="submit" className="btn btn-primary custom-button">
                                        Submit &nbsp;

                                        <Image src="/images/Group 85.png" alt="Logo" width={20} height={20} />

                                    </button>
                                </div>
                                <div className="d-flex align-items-center justify-content-evenly mt-4 pt-2 mb-4">
                               
                                <button className="btn btn-outline-info  btn-sm customButton mx-3" onClick={handleHomeClick}>Login <Image src="/images/Vector (1).png" alt="Logo" width={12} height={12} /></button>
                                <button className="btn btn-outline-info  btn-sm customButton mx-3" onClick={handleReset}>Reset <Image src="/images/Group.png" alt="Logo" width={12} height={12} /></button>
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

export default dynamic(() => Promise.resolve(ChangePassword), { ssr: false });

