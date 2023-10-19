import { useLoaderData } from "react-router-dom";
import LenovoProductsCard from "./LenovoProductsCard";
const LenovoProducts = () => {
  const lenovoProducts = useLoaderData();

  return (
    <div className="grid bg-gray-100 grid-cols-1 min-h-screen md:py-20 px-10 gap-7 md:grid-cols-2 lg:grid-cols-3">
      {lenovoProducts.map((lenovoProduct) => (
        <LenovoProductsCard
          key={lenovoProduct._id}
          lenovoProduct={lenovoProduct}
        ></LenovoProductsCard>
      ))}
    </div>
  );
};

export default LenovoProducts;
