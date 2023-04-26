import {useContext} from "react";
import userContext from "../utils/userContext";

const Footer = () => {
  const user=useContext(userContext)
  return (
    <div>
      <h3>Developed by {user.name} </h3>
      <h4>Email-{user.email}</h4>
    </div>
  );
};

export default Footer;
