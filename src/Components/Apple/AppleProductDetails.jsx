import { useLoaderData } from "react-router-dom";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import Rating from "react-rating";

const AppleProductDetails = () => {
  const details = useLoaderData();
  const { ProductName, brand, description, img, price, rating } = details;
  const parRating = parseFloat(rating);
  const addedCart = { ProductName, brand, description, img, price, rating };
  const handleAddProduct = () => {
    console.log(addedCart);
    fetch(
      " https://dream-gadget-server-dp5f86ygc-arafat-ibn-abdullahs-projects.vercel.app/cart",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(addedCart),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          toast.success("Product added in Cart successfully");
        }
      });
  };

  return (
    <div className="bg-gray-100 py-20 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row -mx-4">
          <div className="md:flex-1 px-4">
            <div className="h-[460px] rounded-lg bg-white flex justify-center items-center   mb-4">
              <img
                className=" w-auto h-[350px] object-cover"
                src={img}
                alt={img}
              />
            </div>
          </div>
          <div className="md:flex-1 px-4">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
              {ProductName}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
              ante justo. Integer euismod libero id mauris malesuada tincidunt.
            </p>
            <div className="flex mb-4">
              <div className="mr-4">
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  Price: ${price}
                </span>
              </div>
              <div>
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  Availability:
                </span>
                <span className="text-gray-600 dark:text-gray-300">
                  In Stock
                </span>
              </div>
            </div>
            {/* // rating card */}
            <div className="flex justify-start items-center">
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

                <span>
                  ({" "}
                  {rating &&
                    (rating.length > 3
                      ? rating.slice(0, 3)
                      : rating
                      ? rating
                      : "0")}
                  )
                </span>
              </p>
            </div>

            <div>
              <span className="font-bold text-gray-700 dark:text-gray-300">
                Product Description:
              </span>
              <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                {description}
              </p>
              <div className="flex gap-4 mt-6">
                <button
                  onClick={handleAddProduct}
                  className="w-[400px] bg-[#ffc107] dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700"
                >
                  Add to Cart
                </button>
                <Link to={"/apple"}>
                  <button className=" px-10 bg-[#ffc107] dark:bg-gray-600 text-white py-2  rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">
                    Back
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppleProductDetails;
