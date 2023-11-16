import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Link } from 'react-router-dom';
import MapleText from '../MapleText.jpg'

function SignIn() {

    const [id, setId] = useState('');
    const [passWord, setPassWord] = useState('');

    const handleIdChange = (e) => setId(e.target.value);
    const handlePasswordChange = (e) => setPassWord(e.target.value);

    const signIn = (e) => {
        e.preventDefault(); // 기본 제출 동작 방지
        fetch('http://localhost:3000/signIn', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' // JSON 형식으로 보내기 위한 헤더
            },
            body: JSON.stringify({
                id: id,
                passWord: passWord
            })
        })
            .then(response => response.json())
            .then(result => {
                // 서버로부터 받은 응답을 확인하고, 성공적으로 전송되었을 때 알림 창을 띄웁니다.
                if (result.message === '데이터가 성공적으로 전송되었습니다.') {
                    alert('로그인 성공');
                } else {
                    // 다른 응답을 받았을 경우에 대한 처리
                    // 예를 들어, 회원가입 실패 등의 메시지를 여기에 추가할 수 있습니다.
                    alert('로그인 실패, 비밀번호를 확인해주세요');
                }
            })
            .catch(error => console.error('에러 발생: ', error));
    };

    return (
        <div>
            <form className={"form-background"} onSubmit={signIn}>
                <div>
                    <img className={"form-logo"} src={MapleText} alt="메이플 이미지" />
                </div>
                <div>
                    <input
                        className={"form-input"}
                        value={id}
                        onChange={handleIdChange}
                        type={"text"}
                        placeholder={"아이디를 입력해주세요"}
                    />
                </div>
                <div>
                    <input
                        className={"form-input"}
                        value={passWord}
                        onChange={handlePasswordChange}
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