function Signup() {
  return (
    <>
      <div className="content">
        <div className="container">
          <div className="header">
            <img
              src="https://www.logo.wine/a/logo/Instagram/Instagram-Wordmark-Black-Logo.wine.svg"
              alt="Instagram"
            />
            <p>
              Sign up to see photos and videos <br /> from your friends
            </p>
            <button>
              <i className="bx bxl-facebook-square bx-sm"></i>
              Log in with Facebook
            </button>
          </div>
          <div className="horizontal-content">
            <hr />
            <span>OR</span>
            <hr />
          </div>
          <div className="form-box">
            <form action="#">
              <div className="input-box">
                <input type="text" name="email" />
                <label htmlFor="">Moblile Number or Email</label>
              </div>

              <div className="input-box">
                <input type="text" name="fullname" />
                <label htmlFor="">Full Name</label>
              </div>

              <div className="input-box">
                <input type="text" name="username" />
                <label htmlFor="">Username</label>
              </div>

              <div className="input-box">
                <input type="password" name="password" />
                <label htmlFor="">Password</label>
              </div>
            </form>
          </div>
          <div className="footer">
            <p>
              People who use our service may have uploaded your contact
              information to Instagram.{" "}
              <a href="">
                learn <br /> More
              </a>
            </p>
            <p>
              By signing up, you agree to our <a href="">Terms</a>,
              <a href="">
                Privacy <br /> Policy
              </a>{" "}
              and <a href="">Cookies Policy</a>
            </p>
            <button type="submit"> Sign up</button>
          </div>
        </div>
        <div className="login-box">
          <p>
            Have an account? <a href="">Log in</a>{" "}
          </p>
        </div>
        <div className="app_choice">
          <p>Get the app</p>
        </div>
        <div className="store">
          <img
            src="https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png"
            alt="Google PlayStore"
          />
          <img
            src="https://static.cdninstagram.com/rsrc.php/v3/yu/r/EHY6QnZYdNX.png"
            alt="Microsoft Store"
          />
        </div>
        <div className="links">
          <a href="#" className="dec-effect">
            Meta
          </a>
          <a href="#" className="dec-effect">
            About
          </a>
          <a href="#" className="dec-effect">
            Blog
          </a>
          <a href="#" className="nodec-effect">
            Jobs
          </a>
          <a href="#" className="dec-effect">
            Help
          </a>
          <a href="#" className="dec-effect">
            API
          </a>
          <a href="#" className="nodec-effect">
            Privacy
          </a>
          <a href="#" className="nodec-effect">
            Terms
          </a>
          <a href="#" className="nodec-effect">
            Top Accounts
          </a>
          <a href="#" className="nodec-effect">
            Locations
          </a>
          <a href="#" className="nodec-effect">
            Instagram Lite
          </a>

          <a href="#" className="nodec-effect">
            Contact Uploading & Non-Users
          </a>
          <a href="#" className="dec-effect">
            Meta Verified
          </a>
        </div>
        <span id="below">© 2023 Instagram from Meta</span>
      </div>
    </>
  );
}

export default Signup;
