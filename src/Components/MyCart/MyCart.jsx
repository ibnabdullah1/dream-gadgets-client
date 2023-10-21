import { useLoaderData } from "react-router-dom";
import MyCartsCard from "./MyCartsCard";
import { useState } from "react";

const MyCart = () => {
  const LoadedCarts = useLoaderData();

  const [Carts, setCarts] = useState(LoadedCarts);

  return (
    <div>
      <div className="grid grid-cols-1 min-h-screen md:py-20 px-10 gap-7 md:grid-cols-2 lg:grid-cols-3 bg-gray-100">
        {Carts &&
          Carts.map((cart) => (
            <MyCartsCard
              key={cart._id}
              setCarts={setCarts}
              Carts={Carts}
              cart={cart}
            />
          ))}
      </div>
    </div>
  );
};

export default MyCart;
