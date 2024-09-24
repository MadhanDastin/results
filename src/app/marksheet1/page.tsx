"use client";
import Image from 'next/image';

export default function ResultPage() {
  return (
    <div className="container mt-4">
      {/* Header Section */}
      <div className="row bg-warning text-center py-3">
        <div className="col-2">
          <Image src="/images/flag.png" alt="Logo" width={70} height={70} className='logo' />
          </div>
          <div className="col-8">
          <h2 className="mt-2">Department of Education</h2>
          <h4>National Examination Results - 2024</h4>
          </div>
          
          <div className='row'>
                <div className="col-md-6">
                <p>Published Date: 08-12-2024 </p>
                </div>
                <div className="col-md-6">
                <p> Valid Till: 31-03-2025</p>
                </div>
                </div>
          
      </div>

      {/* Candidate Details */}
      <div className="row bg-warning mt-4 p-3 rounded shadow-sm">
        <div className="col-md-5">
          <h5 className="text-dark">Candidate Details</h5>
          <p><strong className="text-danger">GIVEN NAME:</strong> Muthupandi</p>
          <p><strong className="text-danger">SURNAME:</strong> Jegatheesan</p>
          <p><strong className="text-danger">GENDER:</strong> M</p>
          <p><strong className="text-danger">CAND NO:</strong> 0123</p>
        </div>
        <div className="col-md-5">
          <h5 className="text-dark">School Details</h5>
          <p><strong className="text-danger">REGION:</strong> Southern</p>
          <p><strong className="text-danger">PROVINCE:</strong> Madurai</p>
          <p><strong className="text-danger">SCHOOL:</strong> AMC</p>
        </div>
        <div className="col-md-2 text-end">
          <Image src="/images/qrc.png" alt="QR Code" width={100} height={100} />
        </div>
      </div>

      {/* School Details */}
      {/* <div className="row bg-warning mt-4 p-3 rounded shadow-sm">
        
      </div> */}

      {/* Marks Table */}
      <div className="row bg-warning mt-4 p-3 rounded shadow-sm">
        <h5 className="text-dark">Marks</h5>
        <table className="table table-bordered text-center">
          <thead>
            <tr>
              <th>Subject</th>
              <th>Grade</th>
              <th>Achievement</th>
              <th>Rank</th>
              <th>Remarks</th>
              <th>Percentile</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>L&L</td>
              <td>A</td>
              <td>VERY HIGH</td>
              <td>1</td>
              <td>Good</td>
              <td>80</td>
            </tr>
            <tr>
              <td>AE</td>
              <td>A</td>
              <td>VERY HIGH</td>
              <td>1</td>
              <td>Good</td>
              <td>80</td>
            </tr>
            <tr>
              <td>AM</td>
              <td>B</td>
              <td>HIGH</td>
              <td>1</td>
              <td>Good</td>
              <td>80</td>
            </tr>
            <tr>
              <td>GM</td>
              <td>B</td>
              <td>HIGH</td>
              <td>1</td>
              <td>Good</td>
              <td>80</td>
            </tr>
            <tr>
              <td>BLO</td>
              <td>C</td>
              <td>SATISFACTORY</td>
              <td>1</td>
              <td>Good</td>
              <td>80</td>
            </tr>
            <tr>
              <td>CHECM</td>
              <td>C</td>
              <td>SATISFACTORY</td>
              <td>1</td>
              <td>Good</td>
              <td>80</td>
            </tr>
          </tbody>
        </table>
      </div>
      <style jsx>{`

      body {
  font-family: 'Arial', sans-serif;
}

.bg-warning {
  background-color: #fafbee !important;
}

.text-danger {
  color: #FF0000 !important;
}

.logo {
          width: 270px !important;
          //height:150px
        }

.table-bordered {
  border: 2px solid #ddd;
}

.table-bordered th, .table-bordered td {
  border: 2px solid #000;
  padding: 10px;
}

.shadow-sm {
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
}

.rounded {
  border-radius: 10px;
}

  


`}</style>



    </div>
  );
}
