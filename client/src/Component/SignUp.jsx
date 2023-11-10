import React, { useState } from 'react';
import { Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


function SignUp() {
    const [id, setId] = useState('');
    const [passWord, setPassWord] = useState('');
    const [nickName, setNickName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleIdChange = (e) => setId(e.target.value);
    const handlePasswordChange = (e) => setPassWord(e.target.value);
    const handleNickNameChange = (e) => setNickName(e.target.value);
    const handlePhoneNumberChange = (e) => setPhoneNumber(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        // 실제로 서버로 데이터를 보내는 등의 로직을 추가할 수 있습니다.
    };

    return (
        <div>
            <form className={"flex-container"}>
                <span>회원가입</span>
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
                <button  type={"submit"} className={"form-button"}>가입하기</button>
            </form>
        </div>
    );
}

export default SignUp;
