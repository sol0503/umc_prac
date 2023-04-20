import "../index.scss";
import { ReactComponent as Logo } from "../svg/logo.svg";
import { ReactComponent as Lan } from "../svg/lan.svg";
import { ReactComponent as User } from "../svg/user.svg";
import { ReactComponent as Person } from "../svg/person.svg";
import { ReactComponent as Search } from "../svg/search.svg";
import { useLocation, useNavigate } from "react-router-dom";
const DetailPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { image, content } = location.state || {};
  if (!image || !content) {
    return null;
  }
  return (
    <div className="detailPage">
      <div className="mainHead">
        <div className="headCenter1">
          <div className="headLeft" onClick={() => navigate("/")}>
            <Logo />
          </div>
          <div className="search">
            <button className="searchBtn">
              <button className="btn">검색 시작하기</button>
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
      </div>

      <div className="main">
        <div className="content">
          <div className="name">
            <h1>{content}</h1>
          </div>
          <div className="photo">
            <img src={image} alt={content} />
          </div>
          <div className="host">
            <h3>XX님이 호스팅하는 자택 전체</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DetailPage;
