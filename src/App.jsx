import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import HomePage from "./pages/HomePage";
import MyPage from "./pages/MyPage";
import TestPage from "./pages/TestPage";
import HeaderLayout from "./components/HeaderLayout";
import SideLayout from "./components/SideLayout";
import ResultsPage from "./pages/ResultsPage";
import { AuthProvider, ProtectedRoute } from "./components/AuthProvider";
import { useState } from "react";

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />

            <Route element={<HeaderLayout />}>
              <Route path="/" element={<HomePage />} />
              <Route element={<ProtectedRoute />}>
                <Route path="results" element={<ResultsPage />} />
                <Route path="mypage" element={<MyPage />} />
              </Route>

              <Route element={<SideLayout />}>
                <Route path="/testPage" element={<TestPage />} />
              </Route>
            </Route>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
