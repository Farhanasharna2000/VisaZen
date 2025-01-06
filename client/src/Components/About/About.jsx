import img1 from '../../assets/2148786099.jpg'
import img2 from '../../assets/rb_52334.png'
import { useTheme } from '../ThemeContext/ThemeContext';


const About = () => {
    const { theme } = useTheme();
    return (
        <div className='md:pt-28 pt-20'>
          <section style={{ backgroundImage: `url(${img1})` }} className=" bg-no-repeat bg-cover h-[150px]  md:h-[400px] bg-center grid items-center justify-center">
    <div className="mt-10 text-center">
        <h1 className="text-xl md:text-4xl  leading-10 md:leading-[60px]  text-[#111A3A] font-bold  uppercase">About Us</h1>
        <div className="flex items-center text-red-500 justify-center text-base md:text-2xl leading-10   font-semibold ">
            <a className=" flex items-center" href="/">Home <span className="mx-2 ">/</span></a>
            <a className=" capitalize" href="#">About Us</a>
        </div>
    </div>
</section>
<section className='w-11/12 mx-auto px-3 bg-slate-100 my-8'>
    <div className="mx-8 py-8 sm:overflow-hidden lg:overflow-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex-1 aos-init aos-animate" data-aos="zoom-in-up" data-aos-duration="1000">
                <img src={img2} alt="" className="w-full h-full bg-[#111A3A]"/>
                </div>
            <div className="mt-10 md:mt-0 md:ml-10  space-y-3  flex-1 aos-init aos-animate" data-aos="zoom-in-down" data-aos-duration="1000">
                <h1 className="text-xl md:text-3xl   text-red-500 font-semibold my-4">VisaZen <br /> Dhaka, Bangladesh</h1>
                <p className={` ${theme === "light" ?'text-black' :'text-[#111A3A]'} text-sm  md:text-base    leading-[26px]`}>Visa Navigator Portal to simplify the process of checking visa requirements, applying for visas online, and tracking applications. This project must include a dynamic user interface, robust functionality, and seamless user experience.
                </p>
                <p className={` ${theme === "light" ?'text-black' :'text-[#111A3A]'} text-sm sm:text-base    leading-[26px] mt-5`}>VisaZen is your trusted partner for visa applications and requirements. Simplify the process and explore the world hassle-free!</p>
              
            </div>
        </div>
    </div>
</section>  

        </div>
    );
};

export default About;