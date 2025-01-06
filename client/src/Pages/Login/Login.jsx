import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { authContext } from "../../Components/AuthProvider/AuthProvider";

import toast from 'react-hot-toast';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import loginImg from '../../assets/Login-pana.png'

const Login = () => {
  const { handleLogin, handleGoogleLogin } = useContext(authContext);
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    handleLogin(email, password)
      .then(() => {
        toast.success('Successfully logged in!');
        navigate(from, { replace: true });
      })
      .catch((err) => {
        setError(err.message);
        toast.error('Failed to login. Please try again.');
      });
  };

  const googleLoginHandler = () => {
    handleGoogleLogin()
      .then(() => {
        toast.success('Successfully logged in with Google!');
        navigate(from, { replace: true });
      })
      .catch((err) => {
        setError(err.message);
        toast.error('Failed to login with Google. Please try again.');
      });
  };

  return (
    <>
    
      <div className="min-h-screen shadow-lg flex justify-center items-center bg-base-200 pb-5 pt-16 md:pt-32">
        <div className="card bg-base-100 w-full md:max-w-4xl px-3 shrink-0 rounded-none p-10">
          <h2 className="text-xl md:text-3xl font-semibold text-center">Login to your account</h2>
         <div className="md:flex">
          <div className="md:w-1/2 hidden md:block">
<img  src={loginImg} alt="" />
          </div>
          <div className="md:w-1/2">
          <form onSubmit={handleSubmit} className="card-body bg-slate-100 m-4 md:m-7">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Email address</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="Enter your email address"
                className="input input-bordered rounded-none bg-[#F3F3F3]"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text font-semibold">Password</span>
              </label>
              <input
                name="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                className="input input-bordered rounded-none bg-[#F3F3F3]"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="btn btn-xs absolute right-2 top-12"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
              <label className="label">
                <Link
                  to={`/forget-password?email=${encodeURIComponent(email)}`}
                  className="label-text-alt link link-hover"
                >
                  Forgot password?
                </Link>

              </label>
            </div>
            <div className="form-control mt-6">
              <button 
               className=" w-full hover:bg-[#111A3A] bg-slate-300 hover:text-white text-[#111A3A] font-semibold  py-2 px-4 rounded "
               >Login</button>
              {error && <p className="text-red-700 py-2">{error.split('/')[1].replace(/\)\.$/, '')}</p>}

              <p className="my-3 mx-auto font-bold">or,</p>
              <button
                onClick={googleLoginHandler}
                type="button"
           className=" w-full hover:bg-[#111A3A] bg-slate-300 hover:text-white text-[#111A3A] font-semibold  py-2 px-4 rounded "
              >
                Login with Google
              </button>
            </div>
          </form>
          <p className="text-center font-semibold">Don’t Have An Account ? <Link className="text-[#F75B5F]" to="/register">Register</Link></p>

          </div>
         </div>

        </div>
      </div>
   
    </>
  );
};

export default Login;