import React from "react";
import { useParams, Link } from "react-router-dom";
import NotFoundPageCSS from "./NotFoundPage.module.css";
function NotFoundPage() {
  const styled = NotFoundPageCSS;
  const params = useParams();
  console.log(params["*"]);

  if (params["*"] === "classic" || params["*"] === "advanced") {
    //yönlendir
    return (
      <div className={styled.NotFoundPageContainer}>
        <h1 className={styled.text}>You Have'nt picked a mode yet.</h1>
        <Link className={styled.link} to="/">
          Go to mode selection page
        </Link>
      </div>
    );
  }
  return (
    <div className={styled.NotFoundPageContainer}>
      <h1 className={styled.text}>The page you're looking is not valid.</h1>
      <Link className={styled.link} to="/">
        Go to mode selection page
      </Link>
    </div>
  );
}

export default NotFoundPage;
