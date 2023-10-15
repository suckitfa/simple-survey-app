import { Outlet } from "react-router";

const QuestionLayout = () => {
  return (
    <div>
      <p>QuestionLayout</p>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default QuestionLayout;
