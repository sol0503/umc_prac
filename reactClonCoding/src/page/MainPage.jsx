import "../index.scss";
import { ReactComponent as Logo } from "../svg/logo.svg";
import { ReactComponent as Lan } from "../svg/lan.svg";
import { ReactComponent as User } from "../svg/user.svg";
import { ReactComponent as Person } from "../svg/person.svg";
import { ReactComponent as Search } from "../svg/search.svg";
import menu from "../data/menu";
// const menu = require("../data/menu");
//import 와 export비교해보기
const MainPage = () => {
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
        <div className="headCenter2">
          <div className="menus">
            {menu.map((item) => (
              <div key={item.name}>
                <img src={item.image} alt={item.name} />
                <h2>{item.name}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default MainPage;
