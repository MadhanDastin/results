"use client";
import React from 'react';
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import './invalid.css'

type FormValues = {
    surname: string;
    givenNames: string;
    password: string;
};

const YourPassword = () => {

    const router = useRouter();
   
    const handleLoginRedirect = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault(); // Prevent the default button behavior
        router.push('/login');// Navigate to the login page
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

  

    


    return (
        <div className="loginPage vh-100">
            <div className="container-fluid">
                <div className="row align-items-center justify-content-center">


                 

                    
                    <div className="col-md-4 d-flex justify-content-center align-items-center">
                        <div className="formCard p-3">
                        <h4 className="loginTitle mt-2 py-2 mb-3">&quot;Invalid Credentials! Please try again...&quot;</h4>





                            <form className="w-100" >
                

                               

                               
                                <div className="d-flex justify-content-center mt-3">
                                    <button type="submit" className="btn btn-primary custom-button" onClick={handleLoginRedirect}>
                                        Back to Login &nbsp;

                                        <Image src="/images/Group 85.png" alt="Logo" width={20} height={20} />

                                    </button>
                                </div>
                              

                            </form>

                           
                        </div>
                    </div>
                   
                </div>

            </div>
                </div>

    );
};

export default YourPassword;
