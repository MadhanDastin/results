"use client";
import React, { useEffect, useState, Suspense } from 'react';
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useRouter, useSearchParams } from 'next/navigation';
// import './forgot.css';
import dynamic from 'next/dynamic';


type FormValues = {
    feedback: string; // This will hold the selected feedback option (e.g., "Great", "Excellent", etc.)
    remarks: string; 
};

const ServiceFeedback = () => {


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
    

    const [selectedFeedback, setSelectedFeedback] = useState('');
    const [remarks, setRemarks] = useState('');
    const [rating, setRating] = useState<number | null>(null); // Add this line

    const feedbackOptions = [
        {
            text: 'Great and keep up..!!',
            image: '/images/Vector (12).png', // Path to your image
            rating: 5,
        },
        {
            text: 'Excellent',
            image: '/images/Frame.png', // Path to your image
            rating: 4,
        },
        {
            text: 'Very Good',
            image: '/images/Frame (1).png', // Path to your image
            rating: 3,
        },
        {
            text: 'Good',
            image: '/images/Vector (13).png', // Path to your image
            rating: 2,
        },
        {
            text: 'Unsatisfactory',
            image: '/images/Frame 220.png', // Path to your image
            rating: 1,
        },
    ];

    const handleFeedbackSelect = (text: string) => {
        const selectedOption:any = feedbackOptions.find(option => option.text === text);
        setSelectedFeedback(text);
        setRating(selectedOption?.rating); // Set the rating based on the selected feedback
    };


    




    const onSubmit: SubmitHandler<FormValues> = async (data: FormValues) => {
        console.log('Form Values:', data);
        console.log('Form Values slf:', slf);
        console.log('Selected Feedback:', selectedFeedback);
        console.log('Remarks:', remarks);
        console.log('Rating:', rating);
        try {
            if (results === '12') {
                const response = await fetch('https://devapi.dastintechnologies.com/api/v1/twl/feedback', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        studentId: slf.id,
                        slfnumber: slf.slfnumber,
                        lastname: slf.lastname,
                        givennames: slf.givennames,
                        remarks: remarks,
                        rating: rating,
                        submittedAt:  new Date().toISOString(), 

                    }),
                });

                if (!response.ok) {
                    
                   console.log('Failed to submit');

                }
                else {

                    const responseData = await response.json();
                    console.log(responseData);

                    const encodedStudent = encodeURIComponent(JSON.stringify(slf));
                    router.push(`/feedbacksuccess?results=${results}&student=${encodedStudent}`);
                }
            }
            else if (results === 'STEM') {
                const response = await fetch('https://devapi.dastintechnologies.com/api/v1/stem/forgot', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({

                    }),
                });

                if (!response.ok) {
                    console.log('Failed to reset password');

                }
                else {

                    const responseData = await response.json();
                    console.log(responseData);


                    router.push(`/feedbacksuccess`);
                }
            }
            else if (results === '10') {
                const response = await fetch('https://devapi.dastintechnologies.com/api/v1/ten/forgot', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({

                    }),
                });

                if (!response.ok) {
                    console.log('Failed to reset password');

                }
                else {

                    const responseData = await response.json();
                    console.log(responseData);


                    router.push(`/feedbacksuccess`);
                }
            }
        }
        catch (error) {
            console.error('API error:', error);


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
                                <h2 className="login-Title mt-2 py-2 mb-2">Service Feedback <Image src="/images/Group 28911.png" alt="Logo" width={24} height={24} /></h2>


                                <form className="w-100" onSubmit={handleSubmit(onSubmit)}>
                                    <div className=''>

                                        <div className="mb-2 feedtext text-center">
                                            {feedbackOptions.map((option, index) => (
                                                <button
                                                    key={index}
                                                    type="button"
                                                    className={`btn feedbutton w-100 mb-2 text-start ${selectedFeedback === option.text ? 'btn-primary' : 'btn-outline-light'}`}
                                                    onClick={() => handleFeedbackSelect(option.text)}
                                                    style={{
                                                        borderRadius: '8px', // Reduced corner radius
                                                        padding: '6px 8px',  // Reduced padding for smaller button
                                                        fontSize: '14px',    // Reduced font size
                                                        color: selectedFeedback === option.text ? '#fff' : '#bbb',
                                                        maxWidth: '65%',     // Reduce button width, adjust as needed
                                                        height: '35px',      // Reduce button height
                                                    }}
                                                >
                                                    <Image
                                                        src={option.image}
                                                        alt={option.text}
                                                        width={15}
                                                        height={15}
                                                        className="" // Add Bootstrap margin class for spacing
                                                    />
                                                    <span className="ms-2">{option.text}</span>
                                                </button>
                                            ))}
                                        </div>


                                        <div className="mb-2">
                                            <label className="text-white mb-2" htmlFor="remarks">Remarks *</label>
                                            <textarea
                                                id="remarks"
                                                className="form-control"
                                                value={remarks}
                                                onChange={(e) => setRemarks(e.target.value)}
                                                placeholder="Enter any additional remarks"
                                                rows={3}
                                                style={{ borderRadius: '10px' }}
                                            />
                                        </div>

                                        <div className="d-flex justify-content-center mt-3">
                                            <button type="submit" className="btn btn-primary custom-button d-flex align-items-center justify-content-center" >
                                                <span className="d-flex align-items-center">
                                                    Submit &nbsp;
                                                    <Image src="/images/Group 85.png" alt="Logo" width={20} height={20} />
                                                </span>
                                            </button>


                                        </div>
                                    </div>

                                </form>



                            </div>
                        </div>
                    </div>
                </div>



                <style>
                    {`




                    .issues {
  text-align: center; /* Center align the content */
  color: white; /* Make text color white */
  font-size: 0.9rem; /* Reduce font size */
  
}

.issue-item {
  margin-bottom: 10px;
  display: flex;
  justify-content: center; /* Center align the checkbox and label */
  align-items: center;

}

.feedtext{
justify-content: center; /* Center align the checkbox and label */
  align-items: center;
}

.issue-item input {
  margin-right: 8px; /* Space between checkbox and label */
}

.issue-item label {
  font-size: 1rem; /* Match the font size with the .issues */
}

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
.feedbutton{
background-image: linear-gradient(to right, #181D6E, #0071BD);
border:none;
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
    color: white; /* White input box */
    border: none;
    border-radius: 5px;
    padding: 10px;
    // box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
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
    font-size: 16px;
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

export default dynamic(() => Promise.resolve(ServiceFeedback), { ssr: false });





