const SamsungAds = () => {
  return (
    <section className=" container mx-auto">
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full ">
          <div className=" bg carousel-item relative w-full">
            <img
              className="w-full h-full"
              src="https://i.ibb.co/gygNNKz/Picsart-23-10-20-04-06-31-991.jpg"
              alt=""
            />

            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a
                href="#slide3"
                className="btn bg-black text-white border-none btn-circle"
              >
                ❮
              </a>
              <a
                href="#slide2"
                className="btn  bg-black text-white border-none btn-circle"
              >
                ❯
              </a>
            </div>
          </div>
        </div>

        <div id="slide2" className="carousel-item relative w-full banner2">
          <div className=" bg carousel-item relative w-full">
            <div className=" space-y-1 text-center mx-auto h-auto ">
              <img
                className="w-full h-full"
                src="https://i.ibb.co/tpvsRjR/Picsart-23-10-20-04-05-54-092.jpg"
                alt=""
              />
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a
                href="#slide1"
                className="btn bg-black text-white border-none btn-circle"
              >
                ❮
              </a>
              <a
                href="#slide3"
                className="btn  bg-black text-white border-none btn-circle"
              >
                ❯
              </a>
            </div>
          </div>
        </div>

        <div id="slide3" className="carousel-item relative w-full banner3">
          <div className=" bg carousel-item relative w-full">
            <div className=" space-y-1 text-center mx-auto h-auto ">
              <img
                className="w-full h-full"
                src="https://i.ibb.co/XWWR8KY/Picsart-23-10-20-04-07-36-401.jpg"
                alt=""
              />
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a
                href="#slide2"
                className="btn bg-black text-white border-none btn-circle"
              >
                ❮
              </a>
              <a
                href="#slide1"
                className="btn  bg-black text-white border-none btn-circle"
              >
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SamsungAds;
