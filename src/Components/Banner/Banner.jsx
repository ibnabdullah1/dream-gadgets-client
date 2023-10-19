const Banner = () => {
  return (
    <section className="bg-[#EFF1F3]  md:flex justify-around items-center py-10 px-10">
      {/* <section className="bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 bg-blend-multiply"> */}
      <div>
        <h2 className="BebasNeue font-bold text-5xl md:text-6xl  text-gray-500 tracking-[1px]">
          <span className="text-[#5eb0d4]">Smart gadgets</span> for your <br />{" "}
          comfort and convenience
        </h2>
        <p className="mt-3">
          Smartphone, smartwatch, tablet, PC or laptop, with the latest
          technology and sophisticated design.
        </p>
        <button className="inline-block mt-3 px-12 py-3 text-sm font-semibold text-white bg-[#ffc107] border border-[#ffc107] rounded active:text-[#ffc107] hover:bg-transparent hover:text-[#ffc107] focus:outline-none focus:ring focus:ring-[#ece8dc]">
          Shop Now
        </button>
      </div>
      <div className="">
        <img
          src="https://i.ibb.co/xGwZd4L/Screenshot-9-removebg-preview.png"
          alt=""
        />
      </div>
    </section>
  );
};

export default Banner;
