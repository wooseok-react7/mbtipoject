import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import HomePage from "./pages/HomePage";
import MyPage from "./pages/MyPage";
import TestPage from "./pages/TestPage";
import HeaderLayout from "./components/HeaderLayout";
import SideLayout from "./components/SideLayout";
import ResultsPage from "./pages/ResultsPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />

          <Route element={<HeaderLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="mypage" element={<MyPage />} />
            <Route path="results" element={<ResultsPage />} />
          </Route>

          <Route element={<SideLayout />}>
            <Route path="/testPage" element={<TestPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
