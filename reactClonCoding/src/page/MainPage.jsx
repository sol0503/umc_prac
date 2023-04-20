import "../index.scss";
import React from "react";
import { ReactComponent as Logo } from "../svg/logo.svg";
import { ReactComponent as Lan } from "../svg/lan.svg";
import { ReactComponent as User } from "../svg/user.svg";
import { ReactComponent as Person } from "../svg/person.svg";
import { ReactComponent as Search } from "../svg/search.svg";
import { ReactComponent as LeftArrow } from "../svg/leftArrow.svg";
import { ReactComponent as RightArrow } from "../svg/rightArrow.svg";
import { ReactComponent as Filter } from "../svg/filter.svg";
import menu from "../data/menu";
import photo from "../data/photo";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
// const menu = require("../data/menu");
//import 와 export비교해보기

const MainPage = () => {
  const [count, setCount] = useState(0);
  const itemsPage = 15;

  const navigate = useNavigate();
  const location = useLocation();

  const ClickNext = () => {
    setCount(count + itemsPage);
  };
  const ClickPrev = () => {
    setCount(count - itemsPage);
  };

  return (
    <div className="mainPage">
      <div className="mainHead">
        <div className="headCenter1">
          <div className="headLeft">
            <Logo />
          </div>
          <div className="search">
            <button className="searchBtn">
              <button className="btn">어디든지</button>|
              <button className="btn">언제든 일주일</button>|
              <button className="btn">게스트 추가</button>
              <button
                style={{
                  height: "32px",
                  width: "32px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#FF385C",
                  color: "white",
                  border: "none",
                  borderRadius: "50%",
                }}
              >
                <Search />
              </button>
            </button>
          </div>
          <div className="headRight">
            <button className="yours" style={{ width: "232px" }}>
              당신의 공간을 에어비앤비하세요
            </button>
            <button className="lang" style={{ width: "46px" }}>
              <Lan />
            </button>
            <button className="userBtn" style={{ width: "80px" }}>
              <User />
              <Person />
            </button>
          </div>
        </div>
        <div className="line"></div>
        <div className="headCenter2">
          <div className="menuBar">
            {count != 0 ? (
              <button onClick={ClickPrev} className="arrowBtn">
                <LeftArrow />
              </button>
            ) : (
              <div style={{ width: "28px", height: "28px" }}></div>
            )}
            <div className="menus">
              {menu.slice(count, count + itemsPage).map((item) => (
                <div key={item.name} className="menuItem">
                  <img src={item.image} alt={item.name} />
                  <h6>{item.name}</h6>
                </div>
              ))}
            </div>
            {count != 45 ? (
              <button onClick={ClickNext} className="arrowBtn">
                <RightArrow />
              </button>
            ) : (
              <div
                style={{
                  width: "28px",
                  height: "28px",
                }}
              ></div>
            )}
          </div>
          <button className="filterBtn">
            <Filter />
            필터
          </button>
        </div>
      </div>
      <div className="main">
        <div className="content">
          {photo.map((item, index) => {
            if (index % 6 === 0) {
              const group = photo.slice(index, index + 6);
              const line = group.map((groupItem) => (
                <div key={groupItem.id} className="photoItem">
                  <button
                    onClick={() =>
                      navigate("/detailPage", {
                        state: {
                          image: groupItem.image,
                          content: groupItem.name,
                        },
                      })
                    }
                    className="placeBtn"
                  >
                    <img src={groupItem.image} alt={groupItem.name} />
                    <p>{groupItem.name}</p>
                  </button>
                </div>
              ));
              return line;
            }
            return null;
          })}
        </div>
      </div>
    </div>
  );
};
export default MainPage;
