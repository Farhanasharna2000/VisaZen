import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import { ThemeProvider } from "../Components/ThemeContext/ThemeContext";

const MainLayOut = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  return (
    <ThemeProvider>
      <div className="font-poppins">
        <Helmet>
          <title>VisaZen</title>
        </Helmet>
        <Navbar theme={theme} setTheme={setTheme} />
        <div >
          <Outlet />
        </div>
        <Footer theme={theme} />
      </div>
    </ThemeProvider>
  );
};

export default MainLayOut;
