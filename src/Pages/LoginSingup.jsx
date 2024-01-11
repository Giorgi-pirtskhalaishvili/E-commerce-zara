import "../Pages/styles/loginSingup.css";

const LoginSingup = () => {
  return (
    <div className="loginSingup">
      <div className="loginSingupContainer">
        <h1> Singup</h1>
        <div className="loginSingupFields">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email Adress" />
          <input type="password" placeholder="Password" />
          <button>Continue</button>
          <p className="loginSingupLogin">
            Already Have an accoung <span>Login here</span>
          </p>
        </div>
        <div className="loginSingupAgree">
          <input type="checkbox" id="" />
          <p>By Clicking I agree to the terms of use and privacy policy</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSingup;
