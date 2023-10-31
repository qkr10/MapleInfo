import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SignIn from "./Signin";

function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSignUp = () => {
        // 여기에 회원가입 처리 로직을 추가합니다.
        console.log('회원가입 시도:', email, password);
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card mt-5">
                        <div className="card-header">회원가입</div>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="email">이메일 주소</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        placeholder="이메일을 입력하세요"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">비밀번호</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        placeholder="비밀번호를 입력하세요"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="confirmPassword">비밀번호 확인</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="confirmPassword"
                                        placeholder="비밀번호를 다시 입력하세요"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                    />
                                </div>
                                <Link to="/Sign" style={{ textDecoration: 'none' }}>
                                    <button type="button" className="btn btn-primary">
                                        회원가입
                                    </button>
                                </Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
