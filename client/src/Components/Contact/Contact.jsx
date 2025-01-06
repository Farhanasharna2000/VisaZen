
import { MdEmail } from 'react-icons/md';
import img1 from '../../assets/2148786099.jpg'
import { FaLocationDot } from 'react-icons/fa6';
import { PiPhoneCallFill } from 'react-icons/pi';
import { toast } from 'react-hot-toast';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useTheme } from '../ThemeContext/ThemeContext';
const Contact = () => {
    const form = useRef();
    const { theme } = useTheme();
    const sendEmail = (e) => {
        e.preventDefault();

        
        const formData = new FormData(form.current);
        if (!formData.get('from_name') || !formData.get('message')) {
            toast.error('Please fill out all required fields.');
            return;
        }

        emailjs
            .sendForm('service_mkf2dyi', 'template_7kb8vtw', form.current, 'ZgBg-DaCdELJfhP2a')
            .then(
                () => {
                    toast.success('Message sent successfully!');
                    form.current.reset();
                },
                (error) => {
                    toast.error(`Failed to send message: ${error.text}`);
                }
            );
    };

    return (
        <div className='md:pt-28 pt-20'>
            <section style={{ backgroundImage: `url(${img1})` }} className=" bg-no-repeat  bg-cover  h-[150px]  md:h-[400px] bg-center grid items-center justify-center">
                <div className="mt-10 text-center">
                    <h1 className=" text-[#111A3A] text-xl md:text-4xl  leading-10 lg:leading-[60px]   font-bold  uppercase">Contact Us</h1>
                    <div className="flex items-center text-red-500 justify-center leading-10 text-base md:text-2xl  font-semibold">
                        <a className="  flex items-center" href="/">Home <span className="mx-2 ">/</span></a>
                        <a className="   capitalize" href="#">Contact Us</a>
                    </div>
                </div>
            </section>
            <div className="py-8  w-11/12 mx-auto px-3">
                <div className=" bg-slate-100 rounded-lg py-8 px-8">
                    <div className="flex items-center flex-col md:flex-row ">
                        <div className=" sm:p-5 flex-1 aos-init aos-animate" data-aos="zoom-in-up" data-aos-duration="1000">

                            <h2 className=" text-2xl md:text-4xl leading-7 md:leading-8 lg:leading-9   text-uppercase text-[#111A3A] font-bold my-3 md:my-5">CONTACT WITH US</h2>
                            <p className={` ${theme === "light" ?'text-black' :'text-[#111A3A]'} text-sm  md:text-base    leading-[26px]`}>Rapidiously myocardinate cross-platform intellectual capital after the model. Appropriately create interactive infrastructures after maintance Holisticly facilitate stand-alone</p>
                            <div className="flex items-center my-4 md:my-5 lg:my-[26px] group">
                                <div className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] lg:w-[50px] lg:h-[50px] 2xl:w-[60px] 2xl:h-[60px] bg-[#ff0000e1] text-2xl text-white dark: grid items-center justify-center rounded-full transition-all duration-300"><PiPhoneCallFill /></div>
                                <div
                                    className="ml-3 md:ml-4">
                                    <p className=" text-sm leading-[26px] font-bold ">Call Us Now</p>
                                    <p className={` ${theme === "light" ?'text-black' :'text-[#111A3A]'} text-lg  leading-[26px]  font-bold`}>+123 456 7890</p>
                                </div>
                            </div>
                            <hr className="   h-[1px]" />
                            <div className="flex items-center my-4 md:my-5 lg:my-[26px] group">
                                <div className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] lg:w-[50px] lg:h-[50px]  bg-[#ff0000e1]  text-white text-2xl  dark: grid items-center justify-center rounded-full transition-all duration-300">
                                    <MdEmail />
                                </div>
                                <div
                                    className="ml-3 md:ml-4">
                                    <p className=" text-sm leading-[26px]  font-bold">Send Email</p>
                                    <p className={` ${theme === "light" ?'text-black' :'text-[#111A3A]'} text-lg  leading-[26px]  font-bold`}>info@visazen.com</p>
                                </div>
                            </div>
                            <hr className="  h-[1px]" />
                            <div className="flex items-center my-4 md:my-5 lg:my-[26px] group">
                                <div className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] lg:w-[50px] lg:h-[50px] 2xl:w-[60px] 2xl:h-[60px] bg-[#ff0000e1]  text-white text-2xl  dark: grid items-center justify-center rounded-full transition-all duration-300"><FaLocationDot /></div>
                                <div
                                    className="ml-3 md:ml-4">
                                    <p className=" text-sm leading-[26px]  font-bold">Our Location</p>
                                    <p className={` ${theme === "light" ?'text-black' :'text-[#111A3A]'} text-lg  leading-[26px]  font-bold`}>Dhaka, Bangladesh</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 py-5 sm:p-5 aos-init aos-animate" data-aos="zoom-in-up" data-aos-duration="1000">
                            <div className="bg-white  p-[30px] lg:p-[45px] 2xl:p-[61px] rounded-lg">
                                <h2 className="text-xl md:text-3xl leading-7 md:leading-8 lg:leading-9   text-red-500 font-semibold text-center">GET IN TOUCH</h2>
                                <div className="grid items-center grid-cols-1 gap-2 mt-8">
                                <form ref={form} onSubmit={sendEmail} className="space-y-6">

                                    <input type="text" className="w-full h-12 md:h-13 lg:h-[59px] px-4 border border-gray rounded-lg dark: outline-none  bg-transparent mt-4 focus:ring-0   focus:outline-none"
                                        placeholder="Your Name" 
                                        name="from_name"
                                        required="" />
                                    <input type="email" className="w-full h-12 md:h-13 rounded-lg lg:h-[59px] px-4 border  border-gray  dark: outline-none  bg-transparent mt-4 focus:ring-0   focus:outline-none"
                                        placeholder="Enter E-mail"
                                         name="from_email"
                                        required="" />
                                  
                                    <textarea
                                         name="message" id="" cols="30" rows="10" className="w-full h-[121px] px-4 border border-gray rounded-lg dark: outline-none  bg-transparent mt-4 pt-4 focus:ring-0    focus:outline-none"
                                        placeholder="Write Message:"></textarea>
                                    <button
                                     type="submit"
                                        className="w-full  bg-[#111A3A] hover:bg-slate-300 hover:text-[#111A3A] text-white font-bold
                                         py-2 px-4 mt-4 rounded ">SEND MESSAGE</button>
                                    </form>
                                         </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;