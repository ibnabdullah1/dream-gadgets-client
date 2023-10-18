const BrandCard = ({ brand }) => {
  const { img, title } = brand;
  return (
    <div className="relative rounded-md overflow-hidden">
      <img src={img} alt={title} className="w-full  h-[250px]" />
      <p className="cursor-pointer absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-4xl text-center text-white font-roboto font-semibold group-hover:bg-opacity-60 transition">
        {title}
      </p>
    </div>
  );
};

export default BrandCard;
