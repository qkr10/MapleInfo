import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Link } from 'react-router-dom';
import MapleText from '../MapleText.jpg'

function SignIn() {

    return (
        <div>
            <form onSubmit={"#"} className={"form-background"}>
                <div>
                    <img className={"form-logo"} src={MapleText} alt="메이플 이미지" />
                </div>
                <div>
                    <input
                        className={"form-input"}
                        type={"text"}
                        placeholder={"아이디를 입력해주세요"}
                    />
                </div>
                <div>
                    <input
                        className={"form-input"}
                        type={"password"}
                        placeholder={"비밀번호를 입력해주세요"}/>
                </div>
                <button type={"submit"} className={"form-button"}>
                    MapleInFo 로그인
                </button>
                <p>
                    <Link className={"form-link"}>회원가입</Link>
                    <Link className={"form-link"}>ID 찾기</Link>
                    <Link className={"form-link"}>비밀번호 찾기</Link>
                </p>
                <div>
                    <button style={{ backgroundColor: 'rgb(3, 199, 90)' }} className={"form-social-button"}>
                        <span></span><span>Naver 계정으로 로그인</span>
                    </button>
                </div>
                <div>
                    <button style={{ backgroundColor: '#4285F4' }} className={"form-social-button"}>
                        Google 계정으로 로그인
                    </button>
                </div>
                <div>
                    <button style={{ backgroundColor: '#FEE500', color:'black'}} className={"form-social-button"}>
                        Kakao 계정으로 로그인
                    </button>
                </div>
            </form>

        </div>

    );
}

export default SignIn;