import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MapleText from '../MapleText.jpg';

function SignUp() {
    const [id, setId] = useState('');
    const [passWord, setPassWord] = useState('');
    const [nickName, setNickName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleIdChange = (e) => setId(e.target.value);
    const handlePasswordChange = (e) => setPassWord(e.target.value);
    const handleNickNameChange = (e) => setNickName(e.target.value);
    const handlePhoneNumberChange = (e) => setPhoneNumber(e.target.value);

    const signUp = (e) => {
        e.preventDefault(); // 기본 제출 동작 방지
        fetch('http://localhost:3000/signUp', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' // JSON 형식으로 보내기 위한 헤더
            },
            body: JSON.stringify({
                id: id,
                passWord: passWord,
                nickName: nickName,
                phoneNumber: phoneNumber
            })
        })
            .then(response => response.json())
            .then(result => {
                // 서버로부터 받은 응답을 확인하고, 성공적으로 전송되었을 때 알림 창을 띄웁니다.
                if (result.message === '데이터가 성공적으로 전송되었습니다.') {
                    alert('회원가입이 성공적으로 완료되었습니다!');
                    window.location.href = '/SignIn';
                } else {
                    // 다른 응답을 받았을 경우에 대한 처리
                    alert('회원가입에 실패했습니다. 다시 시도해주세요.');
                }
            })
            .catch(error => console.error('에러 발생: ', error));
    };

    return (
        <div>
            <form className={"flex-container"} onSubmit={signUp}>
                <div>
                    <img className={"form-logo"} src={MapleText} alt="메이플 이미지" />
                </div>
                <div className={"box"}>
                    <div>
                        <span>아이디</span>
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
                </div>
                <div>
                    <div>
                        <span>비밀번호</span>
                    </div>
                    <input
                        className={"form-input"}
                        value={passWord}
                        onChange={handlePasswordChange}
                        type={"password"}
                        placeholder={"비밀번호를 입력해주세요"}/>
                </div>
                <div>
                    <input
                        className={"form-input"}
                        type={"password"}
                        placeholder={"비밀번호를 다시 입력해주세요"}/>
                </div>
                <div>
                    <div>
                        <span>닉네임</span>
                    </div>
                    <input
                        className={"form-input"}
                        value={nickName}
                        onChange={handleNickNameChange}
                        type={"text"}
                        placeholder={"닉네임을 입력해주세요"}/>
                </div>
                <div>
                    <div>
                        <span>휴대폰 번호</span>
                    </div>
                    <input
                        className={"form-input"}
                        value={phoneNumber}
                        onChange={handlePhoneNumberChange}
                        type={"text"}
                        placeholder={"휴대폰 번호를 입력 해주세요"}/>
                </div>
                <button type={"submit"} className={"form-button"}>가입하기</button>
            </form>
        </div>
    );
}

export default SignUp;