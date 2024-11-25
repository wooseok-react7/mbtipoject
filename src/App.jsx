import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import HomePage from "./pages/HomePage";
import MyPage from "./pages/MyPage";
import TestPage from "./pages/TestPage";
import HeaderLayout from "./components/HeaderLayout";

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
          </Route>

          <Route path="/testPage" element={<TestPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
