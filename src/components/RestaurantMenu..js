import { useParams } from "react-router-dom";
import { CND_IMG_ID } from "../Constants";
import ShimmerUI from "./ShimmerUI";
import useRestaurant from "../utils/useRestaurant";
import { addItems } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {
  const params = useParams();
  const { id } = params;
  const dispatch = useDispatch();
  const AddCartItems = (items) => {
    dispatch(addItems(items));
  };

  const [restaurant, menu] = useRestaurant(id); //---------> custom hook

  return !restaurant ? (
    <ShimmerUI />
  ) : (
    <div>
      <div className="resInfo">
        <h1>Restuarant id : {id}</h1>
        <h3> Restaurant Name-{restaurant?.name}</h3>
        <h3> Location-{restaurant?.areaName}</h3>
        <h3> Rating-{restaurant?.avgRating}</h3>
        <h3> City-{restaurant?.city}</h3>
        <img
          className="resPic"
          src={CND_IMG_ID + restaurant?.cloudinaryImageId}
        />
      </div>
      <div className="menuList">
        <ul>
          <h1>Menu</h1>

          {menu.map((item) => (
            <li key={item.card.info.id}>
              {item.card.info.name}{" "}
              <button onClick={() => AddCartItems(item.card.info)}>Add</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
