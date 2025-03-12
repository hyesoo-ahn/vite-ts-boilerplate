import { Outlet, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">홈</Link>
            </li>
            <li>
              <Link to="/about">소개</Link>
            </li>
            {/* 추가 링크는 여기에 */}
          </ul>
        </nav>
      </header>

      <main>
        {/* 현재 라우트에 매칭된 컴포넌트가 렌더링됨 */}
        <Outlet />
      </main>

      <footer>
        <p>© 2025 내 Vite+TS 프로젝트</p>
      </footer>
    </div>
  );
}

export default App;
