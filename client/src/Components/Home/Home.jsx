import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import LatestVisas from "../LatestVisas/LatestVisas";
import VisaProcess from "../VisaProcess/VisaProcess";
import Team from "../Team/Team";
import Category from "../Category/Category";

const Home = () => {

  return (
    <div >
      <Helmet>
        <title>VisaZen | Home</title>
      </Helmet>
      <Banner />
      <LatestVisas />
      <VisaProcess />
      <Category />
      <Team />
    </div>
  );
};

export default Home;