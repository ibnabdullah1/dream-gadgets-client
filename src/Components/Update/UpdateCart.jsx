import Swal from "sweetalert2";
import { useLoaderData, useNavigate } from "react-router-dom";
const UpdateCart = () => {
  const Cart = useLoaderData();
  const { ProductName, brand, _id, img, price, rating } = Cart;
  const navigate = useNavigate();
  const handleUpdateProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const img = form.img.value;
    const ProductName = form.name.value;
    const brand = form.brand.value;
    const category = form.category.value;
    const price = form.price.value;
    const rating = form.rating.value;

    const UpdateProduct = {
      img,
      price,
      ProductName,
      brand,
      rating,
      category,
    };

    fetch(
      ` https://dream-gadget-server-jxsb5q782-arafat-ibn-abdullahs-projects.vercel.app/cart/${_id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(UpdateProduct),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Cart Updated Successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
          navigate("/cartProducts");
        }
      });
  };
  return (
    <div className="max-w-[600px] mx-auto mt-10 bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="text-2xl py-4 px-6 bg-[#ffc107] text-white text-center font-bold uppercase">
        Update a Product
      </div>
      <form onSubmit={handleUpdateProduct} className="py-4 px-6">
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
            Img
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="img"
            type="text"
            name="img"
            defaultValue={img}
            placeholder="Photo url "
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            name="name"
            defaultValue={ProductName}
            placeholder="Product name"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="brand">
            Brand
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="brand"
            name="brand"
            defaultValue={brand}
          >
            <option value="">Select a brand</option>
            <option value="Apple">Apple</option>
            <option value="Samsung">Samsung</option>
            <option value="Vivo">Vivo</option>
            <option value="Lenovo">Lenovo</option>
            <option value="HP (Hewlett-Packard)">HP (Hewlett-Packard)</option>
            <option value="Canon">Canon</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="brand">
            Category
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="category"
            name="category"
          >
            <option value="">Select a Category</option>
            <option value="Phone">phone</option>
            <option value="Computer">computer</option>
            <option value="Headphone">headphone</option>
            <option value="Laptop">laptop</option>
            <option value="Others">Others</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="phone">
            Prices($)
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="price"
            type="tel"
            name="price"
            defaultValue={price}
            placeholder="Prices"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="time">
            Rating
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="rating"
            type="text"
            name="rating"
            defaultValue={rating}
            placeholder="Rating here..."
          />
        </div>

        <div className="flex items-center justify-center mb-4">
          <button
            className="bg-[#ffc107] font-bold text-white py-2 px-4 rounded hover:bg-[#e4c360] focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateCart;
