// "use client";
// import React, { useEffect, useState, Suspense } from 'react';
// import dynamic from 'next/dynamic';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Image from 'next/image';
// import './stem.css';
// import MyNavbar from '../../lib/ui/navbar/navbar';
// import { useRouter, useSearchParams } from 'next/navigation';

// const Marksheet = () => {
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const [studentData, setStudentData] = useState<any>(null);
//   const [studentResultsData, setStudentResultsData] = useState<any>(null);

//   useEffect(() => {
//     const response = searchParams.get('response');

   
//   }, [searchParams]);

//   if (!studentData) {
//     return <div>Loading...</div>;
//   }
  "use client";
import React, { useEffect, useState, Suspense } from "react";
import dynamic from "next/dynamic";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import "./stem.css";
import MyNavbar from "../../lib/ui/navbar/navbar";
import { useRouter, useSearchParams } from "next/navigation";

const Marksheet = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [studentData, setStudentData] = useState<any>(null);
  const [studentResultsData, setStudentResultsData] = useState<any[]>([]);

  useEffect(() => {
    const response = searchParams.get("response");
    
    if (response) {
      // Assume the response is JSON, so we parse it (adapt this part based on your actual response format)
      const parsedResponse = JSON.parse(response);
      console.log('parsedResponse ',parsedResponse);
      const parsedStudentData = parsedResponse.data.student;
      
      // Set student data
      const student = {
        ...parsedStudentData,
        givennames: parsedStudentData.GIVEN_Names,
        lastname: parsedStudentData.Surname,
        sex: parsedStudentData.Gender,
        candidateno: parsedStudentData.Candidate_No,
        rank: parsedStudentData.Seq_No,
        ter: "TBD", // Replace this with actual value if available
        schoolname: parsedStudentData.School_Name,
        region: parsedStudentData.Region,
        province: parsedStudentData.Province,
      };
      setStudentData(student);
      console.log('studentData ',studentData);
      // Set student results data
      const results = [
        {
          subshortname: "BIO",
          subject: "Biology",
          marks: parsedStudentData.Biology_Mark,
          grade: parsedStudentData.Biology_Grade,
          finalstdscore: parsedStudentData.Biology_Remarks,
        },
        {
          subshortname: "CHEM",
          subject: "Chemistry",
          marks: parsedStudentData.Chemistry_Mark,
          grade: parsedStudentData.Chemistry_Grade,
          finalstdscore: parsedStudentData.Chemistry_Remarks,
        },
        {
          subshortname: "MATH",
          subject: "Mathematics",
          marks: parsedStudentData.Mathematics_Mark,
          grade: parsedStudentData.Mathematics_Grade,
          finalstdscore: parsedStudentData.Mathematics_Remarks,
        },
        {
          subshortname: "PHYS",
          subject: "Physics",
          marks: parsedStudentData.Physics_Mark,
          grade: parsedStudentData.Physics_Grade,
          finalstdscore: parsedStudentData.Physics_Remarks,
        },
        {
          subshortname: "ENG",
          subject: "Engineering",
          marks: parsedStudentData.Engineering_Mark,
          grade: parsedStudentData.Engineering_Grade,
          finalstdscore: parsedStudentData.Engineering_Remarks,
        },
        {
          subshortname: "TECH",
          subject: "Technology",
          marks: parsedStudentData.Technology_Mark,
          grade: parsedStudentData.Technology_Grade,
          finalstdscore: parsedStudentData.Technology_Remarks,
        },
      ];
      setStudentResultsData(results);
      console.log('studentResultsData ',studentResultsData);
    }
  }, [searchParams]);

  if (!studentData) {
    return <div>Loading...</div>;
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className='py-1 navbar-wrapper'>
            <MyNavbar />
          </div>
      <div className="container d-flex justify-content-center align-items-center">
      
        <div className="sheet px-4 py-1">
        
          <div className='p-3 bordercolor'>
            {/* Header */}
            <div className="d-flex align-items-center justify-content-between mb-2">
              {/* Left Logo */}
              <div className="logo-start">
                <Image
                  src="/images/pngflagv1.png"
                  alt="Left Logo"
                  width={60}
                  height={60}
                  className="img-fluid"
                />
              </div>

              {/* Title and Subtitle */}
              <div className="text-center flex-grow-1">
                <h4 className="title mb-1">STEM NATIONAL EXAMINATION RESULTS - 2024</h4>
                <h5 className="subtitle">Department of Education</h5>
              </div>

              {/* Right Logo */}
              <div className="logo-end">
                <Image
                  src="/images/img5.png"
                  alt="Right Logo"
                  width={60}
                  height={60}
                  className="img-fluid"
                />
              </div>
            </div>
           <div>
            <div className="d-flex align-items-center justify-content-evenly mb-0 mt-0 ">
              <p className='para'><strong>Published Date:</strong> 01-10-2024</p>
              <p className='para'><strong>Valid Until:</strong> 30-03-2025</p>
            </div></div><hr className="custom-hr mt-0" />
            {/* Candidate & School Details */}
            <div className="row mb-2">
              <div className="col-md-6 d-flex">
                <div className="border p-2 flex-grow-1 borderCustom">
                  <h6 className='textcolor'><strong>Candidate Details</strong></h6>
                  <div className='mt-1 mb-1'>
                    <table>
                      <tbody>
                        <tr className="">
                          <td className='para'><strong>Given Names</strong></td>
                          <td>:</td>
                          <td className='para'>{studentData.givennames}</td>
                        </tr>
                        <tr>
                          <td className='para'><strong>Surname</strong></td>
                          <td>:</td>
                          <td className='para'>{studentData.lastname}</td>
                        </tr>
                        <tr>
                          <td className='para'><strong>Gender</strong></td>
                          <td>:</td>
                          <td className='para'>{studentData.sex}</td>
                        </tr>
                        <tr>
                          <td className='para'><strong>Candidate NO</strong></td>
                          <td>:</td>
                          <td className='para'>{studentData.candidateno}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* School Details */}
              <div className="col-md-6 d-flex">
                <div className="border p-2 flex-grow-1 borderCustom">
                  <h6 className='textcolor'><strong>School Details</strong></h6>
                  <div className='mt-1 mb-1'>
                    <table>
                      <tbody>
                        <tr>
                          <td className='para'><strong>Region</strong></td>
                          <td>:</td>
                          <td className='para'>{studentData.region} ({studentData.Region_code})</td>
                        </tr>
                        <tr>
                          <td className='para'><strong>Province</strong></td>
                          <td>:</td>
                          <td className='para'>{studentData.province} ({studentData.Province_Code})</td>
                        </tr>
                        <tr>
                          <td className='para'><strong>School</strong></td>
                          <td>:</td>
                          <td className='para'>{studentData.schoolname} ({studentData.School_Code})</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            {/* Results Section */}
            <div className="mb-2 border p-2 borderCustom">
              <h6 className='textcolor'><strong>Results</strong></h6>
              <div className="d-flex justify-content-center align-items-center">
                <table className="table table-bordered tabletext">
                  <thead>
                    <tr>
                      <th>SUBJECT ID</th>
                      <th>SUBJECT</th>
                      <th>MARKS</th>
                      <th>GRADE</th>
                      <th>ACHIEVEMENT</th>
                    </tr>
                  </thead>
                  <tbody>
                    {studentResultsData.length > 0 ? (
                      studentResultsData.map((result: any, index: number) => (
                        <tr key={index}>
                          <td>{result.subshortname}</td>
                          <td style={{ textAlign: 'left', paddingLeft: '20px' }}>{result.subject}</td>
                          <td>{result.marks}</td>
                          <td>{result.grade}</td>
                          <td>{result.finalstdscore}</td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={4}>No data available</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Summary Section */}
            {/* <div className="border p-2 mb-2 borderCustom">
              <h6 className='textcolor'><strong>Result Summary</strong></h6>
              <div className="row">
                <div className="col-md-2">
                  <p className='para'><strong>Rank:</strong> {studentData.rank}</p>
                </div>
                <div className="col-md-4">
                  <p className='para'><strong>Tertiary Entrance Rank:</strong> {studentData.ter}</p>
                </div>
                <div className="col-md-6">
                  <p className='para'><strong>Grade 12 Student Population:</strong> {studentData.schoolname}</p>
                </div>
              </div>
            </div> */}

            {/* Terms Section */}
            <div className="terms border p-2 borderCustom justify-content-center align-items-center text-start">
              <h6><strong>Terms:</strong></h6>
              <div justify-content-center align-items-center text-start>
                <p>1) National Department of Education (NDoE) online result is a provisional indicative information copy only; shall not be considered as final. The Original Certificate of Results will be issued by the MSD of NDoE which may be subject to changes for some valid reasons such as corrections from schools.</p>
                <p>2) The downloaded copy of the result in full/ partial will not guarantee any admission into any of the educational institutions within or outside PNG; Admissions to further education is dependent on the Official National Examination Results only.</p>
                <p>3) Any sort of manipulation or duplication or re-production of this provisional result copy without the prior consent of NDoE, within or outside PNG will be considered as a serious offense and shall be dealt with it accordingly.</p>
              </div>
              <div className="text-center mt-2">
                <Image
                  src="/images/qrc.png"
                  alt="Scanner Image"
                  width={60}
                  height={60}
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default dynamic(() => Promise.resolve(Marksheet), { ssr: false });
