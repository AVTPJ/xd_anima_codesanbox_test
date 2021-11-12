import React from "react";
import "./Popup12.css";

function Popup12(props) {
  const {
    title,
    text1,
    spanText,
    spanText2,
    spanText3,
    spanText4,
    spanText5,
    spanText6,
    spanText7,
    path24,
    path25,
    path26,
    path27,
    path28,
    path29,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="popup-12 screen">
        <div className="flex-col">
          <h1 className="title gotham-bold-persian-green-60px">{title}</h1>
          <div className="text-1 gotham-bold-white-40px">{text1}</div>
          <div className="overlap-group1">
            <div className="text-2 gotham-book-normal-white-30px">
              <span className="gotham-book-normal-white-30px">{spanText}</span>
              <span className="span1-1 gotham-bold-persian-green-30px">{spanText2}</span>
              <span className="gotham-book-normal-white-30px">{spanText3}</span>
            </div>
            <a href="https://www.kcuk.org.uk">
              <div className="wwwkcsnorguk gotham-book-normal-persian-green-30px">
                <span className="gotham-book-normal-white-30px">{spanText4}</span>
                <span className="span1 gotham-bold-persian-green-30px">{spanText5}</span>
              </div>
            </a>
            <a href="https://www.kcuk.org.uk" target="_blank">
              <div className="wwwkcukorguk gotham-book-normal-persian-green-30px">
                <span className="span0 gotham-book-normal-white-30px">{spanText6}</span>
                <span className="span1 gotham-bold-persian-green-30px">{spanText7}</span>
              </div>
            </a>
          </div>
        </div>
        <div className="group-16">
          <div className="group-15">
            <div className="overlap-group">
              <img className="path-24" src={path24} />
              <img className="path-25" src={path25} />
              <img className="path-26" src={path26} />
              <img className="path-27" src={path27} />
              <img className="path-28" src={path28} />
              <img className="path-29" src={path29} />
              <div className="ellipse-6"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Popup12;
