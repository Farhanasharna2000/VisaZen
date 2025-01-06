import { useContext, useEffect, useState } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import { MdDeleteForever, MdOutlineModeEditOutline } from "react-icons/md";
import Swal from "sweetalert2";

import { Helmet } from "react-helmet";
import { useTheme } from "../ThemeContext/ThemeContext";

const MyAddedVisas = () => {
    const { user } = useContext(authContext);
    const [myAddedVisas, setMyAddedVisas] = useState([]);
    const [error, setError] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [visaToUpdate, setVisaToUpdate] = useState(null);
    const [loading, setLoading] = useState(true);
    const { theme } = useTheme();
    useEffect(() => {
        const fetchData = async () => {
            try {
                if (!user?.email) {
                    setLoading(false);
                    return;
                }

                const response = await fetch("https://visazen-server.vercel.app/myAddedVisas", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${user?.email}`,
                    },
                });


                const data = await response.json();

                setMyAddedVisas(data);
                setLoading(false);

            } catch (error) {
                setError("An error occurred while fetching data", error);
                setLoading(false);

            } 
        };

        if (user?.email) {
            fetchData();
          }
    }, [user?.email])

    const handleDelete = (id) => {
        fetch(`https://visazen-server.vercel.app/myAddedVisas/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                const newData = myAddedVisas.filter((visa) => id !== visa._id);
                setMyAddedVisas(newData);
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

    const openUpdateModal = (visa) => {
        setVisaToUpdate(visa);
        setIsModalOpen(true);
    };

    const handleUpdateSubmit = async (e) => {
        e.preventDefault();

        if (!visaToUpdate?._id) {
            console.error("Visa ID is missing");
            return;
        }

        const updatedVisa = {
            ...visaToUpdate,
            name: e.target.name.value,
            visaType: e.target.visaType.value,
            processingTime: e.target.processingTime.value,
            fee: e.target.fee.value,
            validity: e.target.validity.value,
            method: e.target.method.value,
            image: e.target.image.value,
        };

        try {
            const response = await fetch(`https://visazen-server.vercel.app/update/${visaToUpdate._id}`, {
                method: "PATCH",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedVisa),
            });

            const data = await response.json();
            if (response.ok) {
                Swal.fire("Visa data updated successfully.");

                setMyAddedVisas(prevState =>
                    prevState.map(visa =>
                        visa._id === visaToUpdate._id ? { ...visa, ...updatedVisa } : visa
                    )
                );

                setIsModalOpen(false);
            } else {
                console.error("Error updating visa:", data);
                Swal.fire(data.message || "Failed to update visa.");
            }
        } catch (error) {
            Swal.fire("Error updating visa:", error);
        }
    };
    return (
        <div className="md:pt-32 pt-24 pb-8">
            <Helmet>
                <title>VisaZen | My Added Visas</title>
            </Helmet>
           
           
            <div className="px-3 w-11/12 mx-auto ">
            
                <h1 className={` ${theme === "light" ?'text-[#111A3A]' :'text-white'}  
               text-xl md:text-4xl   font-bold text-center mt-4 mb-8 `}>My Added Visa</h1>

                {loading ? (
                    <span className="loading loading-bars loading-lg mx-auto block py-40 "></span>
                ) : error ? (
                    <p className="text-center text-xl text-red-500 py-10">{error}</p>
                ) : myAddedVisas.length < 1 ? (
                    <p className="text-center text-xl text-red-500 py-10">No data found</p>
                ) : (
                    <div className="overflow-x-auto">
                    <table className="w-full table border-collapse border border-gray-200">
                      <thead>
                        <tr className="bg-gray-100 text-center">
                          <th className={` ${theme === "light" ?'text-black' :'text-[#111A3A]'} 
                          border border-gray-300 p-2`}>Image</th>
                          <th className={` ${theme === "light" ?'text-black' :'text-[#111A3A]'} 
                          border border-gray-300 p-2`}>Name</th>
                          <th className={` ${theme === "light" ?'text-black' :'text-[#111A3A]'} 
                          border border-gray-300 p-2`}>Visa Type</th>
                          <th className={` ${theme === "light" ?'text-black' :'text-[#111A3A]'} 
                          border border-gray-300 p-2`}>Processing Time</th>
                          <th className={` ${theme === "light" ?'text-black' :'text-[#111A3A]'} 
                          border border-gray-300 p-2`}>Fee</th>
                          <th className={` ${theme === "light" ?'text-black' :'text-[#111A3A]'} 
                          border border-gray-300 p-2`}>Validity</th>
                          <th className={` ${theme === "light" ?'text-black' :'text-[#111A3A]'} 
                          border border-gray-300 p-2`}>Application Method</th>
                          <th className={` ${theme === "light" ?'text-black' :'text-[#111A3A]'} 
                          border border-gray-300 p-2`}>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {myAddedVisas.map((data) => (
                          <tr key={data._id} className="hover:bg-gray-50 hover:text-[#111A3A]">
                            <td className="border border-gray-300 p-2">
                              <img src={data.image} alt="country" className="w-16 h-10 md:h-16 mx-auto rounded-full object-cover" />
                            </td>
                            <td className="border border-gray-300 p-2 text-center">{data.name}</td>
                            <td className="border border-gray-300 p-2 text-center">{data.visaType}</td>
                            <td className="border border-gray-300 p-2 text-center">{data.processingTime}</td>
                            <td className="border border-gray-300 p-2 text-center">${data.fee}</td>
                            <td className="border border-gray-300 p-2 text-center">{data.validity}</td>
                            <td className="border border-gray-300 p-2 text-center">{data.method}</td>
                            <td className="border border-gray-300 p-2 text-center">
                              <div className="flex justify-center gap-3">
                                <button
                              
                                  className="btn hover:bg-black bg-green-700 text-white text-xl"
                                  onClick={() => openUpdateModal(data)}
                                >
                                  <MdOutlineModeEditOutline />
                                </button>
                                <button
                                 
                                  onClick={() => handleDelete(data._id)}
                                  className="btn text-xl bg-red-600 hover:bg-black text-white"
                                >
                                  <MdDeleteForever />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
            </div>

            {isModalOpen && visaToUpdate && (
                <div className="fixed z-10 inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white md:p-8 p-4 rounded-lg w-10/12 h-80 md:h-auto md:max-w-lg">
                        <h2 className="md:text-xl   font-semibold text-[#111A3A] mb-3 md:mb-4">Update Visa Information</h2>
                        <form onSubmit={handleUpdateSubmit}>
                            <div className="grid grid-cols-2 text-xs md:text-base gap-3">
                                <label className="block  md:mb-2">
                                    Country Name:
                                    <input
                                        type="text"
                                        name="name"
                                        defaultValue={visaToUpdate.name}
                                        className="w-full p-1 md:p-2 border rounded"
                                    />
                                </label>
                                <label className="block md:mb-2">
                                    Visa Type:
                                    <input
                                        type="text"
                                        name="visaType"
                                        defaultValue={visaToUpdate.visaType}
                                        className="w-full p-1 md:p-2 border rounded"
                                    />
                                </label>
                                <label className="block md:mb-2">
                                    Processing Time:
                                    <input
                                        type="text"
                                        name="processingTime"
                                        defaultValue={visaToUpdate.processingTime}
                                        className="w-full p-1 md:p-2 border rounded"
                                    />
                                </label>
                                <label className="block md:mb-2">
                                    Fee:
                                    <input
                                        type="number"
                                        name="fee"
                                        defaultValue={visaToUpdate.fee}
                                        className="w-full p-1 md:p-2 border rounded"
                                    />
                                </label>
                                <label className="block md:mb-2">
                                    Validity:
                                    <input
                                        type="text"
                                        name="validity"
                                        defaultValue={visaToUpdate.validity}
                                        className="w-full p-1 md:p-2 border rounded"
                                    />
                                </label>
                                <label className="block md:mb-2">
                                    Application Method:
                                    <input
                                        type="text"
                                        name="method"
                                        defaultValue={visaToUpdate.method}
                                        className="w-full p-1 md:p-2 border rounded"
                                    />
                                </label>
                                <label className="block md:mb-4">
                                    Country Image URL:
                                    <input
                                        type="text"
                                        name="image"
                                        defaultValue={visaToUpdate.image}
                                        className="w-full p-1 md:p-2 border rounded"
                                    />
                                </label>

                            </div>

                            <div className="flex justify-between mt-4 md:mt-0">
                                <button
                                    type="button"
                                    onClick={() => setIsModalOpen(false)}
                                    className="bg-red-600 hover:bg-black text-white px-4 py-2 rounded">
                                    Cancel
                                </button>
                                <button

                                    type="submit"
                                    className=" hover:bg-black bg-green-700 text-white px-4 py-2 rounded">
                                    Update Visa
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

           
        </div>
    );
};

export default MyAddedVisas;
