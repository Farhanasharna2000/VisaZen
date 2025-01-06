
import img1 from '../../assets/img.avif'
import img2 from '../../assets/img2.jpg'
import img3 from '../../assets/img3.avif'
import img4 from '../../assets/img4.webp'
import { useTheme } from '../ThemeContext/ThemeContext';



const Team = () => {
    const { theme } = useTheme();
    return (
        <div className='bg-gray-100 py-8 mb-8 rounded-lg w-11/12 mx-auto px-3'>
            <div className='text-center  '>
                <p className='md:text-xl text-lg font-semibold text-red-500 uppercase '>PROFESSIONAL TEAM</p>
                <h1 className='text-xl md:text-4xl text-[#111A3A] font-bold my-6'>Meet Our Dedicated Team</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-6  '>
                <div className=' '>
                    <div>
                        <img className='w-full h-48 md:h-52 rounded-t-md ' src={img4} alt="" />
                    </div>

                    <div className="bg-red-200 py-4 px-6  rounded-b-md ">
                        <h2 className={` ${theme === "light" ?'text-[#111A3A]' :'text-black'} text-xl font-semibold text-center`}>Bilal Abbas</h2>
                        <p className="text-center text-blue-800">Migration Agent</p>
                    </div>

                </div>
                <div className=''>
                    <div>
                        <img className='w-full h-48 md:h-52 rounded-t-md ' src={img2} alt="" />
                    </div>

                    <div className="bg-red-200 py-4 px-6  rounded-b-md ">
                        <h2 className={` ${theme === "light" ?'text-[#111A3A]' :'text-black'} text-xl font-semibold text-center`}>Zara Sehgal</h2>
                        <p className="text-center text-blue-800">Migration Agent</p>
                    </div>

                </div>
                <div className=''>
                    <div>
                        <img className='w-full h-48 md:h-52 rounded-t-md ' src={img3} alt="" />
                    </div>

                    <div className="bg-red-200 py-4 px-6  rounded-b-md ">
                        <h2 className={` ${theme === "light" ?'text-[#111A3A]' :'text-black'} text-xl font-semibold text-center`}>Avinash Roy</h2>
                        <p className="text-center text-blue-800">Migration Agent</p>
                    </div>

                </div>
                <div className=''>
                    <div>
                        <img className='w-full h-48 md:h-52 rounded-t-md ' src={img1} alt="" />
                    </div>

                    <div className="bg-red-200 py-4 px-6  rounded-b-md ">
                        <h2 className={` ${theme === "light" ?'text-[#111A3A]' :'text-black'} text-xl font-semibold text-center`}>Esha Khan</h2>
                        <p className="text-center text-blue-800">Migration Agent</p>
                    </div>

                </div>
            </div>
            <div>
            </div>

        </div>
    );
};

export default Team;