import { Outlet } from "react-router-dom";

const About=()=>{
  return(
    <div> <h1> This is about page🙂 </h1>
    <Outlet/>
    </div>
   
  )
}

export default About;