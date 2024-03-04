import React from 'react';
import {Link} from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div style={{display: "flex", flexDirection: "column", gap: 2}}>
      <div>Not Found</div>
      <Link to={"/"}>Go to Home Link</Link>
      {/*<a href={"/"}>Go to Home A</a>*/} {/*This refreshes the browser*/}
    </div>
  );
};

export default NotFoundPage;