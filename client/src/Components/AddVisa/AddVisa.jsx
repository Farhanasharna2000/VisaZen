import Swal from "sweetalert2";
import DatePicker from "react-datepicker";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { useContext } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import { Helmet } from "react-helmet";

const AddVisa = () => {
    const [startDate, setStartDate] = useState(new Date());

    const { user } = useContext(authContext)

    const handleSubmit = e => {
        e.preventDefault()

        const form = e.target;
        const image = form.countryImage.value;
        const name = form.countryName.value;
        const visaType = form.visaType.value;
        const processingTime = form.processingTime.value;
        const description = form.description.value;
        const age = form.ageRestriction.value;
        const fee = form.fee.value;
        const validity = startDate.toLocaleDateString("en-CA");
        const method = form.applicationMethod.value;
        const authUserEmail = user.email;


        const requiredDocuments = Array.from(
            form.querySelectorAll('input[name="requiredDocuments"]:checked')
        ).map(input => input.value);


        const newData = { image, name, visaType, processingTime, description, age, fee, validity, method, requiredDocuments, authUserEmail }


        fetch("https://server-9h97n3i0b-farhana-sharnas-projects.vercel.app/visaData", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newData)
        })
            .then(res => res.json())
            .then(data => {

                if (data.insertedId) {
                    Swal.fire('Visa added successfully')
                    form.reset();
                    setStartDate(new Date());
                }
            })

    }
    return (
        <div className="md:pt-32 pt-20">
            <Helmet>
                <title>visaZen | Add Visa</title>
            </Helmet>
           

            <div className="md:max-w-4xl md:mx-auto m-5 p-6  bg-slate-100 rounded-xl shadow-lg mb-8 ">
                <h1 className="text-xl md:text-4xl text-red-500 font-bold mb-5">Add Visa</h1>
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div >
                            <label className="block font-bold">Country Image URL:</label>
                            <input
                                type="text"
                                name="countryImage"
                                className="w-full px-3 py-2 border rounded"
                                placeholder="Enter image URL"
                                required
                            />
                        </div>

                        <div >
                            <label className="block font-bold">Country Name:</label>
                            <input
                                type="text"
                                name="countryName"
                                className="w-full px-3 py-2 border rounded"
                                required
                            />
                        </div>

                        <div >
                            <label className="block font-bold">Visa Type:</label>
                            <select
                                name="visaType"
                                className="w-full px-3 py-2 border rounded"
                            >
                                <option selected>Select Visa Type</option>
                                <option value="Tourist visa">Tourist visa</option>
                                <option value="Student visa">Student visa</option>
                                <option value="Residence visa">Residence visa</option>
                                <option value="Business visa">Business visa</option>

                            </select>
                        </div>

                        <div >
                            <label className="block font-bold">Processing Time:</label>
                            <input
                                type="text"
                                name="processingTime"
                                className="w-full px-3 py-2 border rounded"
                                required
                            />
                        </div>

                        <div >
                            <label className="block font-bold">Required Documents:</label>
                            <div className="flex flex-wrap gap-2">
                                <label>
                                    <input
                                        type="checkbox"
                                        name="requiredDocuments"
                                        value="Valid passport"
                                    />{" "}
                                    Valid passport
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                        name="requiredDocuments"
                                        value="Visa application form"
                                    />{" "}
                                    Visa application form
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                        name="requiredDocuments"
                                        value="Recent passport-sized photograph"
                                    />{" "}
                                    Recent passport-sized photograph
                                </label>
                            </div>
                        </div>

                        <div >
                            <label className="block font-bold">Description:</label>
                            <textarea
                                name="description"
                                className="w-full px-3 py-2 border rounded"
                                required
                            ></textarea>
                        </div>

                        <div >
                            <label className="block font-bold">Age Restriction:</label>
                            <input
                                type="number"
                                name="ageRestriction"
                                className="w-full px-3 py-2 border rounded"
                            />
                        </div>

                        <div >
                            <label className="block font-bold">Fee:</label>
                            <input
                                type="number"
                                name="fee"
                                className="w-full px-3 py-2 border rounded"
                                required
                            />
                        </div>
                        <div >
                            <label className="block font-bold">Application Method:</label>
                            <input
                                type="text"
                                name="applicationMethod"
                                className="w-full px-3 py-2 border rounded"
                                required
                            />
                        </div>
                        <div className="mb-5 " >
                            <label className="block font-bold">Validity:</label>
                            <DatePicker
                                className="input px-3 py-2 border rounded w-full"
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                            />
                        </div>


                    </div>


                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="w-48 bg-[#ff0000e1] hover:bg-white hover:text-[#ff0000e1] text-white py-2 px-4 rounded"
                        >
                            Add Visa
                        </button>
                    </div>

                </form>
            </div>
          
        </div>
    );
};

export default AddVisa;