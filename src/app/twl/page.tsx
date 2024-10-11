"use client";
import React, { useEffect, useState, Suspense } from 'react';
import dynamic from 'next/dynamic';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';
import './twl.css';
import MyNavbar from '../../lib/ui/navbar/navbar';
import { useRouter, useSearchParams } from 'next/navigation';
 
const Marksheet = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [studentData, setStudentData] = useState<any>(null);
 
  useEffect(() => {
    const response = searchParams.get('response');
    if (response) {
      try {
        const decodedResponse = decodeURIComponent(response);
        const parsedResponse = JSON.parse(decodedResponse);
        setStudentData(parsedResponse);
        console.log("twl", parsedResponse);
      } catch (error) {
        console.error('Failed to decode/parse response:', error);
      }
    }
  }, [searchParams]);
 
  if (!studentData) {
    return <div>Loading...</div>;
  }
 
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="container d-flex justify-content-center align-items-center">
        <div className="sheet px-4 py-1">
          <div className='py-1'>
            <MyNavbar />
          </div>
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
                <h4 className="title mb-1">GRADE - 12 NATIONAL EXAMINATION RESULTS - 2024</h4>
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
 
            <div className="d-flex justify-content-between mb-0 mt-0 ">
              <p className='para'><strong>Published Date:</strong> 1-10-2024</p>
              <p className='para'><strong>Valid Until:</strong> 1-10-2025</p>
            </div>
            {/* Candidate & School Details */}
            <div className="row mb-2">
              <div className="col-md-6 d-flex">
                <div className="border p-2 flex-grow-1 borderCustom">
                  <h6 className='textcolor'><strong>Candidate Details</strong></h6>
                  <div className='mt-1 mb-1'>
                    <table>
                      <tbody>
                        <tr>
                          <td className='para'><strong>Given Names:</strong></td>
                          <td>:</td>
                          <td className='para'>{studentData.data.student.student.givennames}</td>
                        </tr>
                        <tr>
                          <td className='para'><strong>Surname:</strong></td>
                          <td>:</td>
                          <td className='para'>{studentData.data.student.student.lastname}</td>
                        </tr>
                        <tr>
                          <td className='para'><strong>Gender:</strong></td>
                          <td>:</td>
                          <td className='para'>{studentData.data.student.student.sex}</td>
                        </tr>
                        <tr>
                          <td className='para'><strong>Cand. No:</strong></td>
                          <td>:</td>
                          <td className='para'>{studentData.data.student.student.candidateno}</td>
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
                          <td className='para'>{studentData.data.student.student.region}</td>
                        </tr>
                        <tr>
                          <td className='para'><strong>Province:</strong></td>
                          <td>:</td>
                          <td className='para'>{studentData.data.student.student.province}</td>
                        </tr>
                        <tr>
                          <td className='para'><strong>School:</strong></td>
                          <td>:</td>
                          <td className='para'>{studentData.data.student.student.schoolname}</td>
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
                      <th>SUB-SHORT</th>
                      <th>SUBJECT</th>
                      <th>GRADE</th>
                      <th>ACHIEVEMENT</th>
                    </tr>
                  </thead>
                  <tbody>
                    {studentData.data.student.results.length > 0 ? (
                      studentData.data.student.results.map((result: any, index: number) => (
                        <tr key={index}>
                          <td>{result.subshortname}</td>
                          <td>{result.subject}</td>
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
            <div className="border p-2 mb-2 borderCustom">
              <h6 className='textcolor'><strong>Result Summary</strong></h6>
              <div className="row">
                <div className="col-md-2">
                  <p className='para'><strong>Rank:</strong> {studentData.data.student.student.rank}</p>
                </div>
                <div className="col-md-4">
                  <p className='para'><strong>Tertiary Entrance Rank:</strong> {studentData.data.student.student.ter}</p>
                </div>
                <div className="col-md-6">
                  <p className='para'><strong>Grade 12 Student Population:</strong> {studentData.data.student.student.schoolname}</p>
                </div>
              </div>
            </div>
 
            {/* Terms Section */}
            <div className="terms border p-2 borderCustom">
              <h6><strong>Terms:</strong></h6>
              <div>
                <p>1) National Department of Education (NDoE) online result is a provisional indicative information copy only; shall not be considered as final. The Orginal Certificate of Results will be issued by the MSD of NDoE which may be subject to changes for some valid reasons such as corrections from schools.</p>
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