import { useNavigate } from "react-router-dom";
import { Button } from "antd";
const Home = () => {
  const nav = useNavigate();
  // 第三方hook
  const clickHanlder = () => {
    // nav("/login");
    nav({
      pathname: "/login",
      search: "b=21",
    });
  };
  return (
    <>
      <p>Home</p>
      <div>
        <button onClick={clickHanlder}>Login</button>
        <Button type="primary">蚂蚁</Button>
      </div>
    </>
  );
};

export default Home;
