import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layout/MainLayout";
import ManageLayout from "../layout/ManageLayout";
import QuestionLayout from "../layout/QuestionLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NotFound from "../pages/NotFound";
import List from "../pages/manage/List";
import Trash from "../pages/manage/Trash";
import Star from "../pages/manage/Star";
import Edit from "../pages/question/Edit";
import Stat from "../pages/question/Stat";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "manage",
        element: <ManageLayout />,
        children: [
          {
            path: "list",
            element: <List />,
          },
          {
            path: "star",
            element: <Star />,
          },
          {
            path: "trash",
            element: <Trash />,
          },
        ],
      },
    ],
  },
  {
    path: "/question",
    element: <QuestionLayout />,
    children: [
      {
        path: "edit/:id",
        element: <Edit />,
      },
      {
        path: "stat/:id",
        element: <Stat />,
      },
    ],
  },
  {
    // 未命中，最后 404来兜底
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
// ----- 分割线 -----
export const HOME_PATH = "/";
export const LOGIN_PATHNAME = "/login";
export const REGISTER_PATHNAME = "/register";
export const MANAGE_INDEX_PATHNAME = "/manage/list";
