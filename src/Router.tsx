import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

// 라우터 설정
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true, // 기본 라우트
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      // 추가 라우트는 여기에 설정
    ],
  },
]);

// 라우터 프로바이더 컴포넌트
export function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
