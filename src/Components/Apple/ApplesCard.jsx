import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Rating from "react-rating";
const ApplesCard = ({ apple }) => {
  const { _id, ProductName, brand, description, img, price, rating } = apple;
  const parRating = parseFloat(rating);

  return (
    <section className=" bg-white rounded  py-6 transform duration-500 hover:-translate-y-2 cursor-pointer">
      <h3 className="bg-[#050504] w-[100px] py-2 flex justify-center items-center text-white font-semibold rounded-r-3xl">
        {brand}
      </h3>

      <div className="flex justify-center">
        <img className="h-[180px] w-auto" src={img} alt="" />
      </div>
      <div className="flex justify-center mt-3 items-center">
        <p className="flex justify-center items-center font-sans text-base font-normal leading-normal text-orange-400 antialiased opacity-75">
          <Rating
            emptySymbol={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                />
              </svg>
            }
            fullSymbol={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clipRule="evenodd"
                />
              </svg>
            }
            initialRating={parRating}
            readonly
          />

          {rating && (
            <span>
              ( {rating.length > 3 ? rating.slice(0, 3) : rating ? rating : "0"}
              )
            </span>
          )}
        </p>
      </div>

      <h1 className="font-bold text-3xl md:text-xl text-slate-600 text-center mt-3">
        {ProductName.length > 30
          ? `${ProductName.slice(0, 30)}...`
          : ProductName}
      </h1>
      <p className="mb-5 px-2 text-base font-medium text-zinc-800 text-center">
        {description.length > 100
          ? `${description.slice(0, 70)}...`
          : description}
      </p>
      <h2 className="font-bold text-yellow-400 text-center  text-2xl  mb-5">
        $<span className="text-gray-600">{price}</span>
      </h2>

      <div className="flex gap-6 justify-center items-center">
        <Link to={`/apple/${_id}`}>
          <button className="inline-block px-12 py-3 text-sm font-medium text-white bg-[#ffc107] border border-[#ffc107] rounded active:text-[#ffc107] hover:bg-transparent hover:text-[#ffc107] focus:outline-none focus:ring focus:ring-[#ece8dc]">
            Details
          </button>
        </Link>
      </div>
    </section>
  );
};
ApplesCard.propTypes = {
  apple: PropTypes.shape({
    _id: PropTypes.string,
    ProductName: PropTypes.string,
    brand: PropTypes.string,
    description: PropTypes.string,
    img: PropTypes.string,
    price: PropTypes.string,
    rating: PropTypes.string,
  }).isRequired,
};
export default ApplesCard;
