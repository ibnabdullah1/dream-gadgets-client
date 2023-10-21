import { useLoaderData } from "react-router-dom";
import HpProductsCard from "./HpProductsCard";
import HpAds from "./HpAds";
const HpProducts = () => {
  const hpProducts = useLoaderData();

  return (
    <div>
      <HpAds />
      <div className="grid grid-cols-1 min-h-screen py-10 md:py-20 px-10 gap-7 md:grid-cols-2 lg:grid-cols-3 bg-gray-100">
        {hpProducts &&
          hpProducts.map((hpProduct) => (
            <HpProductsCard
              key={hpProduct._id}
              hpProduct={hpProduct}
            ></HpProductsCard>
          ))}
      </div>
    </div>
  );
};

export default HpProducts;
