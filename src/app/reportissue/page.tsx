"use client";
import React, { useEffect, useState, Suspense } from 'react';
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useRouter, useSearchParams } from 'next/navigation';
// import './forgot.css';
import dynamic from 'next/dynamic';

type FormValues = {
    selectedOptions: string[];
};

const ReportIssue = () => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const [results, setResults] = useState<string | null>(null);
    const [remarks, setRemarks] = useState('');
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

    const handleReset = () => {
        reset({

        }, {
            keepErrors: false, // This will clear the validation errors
        });
    };



    useEffect(() => {
        var results = searchParams.get('results');
        setResults(results)
    }, [searchParams])

    const handleHomeClick = () => {
        router.back();
    };

    const [selectedIssues, setSelectedIssues] = useState<string[]>([]);
    const [remark, setRemark] = useState<string>('');
    const [file, setFile] = useState<File | null>(null);

    const issues = [
        'Error in Surname',
        'Error in Given name(s)',
        'Error in Gender',
        'Error in School detail(s)',
        'Error in Subject(s)',
        'Results not displayed',
        'Any other issue',
    ];

    const handleIssueChange = (issue: string) => {
        setSelectedIssues((prev) =>
            prev.includes(issue) ? prev.filter((i) => i !== issue) : [...prev, issue]
        );
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = event.target.files?.[0] || null;
        setFile(selectedFile);
    };

    //   const handlingSubmit = (event: React.FormEvent) => {
    //     event.preventDefault();
    //     console.log('Selected Issues:', selectedIssues);
    //     console.log('Remark:', remark);
    //     console.log('File:', file);
    //     // Add logic to submit the form data to your server/API
    //   };
    const onSubmit: SubmitHandler<FormValues> = async (data: FormValues) => {
        try {
            if (results === '12') {
                const response = await fetch('https://devapi.dastintechnologies.com/api/v1/twl/forgot', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({

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
                    router.push(`/invalid?results=${results}`);
                    throw new Error('Failed to reset password');

                }
                else {

                    const responseData = await response.json();
                    console.log(responseData);


                    router.push(`/password?password=${responseData.data.password}&results=${results}`);
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
                                <h2 className="login-Title mt-2 py-2 mb-3">Report an Issue <Image src="/images/Group 28952.png" alt="Logo" width={28} height={28} /></h2>


                                <form className="w-100" onSubmit={handleSubmit(onSubmit)}>
                                    <div className='row'>
                                        <div className='mx-4 px-5'>
                                            {/* <label>
                                                <input type="checkbox" />
                                                <span className="custom-checkbox"></span> Label Text
                                            </label> */}
                                            {issues.map((issue) => (
                                                <div key={issue} className="issues text-start checkbox-container">
                                                    <label htmlFor={issue}><input
                                                        type="checkbox"
                                                        id={issue}
                                                        name={issue}
                                                        value={issue}
                                                        onChange={() => handleIssueChange(issue)}
                                                        checked={selectedIssues.includes(issue)}

                                                    />
                                                    {issue}</label>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="upload-section text-center mt-4">
                                            <p className="upload-section" onChange={handleFileChange}>
                                                <Image src="/images/Vector (11).png" alt="Logo" width={15} height={15} /> Add Screenshot
                                            </p>
                                            {/* <input type="file" id="screenshot" onChange={handleFileChange} /> */}
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
                                            <button type="submit" className="btn btn-primary custom-button d-flex align-items-center justify-content-center">
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

                {/* <div>
      <h1>Welcome to the Homepage</h1>
      <button onClick={() => setModalVisible(true)}>Show Password Modal</button>
      
      <PasswordModal isVisible={isModalVisible} onClose={() => setModalVisible(false)} />
    </div> */}

                <style>
                    {`

                    .issues {
  text-align: center; /* Center align the content */
  color: white; /* Make text color white */
  font-size: 0.8rem; /* Reduce font size */
  
}

.issue-item {
  margin-bottom: 10px;
  display: flex;
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

.upload-section{
 color: white;
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

export default dynamic(() => Promise.resolve(ReportIssue), { ssr: false });





