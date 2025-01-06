import { useContext, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import { FaEnvelope } from "react-icons/fa";
import { authContext } from "../../Components/AuthProvider/AuthProvider";
import Navbar from "../../Components/Navbar/Navbar";

function ForgetPassword() {
  const { handlePasswordReset } = useContext(authContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const emailParam = queryParams.get("email");
    if (emailParam) {
      setEmail(emailParam);
    }
  }, [location.search]);

  const handleResetPassword = (e) => {
    e.preventDefault();
    setLoading(true);

    handlePasswordReset(email)
      .then(() => {
        toast.success("Password reset email sent successfully!");
        setLoading(false);
        navigate('/login');
        window.open('https://mail.google.com/', '_blank');
      })
      .catch((error) => {
        setLoading(false);
        const errorMessage = error.message.includes('auth/user-not-found')
          ? 'No user found with this email'
          : 'Failed to send reset password email';
        toast.error(errorMessage);
      });
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="card w-full max-w-sm shadow-md bg-white p-6 rounded-lg">
          <h1 className="text-xl font-bold text-center mb-4">Reset Password</h1>
          <form onSubmit={handleResetPassword}>
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <div className="relative">
                <FaEnvelope className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="input input-bordered pl-10 w-full"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="btn btn-primary w-full"
            >
              {loading ? 'Sending...' : 'Reset Password'}
            </button>
          </form>
          <Toaster position="top-center" reverseOrder={false} />
        </div>
      </div>
    </>
  );
}

export default ForgetPassword;