
import { CND_IMG_ID } from "../Constants";

const FoodMenu = ({ imageId, name,price,description, category }) => {

  console.log(imageId);
  console.log(name);
  console.log(price);
  console.log(description);
  console.log(category);
  return (
    <div className="card">
      <h1>Food Menu</h1>
      <img src={CND_IMG_ID + imageId} />
      <h2>{name}</h2>
      <h5>{price}</h5>
      <h5>{description}</h5>
      <h4>{category}</h4>
    </div>
  );
};

export default FoodMenu;