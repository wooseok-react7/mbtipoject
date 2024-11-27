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
import { ToastContainer } from "react-toastify";
import TestResultList from "./pages/TestResultList";

function App() {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />

            <Route element={<HeaderLayout />}>
              <Route path="/" element={<HomePage />} />
              <Route element={<ProtectedRoute />}>
                <Route path="mypage" element={<MyPage />} />
              </Route>
            </Route>

            <Route element={<SideLayout />}>
              <Route path="results" element={<ResultsPage />} />
              <Route path="/testPage" element={<TestPage />} />
              <Route path="/resultlist" element={<TestResultList />} />
            </Route>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
