import { useContext, useEffect, useState } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
import { useTheme } from "../ThemeContext/ThemeContext";

const MyVisaApplications = () => {
  const { user } = useContext(authContext);
  const [applicationData, setApplicationData] = useState([]);
  const [search, setSearch] = useState("")
  const [loading, setLoading] = useState(true);
  const { theme } = useTheme();
  useEffect(() => {

    const fetchData = async () => {
      try {
        if (!user?.email) {
          setLoading(false);
          return;
        }
        const response = await fetch("https://visa-navigator-server-liart.vercel.app/myVisaApplications", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user?.email}`,
          },
        });
        const data = await response.json();

        setApplicationData(data);
        setLoading(false);

      }

      catch (error) {
        console.error("Error fetching visa applications:", error);
        setLoading(false);

      }
    };

    if (user?.email) {
      fetchData();
    }
  }, [user?.email]);

  const handleDelete = (id) => {
    fetch(`https://visa-navigator-server-liart.vercel.app/myVisaApplications/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        const newData = applicationData.filter((application) => id !== application._id);
        setApplicationData(newData);
        if (data.deletedCount === 1) {
          Swal.fire("Successfully deleted one document.");
        } else {
          Swal.fire("No documents matched the query. Deleted 0 documents.");
        }
      })
      .catch((error) => {
        console.error("Error deleting visa application:", error);
        Swal.fire("Failed to delete the document.");
      });
  };
  const handleSearch = () => {
    fetch(`https://visa-navigator-server-liart.vercel.app/myVisaApplications?searchParams=${encodeURIComponent(search)}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user?.email}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setApplicationData(data);
      })
      .catch((error) => {
        console.error("Error during search:", error);
      });
  }


  return (
    <div className="md:pt-32 pt-20 pb-8">
      <Helmet>
        <title>VisaZen | My Visa Applications</title>
      </Helmet>
      
      <div className="px-3 w-11/12 mx-auto">
        <h1 className={` ${theme === "light" ?'text-[#111A3A]' :'text-white'}  
              text-xl md:text-4xl   font-bold text-center mt-6 `}>My Visa Applications</h1>
        <div className="flex gap-2 lg:w-[400px] mx-auto my-8">
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            name="search"
            placeholder="search"
            className="input input-bordered w-full"
            required
          />
          <button
            onClick={() => handleSearch(search)}
            className="btn bg-[#111A3A] hover:bg-slate-300 hover:text-[#111A3A] text-white"
          >Search</button>
        </div>
        {loading ? (
          <span className="loading loading-bars loading-lg mx-auto block py-40 "></span>
        ) : applicationData.length < 1 ? (
          <p className="text-center text-xl text-red-500 py-10">No data found</p>
        ) : (
          <div className="overflow-x-auto">
      <table className="w-full table border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100 text-center">
            <th className={` ${theme === "light" ?'text-black' :'text-[#111A3A]'} 
                          border border-gray-300 p-2`}>Country Image</th>
            <th className={` ${theme === "light" ?'text-black' :'text-[#111A3A]'} 
                          border border-gray-300 p-2`}>Type</th>
            <th className={` ${theme === "light" ?'text-black' :'text-[#111A3A]'} 
                          border border-gray-300 p-2`}>Country</th>
            <th className={` ${theme === "light" ?'text-black' :'text-[#111A3A]'} 
                          border border-gray-300 p-2`}>Processing Time</th>
            <th className={` ${theme === "light" ?'text-black' :'text-[#111A3A]'} 
                          border border-gray-300 p-2`}>Validity</th>
            <th className={` ${theme === "light" ?'text-black' :'text-[#111A3A]'} 
                          border border-gray-300 p-2`}>Fee</th>
            <th className={` ${theme === "light" ?'text-black' :'text-[#111A3A]'} 
                          border border-gray-300 p-2`}>Action</th>
          </tr>
        </thead>
        <tbody>
          {applicationData.map((data) => (
            <tr key={data._id} className="hover:bg-gray-50 hover:text-[#111A3A]">
              <td className="border border-gray-300 p-2">
                <img src={data.countryImg} alt="country" className="w-20 h-20 mx-auto rounded-lg" />
              </td>
              <td className="border border-gray-300 p-2 text-center">{data.type}</td>
              <td className="border border-gray-300 p-2 text-center">{data.country}</td>
              <td className="border border-gray-300 p-2 text-center">{data.time}</td>
              <td className="border border-gray-300 p-2 text-center">{data.validity}</td>
              <td className="border border-gray-300 p-2 text-center">${data.fee}</td>
              <td className="border border-gray-300 p-2 text-center">
                <button
                  onClick={() => handleDelete(data._id)}
                  className="bg-red-500 text-white py-1 px-3 rounded-lg"
                >
                  Cancel
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
        )}
      </div>
      
    </div>
  );
};

export default MyVisaApplications;
