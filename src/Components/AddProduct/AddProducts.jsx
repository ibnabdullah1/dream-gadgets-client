import Swal from "sweetalert2";

const AddProduct = () => {
  const handleAddProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const img = form.img.value;
    const ProductName = form.name.value;
    const brand = form.brand.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const description = form.description.value;
    const newProduct = {
      img,
      price,
      description,
      ProductName,
      brand,
      rating,
    };
    console.log(newProduct);

    fetch(
      "https://dream-gadget-server-dgh23etb3-arafat-ibn-abdullahs-projects.vercel.app/product",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Coffee Added Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div className="max-w-[600px] mx-auto mt-10 bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="text-2xl py-4 px-6 bg-gray-900 text-white text-center font-bold uppercase">
        Create a Product
      </div>
      <form onSubmit={handleAddProduct} className="py-4 px-6">
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
            Img
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="img"
            type="text"
            name="img"
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
          <label className="block text-gray-700 font-bold mb-2" htmlFor="phone">
            Prices($)
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="price"
            type="tel"
            name="price"
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
            placeholder="Rating here..."
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="description"
            name="description"
            rows="4"
            placeholder="Product description here..."
          ></textarea>
        </div>
        <div className="flex items-center justify-center mb-4">
          <button
            className="bg-gray-900 text-white py-2 px-4 rounded hover:bg-gray-800 focus:outline-none focus:shadow-outline"
            type="submit"
          >
            AddProduct
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
