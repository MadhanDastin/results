import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <div className="container">
     
      <header className="d-flex justify-content-between align-items-center mt-4 pb-4 border-bottom custom-header">
        <div className="d-flex align-items-center">
          <Image src="/images/download.png" alt="Logo" width={100} height={100} />
          <div className="ms-3">
            <h1 style={{ fontFamily: "'Times New Roman', sans-serif" }} className="mb-0">Department of Education <p className="text-muted mb-0">Presents...</p></h1>
           
          </div>
        </div>
        <Image src="/images/download.png" alt="Logo" width={100} height={100} />
      </header>
      <div style={{ borderBottom: '2px solid #000', height: '100%' }}></div>
      
      <main className="row mt-5">

     
      <div className="col-md-4">
      <div className="row">
        <div className="col-md-6 text-center mt-0">
          <Image src="/images/avatar.jpg" alt="James Marape" width={1000} height={1000} className="img-fluid rounded" />
          </div>
          <div className="col-md-6 text-center mb-4">
          <p className="mt-3 fw-bold">
            Hon. James Marape, MP <br />
            <span className="text-danger">Prime Minister, PNG</span>
          </p>
          </div>
        
        </div>
        <div className='row'>
        <div className="col-md-6 text-center mb-4 ">
        <p className="mt-3 fw-bold">
            Hon. Jimmy Uguro, MP <br />
            <span className="text-danger">Minister for Education</span>
          </p>
          
          </div>
          <div className="col-md-6 text-center mt-0">
          <Image src="/images/avatar.jpg" alt="Jimmy Uguro" width={1000} height={1000} className="img-fluid rounded" />
          </div>
        </div>
        <div className='row'>
        <div className="col-md-6 text-center mt-0">
          <Image src="/images/avatar.jpg" alt="Uke Kombra" width={1000} height={1000} className="img-fluid rounded" />
          </div>
          <div className="col-md-6 text-center mb-4 ">
             <p className="mt-3 fw-bold">
            Dr Uke Kombra, PhD <br />
            <span className="text-danger">Secretary for Education</span>
          </p>
          </div>
        </div>
      </div>   

      {/* <div className="col-md-1 border-end"></div> */}
      {/* <div style={{ borderLeft: '2px solid #000', height: '100%' }}></div> */}
      <div className="col-md-1 d-flex justify-content-center align-items-center ">
    <div style={{ height: '100%' ,borderLeft:'1px'}}></div>
  </div>
  
        <div className="col-md-7">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 className="fw-bold">National Examination Results - 2024</h2>
            <div className="text-center" style={{ background: '#f8d7da', padding: '15px', borderRadius: '50%', height: '120px', width: '120px', color: '#dc3545', fontWeight: 'bold' }}>
              MED <br /> Interim <br /> Results
            </div>
          </div>
          <div className="d-flex gap-3 mb-4 mt-4">
            <button className="btn btn-warning ">Grade 10 Results</button>
            <button className="btn btn-success ">Grade 12 Results</button>
            <button className="btn btn-primary ">STEM Results</button>
          </div>
          <div className='mt-4'>
          <p>
            Our government's vision is to modernise and provide quality education for all that is globally comparable through strategic reforms. 
            The National Department of Education (NDoE) is glad to continue to provide Grade 10, Grade 12 students National Examination Results 
            for 2024. Every student and parent can go online now to access their examination results in real-time.
          </p>
          </div>
        </div>
      </main>
    </div>
  );
}

