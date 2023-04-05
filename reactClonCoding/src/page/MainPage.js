import { ReactComponent as Logo } from "../svg/logo.svg";
import "../index.scss";

const MainPage = () => {
  return (
    <div className="MainPage">
      <div className="MainHead">
        <div className="HeadCenter">
          <div className="name">
            <Logo />
          </div>
          <div className="search">
            <button className="btn"></button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MainPage;
