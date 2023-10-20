import Banner from "../../Components/Banner/Banner";
import { useLoaderData } from "react-router-dom";
import Brand from "../../Components/Brand/Brand";
import Gallery from "../../Components/Gallery/Gallery";
import About from "../../Components/About/About";
const Home = () => {
  const brands = useLoaderData();
  return (
    <div>
      <Banner />
      <Brand brands={brands} />
      <About />
      <Gallery />
    </div>
  );
};

export default Home;
