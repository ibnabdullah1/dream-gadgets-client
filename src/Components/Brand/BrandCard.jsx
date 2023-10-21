import "./BrandCard.css";
import PropTypes from "prop-types";
const BrandCard = ({ brand }) => {
  const { img, title } = brand;
  return (
    <div className="rounded-md HoverShadow py-4 px-2  ">
      <div className=" h-[100px]   flex justify-center mb-3 items-center ">
        <img src={img} alt={title} className=" h-[90px]   mx-auto" />
      </div>
      <h1>{title}</h1>
    </div>
  );
};

BrandCard.propTypes = {
  brand: PropTypes.shape({
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};
export default BrandCard;
