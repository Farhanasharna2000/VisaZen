import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import { useTheme } from "../ThemeContext/ThemeContext";
const LatestVisas = () => {
  const { theme } = useTheme();
  const [latestVisas, setLatestVisas] = useState([]);

  useEffect(() => {
    fetch("https://server-9h97n3i0b-farhana-sharnas-projects.vercel.app/visaDataSort")
      .then((response) => response.json())
      .then((data) => {
        setLatestVisas(data);
      });
  }, []);
  return (
    <div className="w-11/12 mx-auto px-3  pt-8 pb-6  rounded-xl  ">
      <h2 className={`text-center ${theme === "light" ?'text-[#111A3A]' :'text-white'}  text-xl md:text-4xl font-bold mb-8`}>Explore Our Latest Visas</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {latestVisas.map((visa) => (
          <div
            key={visa._id}
            className="flex flex-col rounded-lg shadow-md p-5 bg-gray-100"
          >
            <div className="flex-grow">
              <img
                src={visa.image}
                alt={visa.name}
                className="w-full h-40  rounded-t-lg"
              />
                <div className=" text-black   py-5">
                  <div className="flex text-lg font-bold items-center">

                  <p className=" ">{visa.visaType} |</p>
                  
                  <h2 className=" pl-1 ">{visa.name}</h2>
                  </div>

                  <p className="text-gray-500">
  {visa.description.split(' ').slice(0, 9).join(' ')}.....
</p>
                </div>

              
            </div>
            <div>
              <Link to={`/visa-details/${visa._id}`}>
                <button
                  className=" w-full bg-[#111A3A] hover:bg-slate-300 hover:text-[#111A3A] text-white font-bold py-2 px-4 rounded "
                >
                  See Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center my-8">
        <Link to="/all-visas" className="bg-[#ff0000e1] hover:bg-white hover:text-[#ff0000e1] font-bold text-white py-3 
         px-6 rounded">
          See all visas
        </Link>
      </div>
    </div>
  );
};
LatestVisas.propTypes = {

  visas: PropTypes.object,
}
export default LatestVisas;
