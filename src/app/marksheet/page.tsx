"use client";
import Image from 'next/image';

export default function ResultPage() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-md-2 text-center">
          <Image
            src="/images/flag.png"
            alt="PNG Logo"
            width={150}
            height={150}
            className="mb-3"
          />
          {/* <h2>PAPUA NEW GUINEA</h2> */}
          <Image
            src="/images/avatar.jpg"
            alt="Profile Picture"
            width={120}
            height={160}
            className="profile-pic"
          />
          <div className="grading-scale">
                <h5 className="text-danger">Grading Scale</h5>
                <p>D  3.50/4.00<br/>C  3.00/4.00<br/>UP  2.50/4.00<br/>P  2.00/4.00<br/>F  2.00/4.00</p>

                <h5 className="text-danger">Grade Remarks</h5>
                <p>D - Distinction<br/>C - Credit<br/>UP - Upper Pass<br/>P - Pass<br/>F - Fail</p>
              </div>
        </div>

        <div className="col-md-8">
          <div className="card shadow-sm mb-3">
            <div className="card-header text-white bg-dark">
              <h2>GRADE 10 NATIONAL EXAMINATION RESULTS 2024</h2>
              
            </div>
            <div className='row'>
                <div className="col-md-6">
                <p>Published Date: 08-12-2024 </p>
                </div>
                <div className="col-md-6">
                <p> Valid Till: 31-03-2025</p>
                </div>
                </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-6">
                  <h4 className="text-danger">Candidate Results</h4>
                  <p>
                    <strong>Given Name:</strong> Jimmy <br />
                    <strong>Surname:</strong> Ugaro <br />
                    <strong>Gender:</strong> M <br />
                    <strong>Candidate No:</strong> 999
                  </p>
                </div>
                <div className="col-md-6">
                  <h4 className="text-danger">School Details</h4>
                  <p>
                    <strong>Region:</strong> Southern(91) <br />
                    <strong>Province:</strong> National Capital <br />
                    <strong>School:</strong> National Capital School
                  </p>
                </div>
              </div>

              <div className="table-responsive mt-4">
                <table className="table table-bordered text-center">
                  <thead className="table-dark">
                    <tr>
                      <th>SUBJECTS</th>
                      <th>GRADE</th>
                      <th>REMARKS</th>
                      <th>RANK</th>
                      <th>STUDENT COUNT</th>
                      <th>PERCENTILE</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Eng</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Math</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>PD</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Sci</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>SSci</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>BS</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Ag</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              
            </div>
          </div>
        </div>
        <div className="side-menu col-md-2">
        <button className="btn btn-dark mb-3">MAIN SCREEN</button>
        <button className="btn btn-dark mb-3">REPORT AN ISSUE</button>
        <button className="btn btn-dark mb-3">SERVICE FEEDBACK</button>
        <button className="btn btn-dark mb-3">PRINT</button>
        <button className="btn btn-dark mb-3">DOWNLOAD</button>
        <button className="btn btn-dark mb-3">CHANGE PASSWORD</button>
        <button className="btn btn-dark mb-3">LOGOUT</button>
        <button className="btn btn-dark">HELP</button>
      </div>
      </div>

     

      <style jsx>{`
  .container {
  font-family: Arial, sans-serif;
}

h2, p {
  margin: 0;
}

.card-header {
  padding: 1rem;
}

.profile-pic {
  border-radius: 8px;
}

.table {
  margin-top: 20px;
}

.table-bordered td, .table-bordered th {
  border: 2px solid #333;
}

.grading-scale {
  margin-top: 20px;
}

.side-menu {
  position: fixed;
  top: 20%;
  right: 10px;
}

.side-menu button {
  width: 180px;
  display: block;
}

button {
  border-radius: 0.25rem;
}


`}</style>

    </div>
  );
}
