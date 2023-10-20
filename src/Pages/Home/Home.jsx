import Banner from "../../Components/Banner/Banner";
import { useLoaderData } from "react-router-dom";
import Brand from "../../Components/Brand/Brand";
import Reviews from "../../Components/Reviews/Reviews";
import Gallery from "../../Components/Gallery/Gallery";
const Home = () => {
  const brands = useLoaderData();
  return (
    <div>
      <Banner />
      <Brand brands={brands} />
      {/* <Reviews /> */}
      <Gallery />
    </div>
  );
};

export default Home;
