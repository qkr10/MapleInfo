import React, { useState } from 'react';

function SignUp() {

    return (
        <div>
            <form>
                회원가입
                <input className={"form-input"} type={"text"} placeholder={"아이디를 입력해주세요"}/>
                <input type={"text"} placeholder={"비밀번호를 입력해주세요"}/>
                <input type={"text"} placeholder={"비밀번호를 다시 입력해주세요"}/>
            </form>
        </div>
    );
}

export default SignUp;
