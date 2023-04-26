import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../Constants";

const useRestaurant = (id) => {
  const [restaurant, setRestaurant] = useState(null);
  const[menu, setMenu] = useState(null);
  
  
  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    
    const data = await fetch(FETCH_MENU_URL + id);
    const json = await data.json();

     setRestaurant(json?.data?.cards[0]?.card?.card?.info);
    
  
     setMenu(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards)
  
    
  
    
  }

  return [restaurant,menu]
  
};

export default useRestaurant;
