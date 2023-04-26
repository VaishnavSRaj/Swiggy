import RestaurantCard from "./RestaurantCard";
import { useState, useEffect} from "react";
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";


const Body = () => {
  const [searchTxt, setSearchTxt] = useState([]);
  const [Allrestaurants, setAllRestaurant] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    getAllRestaurant();
  }, []);

  async function getAllRestaurant() {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=8.5650183&lng=76.8786204&page_type=DESKTOP_WEB_LISTING"
      );

      const json = await data.json();

      setAllRestaurant(json?.data?.cards[2]?.data?.data?.cards);
      setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    } catch (error) {
      console.log(error);
    }
  }

  console.log("rendered()");

  //==============conditional rendering================

  // if (!Allrestaurants) return null; //---------------------------->EARLY RETURN
  // if (filteredRestaurants.length === 0) return <h1>No Restaurant Found ☹️!!!</h1>;
  const online = useOnline();

  if (!online) {
    return <h1> No Internet Connection ⚠️</h1>;
  }
  return Allrestaurants.length === 0 ? (
    <ShimmerUI />
  ) : (
    <>
      <div className="search-container">
        <input
          type="Text"
          className="search-bar"
          placeholder="Search"
          value={searchTxt}
          onChange={(e) => setSearchTxt(e.target.value)}
        />

        <button
          className="search-btn"
          onClick={() => {
            const Data = filterData(searchTxt, Allrestaurants);

            setFilteredRestaurants(Data);
          }}
        >
          Search
        </button>
      </div>

      <div className="restraunt-list">
        {filteredRestaurants.map((restaurantObj) => {
          return (
            <Link
              to={"/restaurant/" + restaurantObj.data.id}
              key={restaurantObj.data.id}
            >
              <RestaurantCard {...restaurantObj.data} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
