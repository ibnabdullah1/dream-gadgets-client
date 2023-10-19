import BrandCard from "./BrandCard";
import { Link } from "react-router-dom";
const Brand = ({ brands }) => {
  return (
    <div className="py-20 px-10">
      <h3 className="text-4xl mb-7 font-bold text-center text-gray-600">
        Our Category
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {brands?.map((brand) => (
          <Link key={brand.id} to={`/${brand.path}`}>
            <BrandCard brand={brand}></BrandCard>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Brand;
