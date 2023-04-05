import "../index.scss";
import { ReactComponent as Logo } from "../svg/logo.svg";
import { ReactComponent as Lan } from "../svg/lan.svg";
import { ReactComponent as User } from "../svg/user.svg";
import { ReactComponent as Person } from "../svg/person.svg";
const MainPage = () => {
  return (
    <div className="mainPage">
      <div className="mainHead">
        <div className="headCenter">
          <div className="headLeft">
            <Logo />
          </div>
          <div className="search">
            <button className="searchBtn"></button>
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
      </div>
    </div>
  );
};
export default MainPage;
