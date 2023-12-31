import { useLoaderData } from "react-router-dom";

import SamsungProductsCard from "./SamsungProductsCard";
import SamsungAds from "./SamsungAds";
const SamsungProducts = () => {
  const samsungProducts = useLoaderData();
  console.log(samsungProducts);

  return (
    <div>
      <SamsungAds />
      <div className="grid grid-cols-1 min-h-screen md:py-20 py-10 px-10 gap-7 md:grid-cols-2 lg:grid-cols-3 bg-gray-100">
        {samsungProducts &&
          samsungProducts.map((samsungProduct) => (
            <SamsungProductsCard
              key={samsungProduct._id}
              samsungProduct={samsungProduct}
            ></SamsungProductsCard>
          ))}
      </div>
    </div>
  );
};

export default SamsungProducts;
