import { useRouteError } from "react-router-dom";

const Error = () => {

const err=useRouteError()
console.log(err);
const{status , statusText}=err


  return (
    <>
      <h1>Oops...😐</h1>
      <h2>Something went wrong </h2>
      <h3>{err.status+":"+ statusText }</h3>
    </>
  );
};


