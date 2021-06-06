import React from "react";
function Footer(){
  var currntYear= new Date().getFullYear();
  return (
   <footer>
     <p>Copyright @ {currntYear}</p>
   </footer>
  );
}

export default Footer;
