import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import MbtiTestPage from "./pages/MbtiTestPage";
import MyPage from "./pages/MyPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/m" element={<Header />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/mbti" element={<MbtiTestPage />} />
          <Route path="mypage" element={<MyPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
