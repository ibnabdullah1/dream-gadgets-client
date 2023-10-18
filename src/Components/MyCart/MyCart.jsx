import { useLoaderData } from "react-router-dom";
import MyCartsCard from "./MyCartsCard";

const MyCart = () => {
  const Carts = useLoaderData();
  console.log(Carts);

  return (
    <div className="grid grid-cols-1 min-h-screen md:py-20 px-10 gap-7 md:grid-cols-2 lg:grid-cols-3">
      {Carts.map((cart) => (
        <MyCartsCard key={cart._id} cart={cart} />
      ))}
    </div>
  );
};

export default MyCart;
