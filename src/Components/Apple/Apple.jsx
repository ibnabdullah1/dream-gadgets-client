import { useLoaderData } from "react-router-dom";
import ApplesCard from "./ApplesCard";
import AppleAds from "./AppleAds";
const Apple = () => {
  const apples = useLoaderData();

  return (
    <div>
      <AppleAds />
      <div className="grid grid-cols-1 min-h-screen md:py-20 px-10 gap-7 md:grid-cols-2 lg:grid-cols-3 bg-gray-100">
        {apples.map((apple) => (
          <ApplesCard key={apple._id} apple={apple}></ApplesCard>
        ))}
      </div>
    </div>
  );
};

export default Apple;

// https://i.ibb.co/MDdGnpt/Picsart-23-10-20-04-10-49-382.jpg
// https://i.ibb.co/Kzdzbcv/Picsart-23-10-20-04-12-31-620.jpg
