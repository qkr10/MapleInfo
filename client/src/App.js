import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './Component/Header';
import SignIn from "./Component/SignIn";
import SignUp from "./Component/SignUp";
import MainContents from "./Component/MainContents";

function App() {
    return (
        <Router>
                <Header />
                <Routes>
                    <Route path="/SignIn" element={<SignIn />} />
                    <Route path="/SignUp" element={<SignUp />} />
                    <Route path="/MainContents" element={<MainContents />} />
                    {/* 라우트 경로 설정 추가할 수 있습니다. */}
                </Routes>
        </Router>
    );
}

export default App;
