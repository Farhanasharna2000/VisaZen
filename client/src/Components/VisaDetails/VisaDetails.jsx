import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { authContext } from "../AuthProvider/AuthProvider";
import { FaTimes } from "react-icons/fa";
import Swal from "sweetalert2";
import Lottie from "react-lottie";
import animationData from '../../animations/Animation - 1733596091594.json'
import { LuPhoneCall } from "react-icons/lu";
import { Helmet } from "react-helmet";
import { useTheme } from "../ThemeContext/ThemeContext";

const VisaDetails = () => {

    const { id } = useParams();
    const { user } = useContext(authContext);
    const { theme } = useTheme();

    const [visaDetails, setVisaDetails] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        firstName: "",
        lastName: "",
        countryImg: "",
        country: "",
        type: "",
        time: "",
        validity: "",
        method: "",
        appliedDate: new Date().toISOString().split('T')[0],
        fee: 0,
    });

    const lottieOptions = {
        loop: true,
        autoplay: true,
        animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    useEffect(() => {
        fetch(`https://visazen-server.vercel.app/visaData/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setVisaDetails(data);
                setFormData(prevData => ({
                    ...prevData,
                    fee: data.fee,
                    countryImg: data.image,
                    country: data.name,
                    type: data.visaType,
                    time: data.processingTime,
                    validity: data.validity,
                    method: data.method,


                }));
            });
    }, [id]);

    useEffect(() => {
        if (user) {
            setFormData((prevData) => ({
                ...prevData,
                email: user.email
            }));
        }
    }, [user]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {

        e.preventDefault();
        fetch("https://visazen-server.vercel.app/visaApplications", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
            .then((res) => res.json())
            .then((data) => {
                Swal.fire({
                    title: "Application Submitted!",
                    text: "Your visa application has been submitted successfully.",
                    icon: "success",
                    confirmButtonText: "OK",
                    backdrop: `rgba(0, 0, 0, 0.4)`
                });
                console.log("Visa application submitted:", data);
                setIsModalOpen(false);
                formData.reset();
            });
    };

    if (!visaDetails) return <span className="loading loading-bars loading-lg mx-auto block py-40"></span>;

    return (
        <div >
            <Helmet>
                <title>VisaZen | Visa Details</title>
            </Helmet>
           
            <div className=" w-11/12 mx-auto px-3 pt-32">
                <div className="lg:flex gap-5 ">
                    <div className="mt-6">
                        <div className="flex justify-center ">
                            <Lottie options={lottieOptions} height={300} width={300} />
                        </div>
                        <div className="bg-[#ff3c00] text-white text-center py-5 font-bold">
                            <h2>Our Appoinment Service Call Us</h2>
                            <p className="flex justify-center items-center gap-2"><span><LuPhoneCall /></span>+123 456 7890</p>
                        </div>
                    </div>

                    <div className="mb-8">
                        <img
                            src={visaDetails.image}
                            alt={`${visaDetails.name} flag`}
                            className="w-full h-96 rounded-lg my-6 "
                        />
                        <h2 className={` ${theme === "light" ?'text-indigo-800' :'text-white'}  text-3xl font-extrabold mb-4  `}>
                            {visaDetails.visaType} | {visaDetails.name}
                        </h2>
                        <p className=" mb-4">
                            {visaDetails.description}
                        </p>
                        <p className=" mb-2">
                            <strong>Processing Time:</strong> {visaDetails.processingTime}
                        </p>
                        <p className=" mb-2">
                            <strong>Fee:</strong> {visaDetails.fee}
                        </p>
                        <p className=" mb-2">
                            <strong>Validity:</strong> {visaDetails.validity}
                        </p>
                        <p className=" mb-2">
                            <strong>Application Method:</strong> {visaDetails.method}
                        </p>

                        <p className=" mb-4">
                            <strong>Age:</strong> {visaDetails.age} years
                        </p>
                        <div className="mt-4">
                            <strong className={` ${theme === "light" ?'text-indigo-800' :'text-white'}  
               `}>Required Documents:</strong>
                            <ul className="list-disc pl-5 space-y-2">
                                {visaDetails.requiredDocuments.map((doc, index) => (
                                    <li key={index} >
                                        {doc}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {user?
                     (   <button
                        className="mt-4 font-bold hover:bg-slate-100 bg-[#111A3A]  hover:text-[#111A3A] text-white p-2 rounded-lg "
                        onClick={() => setIsModalOpen(true)}
                    >
                        Apply for the Visa
                    </button> )
                    :
                  
                    <Link to={'/login'}>
                    <button
                        className="mt-4 font-bold hover:bg-slate-100 bg-[#111A3A]  hover:text-[#111A3A] text-white p-2 rounded-lg "
                       
                    >
                        Apply for the Visa
                    </button>
                    </Link>
                    }
                      
                    </div>
                </div>
            </div>


            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg md:w-5/12 transform transition-transform duration-500 scale-95 hover:scale-100">
                        <div className="flex justify-between items-center">
                            <h2 className="text-2xl font-bold mb-4">Visa Application Form</h2>
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="text-gray-600 hover:text-red-500"
                            >
                                <FaTimes size={24} />
                            </button>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="grid grid-cols-2 gap-3">
                                <div className="mb-4">
                                    <label htmlFor="email" className="block  ">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        readOnly
                                        className="w-full p-2 border border-gray-300 rounded"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="firstName" className="block ">First Name</label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full p-2 border border-gray-300 rounded"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="lastName" className="block ">Last Name</label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full p-2 border border-gray-300 rounded"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="appliedDate" className="block ">Applied Date</label>
                                    <input
                                        type="date"
                                        id="appliedDate"
                                        name="appliedDate"
                                        value={formData.appliedDate}
                                        onChange={handleInputChange}
                                        readOnly
                                        className="w-full p-2 border border-gray-300 rounded"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="fee" className="block ">Visa Fee</label>
                                    <input
                                        type="number"
                                        id="fee"
                                        name="fee"
                                        value={formData.fee}
                                        onChange={handleInputChange}
                                        readOnly
                                        className="w-full p-2 border border-gray-300 rounded"
                                    />
                                    
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full  hover:bg-black bg-green-700 text-white p-2 rounded-lg "
                            >
                                Apply
                            </button>
                        </form>
                    </div>
                </div>
            )}

            
        </div>
    );
};

export default VisaDetails;
