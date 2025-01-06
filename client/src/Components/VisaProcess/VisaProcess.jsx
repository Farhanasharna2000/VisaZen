
import { Typewriter } from "react-simple-typewriter";
import Lottie from "react-lottie";
import animationData from "../../animations/Animation - 1733475693064.json";
import { useTheme } from "../ThemeContext/ThemeContext";
const VisaProcess = () => {
  const { theme } = useTheme();
  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className=" bg-gradient-to-r from-blue-100 to-indigo-300   rounded-xl  w-11/12 mx-auto px-3 pb-8 mb-8">
      <div className="flex justify-center ">
        <Lottie options={lottieOptions} height={300} width={300} />
      </div>

      <div className="text-center mb-8">
        <h1 className="text-xl md:text-4xl text-[#111A3A] font-bold">
          <Typewriter words={["Visa Application Process"]} loop={1} />
        </h1>
        <p className="mt-2 text-sm md:text-base text-gray-600">
          Our team of seasoned professionals understands the complexities of immigration laws and visa procedures.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
        <div className="  bg-slate-100 shadow-xl rounded-lg p-10">
          <div className=" flex items-center">
            <button className="rounded-full px-4 py-2 bg-orange-500 text-white text-lg font-bold">
              1
            </button>
            <div className="ml-4">
              <h2 className={`card-title ${theme === "light" ?'text-[#111A3A]' :'text-black'} text-lg font-semibold`}>Choose your visa type</h2>
              <p className="text-gray-600">Determine the Visa type for your travel purpose.</p>
            </div>
          </div>
        </div>

        <div className="  bg-slate-100 shadow-xl rounded-lg p-10">
          <div className=" flex items-center">
            <button className="rounded-full px-4 py-2 bg-teal-600 text-white text-lg font-bold">
              2
            </button>
            <div className="ml-4">
              <h2 className={`card-title ${theme === "light" ?'text-[#111A3A]' :'text-black'} text-lg font-semibold`}>Contact our branches</h2>
              <p className="text-gray-600">Start your transaction by applying to our branches.</p>
            </div>
          </div>
        </div>

        <div className="  bg-slate-100  shadow-xl rounded-lg p-10">
          <div className=" flex items-center">
            <button className="rounded-full px-4 py-2 bg-blue-600 text-white text-lg font-bold">
              3
            </button>
            <div className="ml-4">
              <h2 className={`card-title ${theme === "light" ?'text-[#111A3A]' :'text-black'} text-lg font-semibold`}>Submit All Your Documents</h2>
              <p className="text-gray-600">Collect all the required documents for the process.</p>
            </div>
          </div>
        </div>

        <div className="  bg-slate-100  shadow-xl rounded-lg p-10">
          <div className="flex items-center">
            <button className="rounded-full px-4 py-2 bg-yellow-600 text-white text-lg font-bold">
              4
            </button>
            <div className="ml-4">
              <h2 className={`card-title ${theme === "light" ?'text-[#111A3A]' :'text-black'} text-lg font-semibold`}>Passport delivery</h2>
              <p className="text-gray-600">Receive your visa, which is finalized after application.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisaProcess;
