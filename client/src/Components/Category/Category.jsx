import svg1 from "../../assets/turist.svg"
import svg2 from "../../assets/working.svg"
import svg3 from "../../assets/student.svg"
import svg4 from "../../assets/residence.svg"
import { useTheme } from "../ThemeContext/ThemeContext";


const Category = () => {
  const { theme } = useTheme();
  return (
    <section className="py-8 bg-slate-100  rounded-xl w-11/12 mx-auto px-3 mb-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="md:text-xl text-lg font-semibold text-red-500 uppercase mb-4">
          Our Visa Categories
        </h2>
        <h1 className="text-xl md:text-4xl text-[#111A3A] font-bold mb-8">
          We Offer Citizenship & Immigration Services
        </h1>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-4 sm:grid-cols-2">
          <div className="bg-white shadow-lg rounded-lg p-6 text-center  hover:shadow-xl transition-transform transform hover:scale-105">
            <div className="mb-4">
              <div className="bg-red-500 p-4 inline-block rounded-full">
                <img
                  src={svg1}
                  alt="Tourist Visa Icon"
                  className="w-12 h-12"
                />
              </div>
            </div>
            <h3 className={` ${theme === "light" ?'text-[#111A3A]' :'text-black'} text-lg font-bold mb-2`}>Tourist Visa</h3>
            <p className="text-gray-600">
              Visit new places to discover with a Tourist Visa. We deliver your documents ...
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-transform transform hover:scale-105">
            <div className="mb-4">
              <div className="bg-red-500 p-4 inline-block rounded-full">
                <img
                  src={svg2}
                  alt="Business Visa Icon"
                  className="w-12 h-12"
                />
              </div>
            </div>
            <h3 className={` ${theme === "light" ?'text-[#111A3A]' :'text-black'} text-lg font-bold mb-2`}>Business Visa</h3>
            <p className="text-gray-600">
              Get your Visa now for new business and earning opportunities. We deliver your...
            </p>
          </div>


          <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-transform transform hover:scale-105">
            <div className="mb-4">
              <div className="bg-red-500 p-4 inline-block rounded-full">
                <img
                  src={svg3}
                  alt="Student Visa Icon"
                  className="w-12 h-12"
                />
              </div>
            </div>
            <h3 className={` ${theme === "light" ?'text-[#111A3A]' :'text-black'} text-lg font-bold mb-2`}>Student Visa</h3>
            <p className="text-gray-600">
              Embarking on a journey of higher education in a foreign country opens doors to...
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-transform transform hover:scale-105">
            <div className="mb-4">
              <div className="bg-red-500 p-4 inline-block rounded-full">
                <img
                  src={svg4}
                  alt="Residence Visa Icon"
                  className="w-12 h-12"
                />
              </div>
            </div>
            <h3 className={` ${theme === "light" ?'text-[#111A3A]' :'text-black'} text-lg font-bold mb-2`}>Residence Visa</h3>
            <p className="text-gray-600">
              Expert Guidance for a Seamless Immigration Journey Expert Guidance...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;