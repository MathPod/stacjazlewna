import React from "react";
import style from "./BreadCrumbs.module.css";
import { useParams, useLocation } from "react-router-dom";

export default function BreadCrumbs() {
  const params = useParams();
  const location = useLocation();

  let locationArray = location.pathname.split("/");
  locationArray = locationArray.filter((element) => element !== "");

  const titleTab = locationArray.map((element) => element.replaceAll("-", " "));
  console.log(titleTab);

  return (
    <div className={style.breadCrumbsContainer}>
      <ul className={style.breadCrumbsList}>
        {titleTab.map((element, index) => {
          return index === 0 ? (
            <li>
              <a href={`../${locationArray[index]}`}>{element}</a>
            </li>
          ) : (
            <li>
              <p> {element} </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
