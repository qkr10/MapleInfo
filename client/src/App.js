import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './component/Header';
import SignIn from './component/Signin';
import SignUp from "./component/Signup";

function App() {
    return (
        <Router>
            <div>
                <Header />
                <Routes>
                    <Route path="/Signin" element={<SignIn />} />
                    <Route path="/Signup" element={<SignUp />} />
                    {/* 다른 페이지 라우트도 여기에 추가할 수 있습니다. */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
