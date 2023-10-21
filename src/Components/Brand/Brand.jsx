import BrandCard from "./BrandCard";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const Brand = ({ brands }) => {
  return (
    <div className="py-20 px-10">
      <h3 className="text-5xl mb-7 Oswald font-bold text-center text-gray-600">
        Our <span className="text-[#ffc107]">Brand</span>
      </h3>
      <div className="py-5 px-5 gap-6 text-center justify-between items-center grid grid-cols-2  md:grid-cols-3">
        {brands &&
          brands.map((brand) => (
            <Link key={brand.id} to={`/${brand.path}`}>
              <BrandCard brand={brand}></BrandCard>
            </Link>
          ))}
      </div>
    </div>
  );
};

Brand.propTypes = {
  brands: PropTypes.array,
};
export default Brand;
