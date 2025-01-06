import Lottie from 'react-lottie';
import { Link } from 'react-router-dom';
import animationData from '../../animations/Animation - 1733591411319.json'
const Error = () => {
  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">

      <div className="text-center ">
        <div className="flex justify-center mt-10">
          <Lottie options={lottieOptions} height={300} w-full />
        </div>
        <Link to="/" className="mt-4  btn bg-[#ff0000e1] text-white hover:bg-black">
          Go back to Home
        </Link>
      </div>

    </div>
  );
};

export default Error;