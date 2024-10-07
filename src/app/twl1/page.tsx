"use client"
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';


const Marksheet = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center">
      <div className="sheet p-4">

        {/* Header */}
        <div className="d-flex align-items-center justify-content-between mb-4">
          {/* Left Logo */}
          <div className="logo-start">

            <Image
              src="/images/pngflagv1.png"
              alt="Left Logo"
              width={80}
              height={80}
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
              alt="Left Logo"
              width={90}
              height={90}
              className="img-fluid"
            />
          </div>
        </div>

        <div className="d-flex justify-content-between">
          <p><strong>Published Date:</strong> 1-10-2024</p>
          <p><strong>Valid Until:</strong> 1-10-2025</p>
        </div>

        {/* Candidate & School Details */}
        <div className="row mb-4">
          <div className="col-md-6 d-flex">
            <div className="border p-3 flex-grow-1">
              <h6><strong>Candidate Details</strong></h6>
              <p><strong>Given Names:</strong> Kanaga</p>
              <p><strong>Surname:</strong> Pandiyan</p>
              <p><strong>Gender:</strong> F</p>
              <p><strong>Cand. No:</strong> 888</p>
            </div>
          </div>
          <div className="col-md-6 d-flex">
            <div className="border p-3 flex-grow-1">
              <h6><strong>School Details</strong></h6>
              <p><strong>Region:</strong> SOUTHERN REGION(091)</p>
              <p><strong>Province:</strong> National Capital District(69)</p>
              <p><strong>School:</strong> Port Moresby National High(810)</p>
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="mb-4 border p-3">
          <h6><strong>Results</strong></h6>
          <div className='d-flex justify-content-center align-items-center'>
            <table className="table table-bordered">
              <thead style={{ backgroundColor: '#007bff', color: '#fff' }}>
                <tr>
                  <th>SUB-SHORT</th>
                  <th>SUBJECT</th>
                  <th>GRADE</th>
                  <th>ACHIEVEMENT</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>L&L</td>
                  <td>Language & Literature</td>
                  <td>A</td>
                  <td>VERY HIGH</td>
                </tr>
                <tr>
                  <td>AE</td>
                  <td>Applied English</td>
                  <td>B</td>
                  <td>HIGH</td>
                </tr>
                <tr>
                  <td>AM</td>
                  <td>Advance Mathematics</td>
                  <td>C</td>
                  <td>SATISFACTORY</td>
                </tr>
                <tr>
                  <td>GM</td>
                  <td>General Mathematics</td>
                  <td>A</td>
                  <td>VERY HIGH</td>
                </tr>
                <tr>
                  <td>BIO</td>
                  <td>Biology</td>
                  <td>A</td>
                  <td>VERY HIGH</td>
                </tr>
                <tr>
                  <td>CHEM</td>
                  <td>Chemistry</td>
                  <td>B</td>
                  <td>HIGH</td>
                </tr>
              </tbody>
            </table>

            {/* Scanner Image Below Table */}

          </div>
        </div>



        {/* Summary Section */}
        <div className="border p-3 mb-4">
          <h6><strong>Result Summary</strong></h6>
          <div className="row d-flex justify-content-center">
            <div className="col-md-2">
              <p><strong>Rank:</strong> 1</p>
            </div>
            <div className="col-md-4">
              <p><strong>Tertiary Entrance Rank:</strong> 1</p>
            </div>
            <div className="col-md-6">
              <p><strong>Grade 12 Student Population:</strong> 30,000</p>
            </div>
          </div>
        </div>



        {/* Terms Section */}
        <div className="terms border p-3">
          <div>
            <p>1) National Department of Education (NDoE) online result is a provisional indicative information copy only; shall not be considered as final. The Orginal Certificate of Results will be issued by the MSD of NDoE which may be subject to changes for some valid reasons such as corrections from schools.</p>
            <p>2) The downloaded copy of the result in full/ partial will not guarantee any admission into any of the educational institutions within or outside PNG; Admissions to further education is dependent on the Official National Examination Results only.</p>
            <p>3) Any sort of manipulation or duplication or re- production of this provisional result copy without the prior consent of NDoE, within or outside PNG will be considered as a serious offence and shall be dealt with it accordingly.</p>
          </div>
        </div>
        <div className="text-center mt-3">
          <Image
            src="/images/qrc.png"  // Ensure the image is placed in the 'public/images' folder
            alt="Scanner Image"
            width={100}
            height={100}
            className="img-fluid"
          />
        </div>
      </div>

      <style jsx>{`
      .custom-table-header{
      // background: linear-gradient(to right, white 5%, #4BB5FF);
       background-color: #007bff;
  color: white;
      }
      .container {
    // height: 100%;
    background-color: #f0f4f8;
  }
  
  .sheet {
    width: 100%;
    max-width: 800px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  }
  
  .title {
    font-weight: 700;
    color: #333;
  }
  
  .subtitle {
    font-weight: 600;
    color: #666;
  }
  
  .terms {
    font-size: 12px;
    color: #555;
  }
  
      
      `}</style>
    </div>
  );
};

export default Marksheet;
