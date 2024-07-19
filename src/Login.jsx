import "./style.css";

export default function Login() {
  return (
    <>
      <div className="row vh-100 g-0">
        <div className="col-lg-6 position-realtive d-none d-lg-block">
          {/* <div className="bg-holder" style={{ backgroundImage: `url("./bg7.jpg")` }}></div> */}
          <div className="bg-holder"></div>
        </div>

        <div className="col-lg-6">
          <div className="row align-items-center justify-content-center h-100 g-0 px-4 ps-sm-0">
            <div className="col col-sm-6 col-lg-7 col-xl-6">
              <a href="a" className="d-flex justify-content-center mb-4">
                {/* <!-- <img src="images/logo.png" alt="" width="60" /> --> */}
              </a>

              <div className="text-center mb-5">
                <h3 className="fw-bold">Log In</h3>
                <p className="text-secondary">Get access to your account</p>
              </div>

              <button className="btn btn-lg btn-outline-secondary btn-outline-custom w-100 mb-3">
                <i className="bx bxl-google text-danger me-1 fs-6"></i>
                Login With Google
              </button>
              <button className="btn btn-lg btn-outline-secondary btn-outline-custom w-100">
                <i className="bx bxl-facebook text-primary me-1 fs-6"></i>
                Login With Facebook
              </button>

              <div className="position-relative">
                <hr className="text-secondary divider" />
                <div className="divider-content-center">or</div>
              </div>

              <form action="/login" method="post">
                <div className="input-group mb-3">
                  <span className="input-group-text">
                    <i className="bx bx-envelope"></i>
                  </span>
                  {/* <!-- <label for="">Email</label> --> */}
                  <input
                    type="text"
                    className="form-control form-control-lg fs-6"
                    placeholder="Email"
                    name="email"
                  />
                </div>

                <div className="input-group mb-3">
                  <span className="input-group-text">
                    <i className="bx bx-lock-alt"></i>
                  </span>
                  <input
                    type="password"
                    className="form-control form-control-lg fs-6"
                    placeholder="Password"
                    name="password"
                  />
                </div>
                <button className="btn btn-primary btn-lg w-100 mb-3">
                  <a className="Login" href="http://localhost:3000/home">
                    Login
                  </a>
                </button>
              </form>

              <div className="text-center">
                <small>
                  Dont have an account?
                  <a href="/signup" className="fw-bold">
                    Sign-up
                  </a>
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
