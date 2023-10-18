import Banner from "../../Components/Banner/Banner";
import { useLoaderData } from "react-router-dom";
import Brand from "../../Components/Brand/Brand";
const Home = () => {
  const brands = useLoaderData();
  return (
    <div>
      <Banner />
      <Brand brands={brands} />
    </div>
  );
};

export default Home;
