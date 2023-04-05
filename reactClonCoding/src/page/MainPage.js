import { ReactComponent as Title } from "../svg/name.svg";
import { ReactComponent as Logo } from "../svg/logo.svg";
const MainPage = () => {
  return (
    <div classname="MainPage">
      <div classname="MainHead">
        <div classname="HeadCenter">
          <Logo />
          <Title />
        </div>
      </div>
    </div>
  );
};
export default MainPage;
