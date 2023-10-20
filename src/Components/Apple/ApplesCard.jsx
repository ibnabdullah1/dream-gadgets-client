import Swal from "sweetalert2";

import { Link } from "react-router-dom";
const ApplesCard = ({ apple }) => {
  const { _id, ProductName, brand, description, img, price, rating } = apple;

  return (
    <section className=" bg-white rounded  py-6 transform duration-500 hover:-translate-y-2 cursor-pointer">
      <h3 className="bg-[#050504] w-[100px] py-2 flex justify-center items-center text-white font-semibold rounded-r-3xl">
        {brand}
      </h3>

      <div className="flex justify-center">
        <img className="h-[180px] w-auto" src={img} alt="" />
      </div>
      <div className="space-x-1 flex justify-center mt-6 items-center">
        <svg
          className="w-4 h-4 mx-px fill-current text-[#ffc107]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 14 14"
        >
          <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
        </svg>
        <svg
          className="w-4 h-4 mx-px fill-current text-[#ffc107]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 14 14"
        >
          <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
        </svg>
        <svg
          className="w-4 h-4 mx-px fill-current text-[#ffc107]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 14 14"
        >
          <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
        </svg>
        <svg
          className="w-4 h-4 mx-px fill-current text-[#ffc107]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 14 14"
        >
          <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
        </svg>
        <svg
          className="w-4 h-4 mx-px fill-current text-gray-300"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 14 14"
        >
          <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
        </svg>
        {rating && <p> ({rating.length > 3 ? rating.slice(0, 3) : rating})</p>}
      </div>

      <h1 className="font-bold text-3xl md:text-xl text-slate-600 text-center mt-3">
        {ProductName.length > 30
          ? `${ProductName.slice(0, 30)}...`
          : ProductName}
      </h1>
      <p className="mb-5 text-base font-medium text-zinc-800 text-center">
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

export default ApplesCard;
