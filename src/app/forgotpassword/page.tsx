"use client";
import React, { useEffect, useState, Suspense } from 'react';
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useRouter, useSearchParams } from 'next/navigation';
// import './forgot.css';
import dynamic from 'next/dynamic';

type FormValues = {
    surname: string;
    givenNames: string;
    password: string;
};

const ForgotPassword = () => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const [results, setResults] = useState<string | null>(null);

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
        reValidateMode: 'onChange',
        defaultValues: {
            surname: searchParams.get('surname') || '',
            givenNames: searchParams.get('givennames') || '',
            password: searchParams.get('passwordrec') || '',
        }, // Optional: Re-validate the form on every change
    });

    const handleReset = () => {
        reset({
            surname: '',
            givenNames: '',
            password: '',
        }, {
            keepErrors: false, // This will clear the validation errors
        });
    };



    useEffect(() => {
        var results = searchParams.get('results');
        setResults(results)
    }, [searchParams])

    const handleloginClick = () => {
        router.push(`/login?results=${results}`);
    };

    // const onSubmit: SubmitHandler<FormValues> = async (data: FormValues) => {
    //     console.log('form data ', data);

    // };
    const onSubmit: SubmitHandler<FormValues> = async (data: FormValues) => {
        try {
            if (results === '12') {
            const response = await fetch('https://devapi.dastintechnologies.com/api/v1/twl/forgot', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    lastname: data.surname.toUpperCase(),
                    givennames: data.givenNames.toUpperCase(),
                    slfnumber: data.password,
                }),
            });

            if (!response.ok) {
                router.push(`/invalid?results=${results}&surname=${data.surname}&givennames=${data.givenNames}&password=${data.password}`);
                throw new Error('Failed to reset password');

            }
            else {

                const responseData = await response.json();
                console.log(responseData);


                router.push(`/password?password=${responseData.data.password}&results=${results}`);
            }
        } 
        else  if (results === 'STEM') {
            const response = await fetch('https://devapi.dastintechnologies.com/api/v1/stem/forgot', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    lastname: data.surname.toUpperCase(),
                    givennames: data.givenNames.toUpperCase(),
                    slfnumber: data.password,
                }),
            });

            if (!response.ok) {
                router.push(`/invalid?results=${results}`);
                throw new Error('Failed to reset password');

            }
            else {

                const responseData = await response.json();
                console.log(responseData);


                router.push(`/password?password=${responseData.data.password}&results=${results}`);
            }
        } 
        else  if (results === '10') {
            const response = await fetch('https://devapi.dastintechnologies.com/api/v1/ten/forgot', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    lastname: data.surname.toUpperCase(),
                    givennames: data.givenNames.toUpperCase(),
                    slfnumber: data.password,
                }),
            });

            if (!response.ok) {
                router.push(`/invalid?results=${results}`);
                throw new Error('Failed to reset password');

            }
            else {

                const responseData = await response.json();
                console.log(responseData);


                router.push(`/password?password=${responseData.data.password}&results=${results}`);
            }
        } 
    }
    catch (error) {
            console.error('API error:', error);
            setError('password', { type: 'manual', message: 'Failed to reset password.' });

        }
    };

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <div className="login-Page vh-100">
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



                        <div className="col-md-4  d-flex justify-content-center align-items-center">
                            <div className="form-Card p-3">
                                <h2 className="login-Title mt-2 py-2 mb-3">Forgot Password <Image src="/images/Group 28861.png" alt="Logo" width={28} height={28} /></h2>


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

                                            })}

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

                                            })}

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
                                        <label className="form-label mb-0 ps-4 ms-2">SLF Number *  </label>
                                        <input
                                            type="password"
                                            autoComplete="off"
                                            className={`form-control inputField ${errors.password ? 'is-invalid' : ''}`}
                                            placeholder="SLFNO Format:YYYYPRSCHCAND " maxLength={13}
                                            {...register('password', {
                                                required: 'Password is required',
                                                minLength: {
                                                    value: 8,
                                                    message: 'Required 8 - 13 characters',
                                                },
                                                maxLength: {
                                                    value: 13,
                                                    message: 'Password must be maximum 13 characters',
                                                }
                                            })}
                                        />
                                        {!errors.password && <span className={"error-lh mb-0 ps-4 ms-2 mt-0"}>&nbsp;</span>}
                                        {errors.password && (<span className={"invalid-feedback mb-0 ms-5 mt-0 text-end"}>
                                            {errors.password.message?.toString()}
                                        </span>)}



                                    </div>



                                    <div className="d-flex justify-content-center mt-3">
                                        <button type="submit" className="btn btn-primary custom-button d-flex align-items-center justify-content-center">
                                            <span className="d-flex align-items-center">
                                                Submit &nbsp;
                                                <Image src="/images/Group 85.png" alt="Logo" width={20} height={20} />
                                            </span>
                                        </button>


                                    </div>


                                </form>


                                <div className="d-flex align-items-center justify-content-evenly mt-4 pt-2 mb-4">
                                    <button className="btn btn-outline-info btn-md custom-Button" onClick={handleloginClick}> Login <Image src="/images/Vector (1).png" alt="Logo" width={12} height={12} /></button>
                                    <button className="btn btn-outline-info btn-md custom-Button" onClick={handleReset}>Reset <Image src="/images/Group.png" alt="Logo" width={12} height={12} /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div>
      <h1>Welcome to the Homepage</h1>
      <button onClick={() => setModalVisible(true)}>Show Password Modal</button>
      
      <PasswordModal isVisible={isModalVisible} onClose={() => setModalVisible(false)} />
    </div> */}

                <style>
                    {`

                .small-label{
    font-size: 0.5rem;
    color:#FCE886;
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
                .invalid-feedback{
    color:#FF8200;
    font-weight: bold;
    font-size: 12px;
    line-height: 24px;
    width: 208px;
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
.login-Page {
    
    background: radial-gradient(180.77% 285.2% at 50.05% 54.5%, #006EB9 0.17%, #006EB9 6.13%, #14317F 31.79%);
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-y: scroll;
}
.form-Card {
   height:500px;
    border: 2px solid  #4BB5FF;
    border-radius: 20px;
    box-shadow: 0px 4px 4px 4px #00000040;
    width:330px;                   
     padding: 1.5rem;
}

.login-Title {
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    gap: 10px;
    color: white; /* White text for title */
}

.login-Title svg {
    color: #007bff; /* Customize the arrow color */
    font-size: 18px;
}


    .custombutton {   
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

.custombutton img {
    display: inline-block;
    vertical-align: middle;
}

.input-Field {
    background-color: white; /* White input box */
    border: none;
    border-radius: 5px;
    padding: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width:230px;
    height: 30px;
    margin: 0 auto;
}

.formlabel{
    color:white;
    font-size: 14px;
}

.invalidfeedback{
    color:#FF8200;
    font-weight: bold;
    font-size: 12px;
    line-height: 40px;
    width: 200px;
}
    .invalidfeedbacks{
    color:#FF8200;
    font-weight: bold;
    font-size: 12px;
    line-height: 40px;
    width: 210px;
    }

.custom-Button{
    color: white !important;
    font-size: 12px;
    background-color: #006FBB !important;
     border: 1px solid #006FBB !important;
     box-shadow: 0px 4px 4px 4px #00000040;
}






.form-control.is-invalid, .was-validated .form-control:invalid {
    background-image: none !important;
}


@media (max-width: 768px) {
    
   
  
}


                
                `}
                </style>
            </div>
        </Suspense>
    );
};

export default dynamic(() => Promise.resolve(ForgotPassword), { ssr: false });





