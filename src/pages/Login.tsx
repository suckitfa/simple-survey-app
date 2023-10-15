import { useNavigate, Link, useSearchParams } from "react-router-dom";

const Login = () => {
  const nav = useNavigate();
  const clickHanlder = () => {
    nav(-1);
  };
  return (
    <>
      <p>Login</p>
      <div>
        <button onClick={clickHanlder}>back</button>
        <Link to="/register">注册</Link>
      </div>
    </>
  );
};

export default Login;
