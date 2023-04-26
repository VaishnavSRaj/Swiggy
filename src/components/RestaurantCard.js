
import { CND_IMG_ID } from "../Constants";

const RestaurantCard = ({ cloudinaryImageId, name, cuisines, avgRating }) => {
  return (
    <div className="card">
      <img src={CND_IMG_ID + cloudinaryImageId} />
      <h2>{name}</h2>
      <h5>{cuisines.join(",")}</h5>
      <h4>{avgRating} Rating</h4>
    </div>
  );
};

export default RestaurantCard;