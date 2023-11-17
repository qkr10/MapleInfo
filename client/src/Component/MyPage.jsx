import React from 'react';

function MyPage(){

    return(
        <div>
        <div className={"my-profile-container"}>
            <div>
                <p>마이페이지 입니다!</p>
            </div>
            <div>
                <table>
                    <tbody>
                    <tr>
                        <td>아이디</td>
                        <td>MapleInfo Id</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>닉네임</td>
                        <td>MapleInfo NickName</td>
                        <td><button>변경하기</button></td>
                    </tr>
                    <tr>
                        <td>휴대폰</td>
                        <td>MapleInfo PhoneNumber</td>
                        <td></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    );
}

export default MyPage;