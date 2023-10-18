import { useLoaderData } from "react-router-dom";
import VivoProductsCard from "./VivoProductsCard";
const VivoProducts = () => {
  const vivoProducts = useLoaderData();

  return (
    <div className="grid grid-cols-1 min-h-screen md:py-20 px-10 gap-7 md:grid-cols-2 lg:grid-cols-3">
      {vivoProducts.map((vivoProduct) => (
        <VivoProductsCard
          key={vivoProduct._id}
          vivoProduct={vivoProduct}
        ></VivoProductsCard>
      ))}
    </div>
  );
};

export default VivoProducts;
