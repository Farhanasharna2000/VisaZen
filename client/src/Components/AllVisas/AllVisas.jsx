import { Link, useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useState } from "react";
import { useTheme } from "../ThemeContext/ThemeContext";

const AllVisas = () => {
  const visas = useLoaderData();
  const [selectedVisaType, setSelectedVisaType] = useState("");
  const [selectedVisa, setSelectedVisa] = useState(visas);
  const [sort, setSort] = useState(""); 
  const { theme } = useTheme();
  // Function to handle sort change
  const handleSortChange = (e) => {
    const selectedSort = e.target.value;
    setSort(selectedSort);
    
    // Fetch the data with both visa type and sort order
    fetchVisaData(selectedVisaType, selectedSort);
  };
  
  // Fetch data with sorting and visa type filtering
  const fetchVisaData = (visaType, sortOrder) => {
    const url = visaType && visaType !== "Select visa type"
      ? `https://visazen-server.vercel.app/selectedVisa?visaType=${visaType}&sort=${sortOrder}`
      : `https://visazen-server.vercel.app/visaData?sort=${sortOrder}`;
  
    fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setSelectedVisa(data);
      })
      .catch((error) => {
        console.error("Error during fetch:", error);
      });
  };
  
  // Function to handle visa type selection
  const handleSelect = (e) => {
    const visaType = e.target.value;
    setSelectedVisaType(visaType);
  
    // Fetch data based on visa type and current sort order
    fetchVisaData(visaType, sort);
  };
  const handleReset = () => {
    setSort("")
    setSelectedVisaType("")
    setSelectedVisa(visas)
  };

  return (
    <div>
      <Helmet>
        <title>visaZen | All Visas</title>
      </Helmet>
      
      <div className="w-11/12 mx-auto px-3 md:pt-32 pt-20">
     
        <h1  className={` ${theme === "light" ?'text-[#111A3A]' :'text-white'}  text-xl md:text-4xl  font-bold text-center my-8 `}>Find the Perfect Visa for You</h1>
    
        <div className="w-full md:w-auto mb-8">
        <select
          onChange={handleSelect}
          value={selectedVisaType}
          className="select select-bordered bg-[#111A3A] text-white max-w-sm mb-2 md:mb-0 mr-3 "
        >
          <option value="Select visa type">Select visa type</option>
          <option value="Business visa">Business visa</option>
          <option value="Residence visa">Residence visa</option>
          <option value="Student visa">Student visa</option>
          <option value="Tourist visa">Tourist visa</option>
        </select>
        <select
      name="sort"
      id="sort"
      value={sort}
      onChange={handleSortChange}
      className="select select-bordered bg-[#111A3A] text-white max-w-sm  mr-3"
    >
      <option value="">Sort By Price Range</option>
      <option value="dsc">Descending Order</option>
      <option value="asc">Ascending Order</option>
    </select>
    <button
      onClick={handleReset}
      className="btn hover:bg-[#111A3A] bg-[#ff0000e1] text-white  max-w-sm "
    >
      Reset
    </button>
  </div>
        {selectedVisa.length === 0 ?
          <p className="text-center text-xl text-red-500 py-10">No data found</p> :
          (<div className="grid grid-cols-1  md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
            {selectedVisa.map((visa) => (
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
          </div>)}
      </div>
      
    </div>
  );
};

export default AllVisas;