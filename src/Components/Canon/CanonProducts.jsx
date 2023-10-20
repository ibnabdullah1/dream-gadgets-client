import { useLoaderData } from "react-router-dom";
import CanonProductsCard from "./CanonProductsCard";
import CanonAds from "./CanonAds";
const CanonProducts = () => {
  const canonProducts = useLoaderData();

  return (
    <div>
      <CanonAds />
      <div className="grid bg-gray-100 grid-cols-1 min-h-screen md:py-20 px-10 gap-7 md:grid-cols-2 lg:grid-cols-3">
        {canonProducts.map((canonProduct) => (
          <CanonProductsCard
            key={canonProduct._id}
            canonProduct={canonProduct}
          ></CanonProductsCard>
        ))}
      </div>
    </div>
  );
};

export default CanonProducts;
