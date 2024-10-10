import Image from 'next/image';

const Header = () => {
  return (
    <header className="header">
      <div className="header">
        <div className="header-content">
          <div className="row justify-content-center header-row-div d-none d-md-block">
            <div className="col-12">
              <div className="row align-items-center justify-content-between g-1">
                <div className="col-3 col-sm-3 col-md-2 col-lg-1 ps-3 text-start left-logo-div">
                  <Image src="/images/Papua New Guinea.png" alt="Emblem of Papua New Guinea" width={80} height={80} className="img-fluid" />
                </div>
                <div className="col-6 text-center text-color-blue">
                  <p className="head fw-bold m-0 fs-sm-4 fs-md-3 fs-lg-2 pt-0">
                    NATIONAL EXAMINATION RESULTS - 2024
                  </p>
                  <p className="subhead fw-bold fs-6 fs-sm-5 fs-md-4 mb-0 p-lh">
                    Department Of Education
                  </p>
                  <p className="fw-bold fs-7 fs-sm-6 fs-md-5">
                    Papua New Guinea
                  </p>
                </div>
                <div className="col-3 col-sm-3 col-md-2 col-lg-1 text-end right-logo-div">
                  <Image src="/images/img5.png" alt="Department of Education logo" width={80} height={80} className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center header-row-div d-block d-md-none">
            <div className="col-12 d-inline-flex align-items-center justify-content-center">
              <Image src="/images/Papua New Guinea.png" alt="Emblem of Papua New Guinea" width={80} height={80} className="img-fluid mt-2 ps-2" />
              <p className="head fw-bold m-0 mx-2 fs-6 pt-3 text-center">
                NATIONAL EXAMINATION RESULTS 2024
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Styled JSX */}
      <style jsx>{`
        .header {
          width: 100%;
        }
        .header-row-div {
          height: 75px;
        }
        .left-logo-div {
          margin-top: -8px;
        }
        .text-color-blue {
          color: #14317f;
        }
        .right-logo-div {
          margin-top: -4px;
        }
      `}</style>
    </header>
  );
};

export default Header;
