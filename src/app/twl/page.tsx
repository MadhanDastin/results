"use client"
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';
import Footer from '../footer/footer';

const Marksheet = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center">
      
      <div className="sheet p-4">
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
        {/* <hr className='mt-0' /> */}

        {/* Candidate & School Details */}
        <div className="row mb-2">
          <div className="col-md-6 d-flex">
            <div className="border p-2 flex-grow-1 borderCustom">
              <h6 className='textcolor'><strong>Candidate Details</strong></h6>
              <div className='mb-0 mt-0'>
              <p className='para'><strong>Given Names:</strong> Kanaga</p>
              <p className='para'><strong>Surname:</strong> Pandiyan</p>
              <p className='para'><strong>Gender:</strong> F</p>
              <p className='para'><strong>Cand. No:</strong> 888</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 d-flex">
            <div className="border p-2 flex-grow-1 borderCustom">
              <h6 className='textcolor'><strong>School Details</strong></h6>
              <div>
              <p className='para'><strong>Region:</strong> SOUTHERN REGION(091)</p>
              <p className='para'><strong>Province:</strong> National Capital District(69)</p>
              <p className='para'><strong>School:</strong> Port Moresby National High(810)</p>
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

           
          </div>
        </div>

        {/* Summary Section */}
        <div className="border p-2 mb-2 borderCustom">
          <h6 className='textcolor'><strong>Result Summary</strong></h6>
          <div className="row">
            <div className="col-md-2">
              <p className='para'><strong>Rank:</strong> 1</p>
            </div>
            <div className="col-md-4">
              <p className='para'><strong>Tertiary Entrance Rank:</strong> 1</p>
            </div>
            <div className="col-md-6">
              <p className='para'><strong>Grade 12 Student Population:</strong> 30,000</p>
            </div>
          </div>
        </div>

        {/* Terms Section */}
        <div className="terms border p-2 borderCustom">
        <h6><strong>Terms:</strong></h6>
          <div>
          <p>1) National Department of Education (NDoE) online result is a provisional indicative information copy only; shall not be considered as final. The Orginal Certificate of Results will be issued by the MSD of NDoE which may be subject to changes for some valid reasons such as corrections from schools.</p>
            <p>2) The downloaded copy of the result in full/ partial will not guarantee any admission into any of the educational institutions within or outside PNG; Admissions to further education is dependent on the Official National Examination Results only.</p>
            <p>3) Any sort of manipulation or duplication or re- production of this provisional result copy without the prior consent of NDoE, within or outside PNG will be considered as a serious offence and shall be dealt with it accordingly.</p>
          </div>
           {/* Scanner Image Below Table */}
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
      <Footer/>
      </div>

      <style jsx>{`
      .tabletext{
      text-align: center;
  font-weight: bold;
      }
      .textcolor{
      font-size:13px;
      color: #14317F;

      }
      thead th {
        background-color: #0854A0 !important;
        color: white !important;
      }
      .borderCustom{
      border-radius: 13px;      
      }
      .bordercolor{
      border-radius: 15px;
      border: 2px solid #4BB5FF;
      }
        .container {
          background-color: #f0f4f8;
          padding: 0;
        }
        .sheet {
          max-width: 700px;
          background-color: #fff;
          border-radius: 10px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .title {
          font-size: 16px;
          color: #14317F;
          font-weight: bold;
        }
        .subtitle {
          font-size: 12px;
          color: #14317F;
          font-weight: bold;
        }
          .para{
           font-size: 11px;
          }
        h6 {
          font-size: 12px;
        }
        .terms {
          font-size: 8px;
        }
        table th, table td {
          font-size: 10px;
        }
        .img-fluid {
          max-width: 80%;
        }
      `}</style>
    </div>
  );
};

export default Marksheet;
