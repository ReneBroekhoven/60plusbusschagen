import React from "react";
 
const NotFound = ({location}) => (
  <div>
    <h1 style={{color: "red", fontSize: "4em", textAlign: "center"}}>
      Pagina "{location.pathname}" bestaat niet !
   </h1>
  </div>
);

export default NotFound;