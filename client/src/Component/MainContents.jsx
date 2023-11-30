import React from "react";
import '../App.css';
import '../css/MainContents.css'
import testImg from '../img/testImg.png'
import Button from 'react-bootstrap/Button';

function MainContents(){

    const currentDate = new Date();
    const monthNames = ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'];
    const currentMonth = monthNames[currentDate.getMonth()];
    const currentDay = currentDate.getDate();

    return(
        <div>
            <div className={"main-contents-container"}>
                <div className={"weakly-view1"}>
                    <div className={"weakly-view-header1"}>
                        <span>이번 주 <b className={"weakly-view-header-text1"}>무릉도장</b> 1등</span>
                    </div>
                    <div className={"weakly-view-text-small"}>
                        <span>밥먹어친구야 LV281 듀얼블레이더</span>
                    </div>
                    <div>
                        <img src={testImg} alt="테스트 이미지" />
                    </div>
                    <div className={"weakly-view-text"}>
                        <span>91층</span>
                    </div>
                    <div className={"weakly-view-text-duration"}>
                        14분 45초
                    </div>
                    <div>
                        <Button variant="outline-dark" className="view-details-btn1">
                            <a href="#" className="view-details">상세보기</a>
                        </Button>
                    </div>
                </div>
                <div className={"weakly-view2"}>
                    <div className={"weakly-view-header2"}>
                        <span>이번 주 <b className={"weakly-view-header-text2"}>더시드</b> 1등</span>
                    </div>
                    <div className={"weakly-view-text-small"}>
                        <span>밥먹어친구야 LV281 듀얼블레이더</span>
                    </div>
                    <div>
                        <img src={testImg} alt="테스트 이미지" />
                    </div>
                    <div className={"weakly-view-text"}>
                        <span>50층</span>
                    </div>
                    <div className={"weakly-view-text-duration"}>
                        38분 57초
                    </div>
                    <div>
                        <Button variant="dark" className="view-details-btn2">
                            <a href="#" className="view-details">상세보기</a>
                        </Button>
                    </div>
                </div>
                <div className={"weakly-view3"}>
                    <div className={"weakly-view-header3"}>
                        <span>이번 주 <b className={"weakly-view-header-text3"}>업적</b> 1등</span>
                    </div>
                    <div className={"weakly-view-text-small"}>
                        <span>밥먹어친구야 LV281 듀얼블레이더</span>
                    </div>
                    <div>
                        <img src={testImg} alt="테스트 이미지" />
                    </div>
                    <div className={"weakly-view-text"}>
                        <span>마스터</span>
                    </div>
                    <div className={"weakly-view-text-duration"}>
                        32,050점
                    </div>
                    <div>
                        <Button variant="dark" className="view-details-btn3">
                            <a href="#" className="view-details">상세보기</a>
                        </Button>
                    </div>
                </div>
                <div className={"weakly-view4"}>
                    <div className={"weakly-view-header4"}>
                        <span>이번 주 <b className={"weakly-view-header-text4"}>유니온</b> 1등</span>
                    </div>
                    <div className={"weakly-view-text-small"}>
                        <span>밥먹어친구야 LV281 듀얼블레이더</span>
                    </div>
                    <div>
                        <img src={testImg} alt="테스트 이미지" />
                    </div>
                    <div className={"weakly-view-text"}>
                        <span>Lv.10724</span>
                    </div>
                    <div className={"weakly-view-text-duration"}>
                        전투력 1,068,221,425
                    </div>
                    <div>
                        <Button variant="dark" className="view-details-btn4">
                            <a href="#" className="view-details">상세보기</a>
                        </Button>
                    </div>
                </div>
            </div>

            <div className={"today-container"}>
                <div className={"today-rank-view"}>
                    <div className={"today-rank-view-header"}>
                        <span>{`${currentMonth} ${currentDay}일 일반월드 랭킹`}</span>
                    </div>
                    <table className={"today-rank-table"}>
                        <thead>
                        <tr>
                            <th>순위</th>
                            <th>케릭터</th>
                            <th>레벨</th>
                            <th>직업</th>
                            <th>길드</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>1</td>
                            <td>캐릭터 이름 1</td>
                            <td>100</td>
                            <td>직업 이름</td>
                            <td>길드 이름</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>캐릭터 이름 2</td>
                            <td>95</td>
                            <td>직업 이름</td>
                            <td>길드 이름</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>캐릭터 이름 2</td>
                            <td>95</td>
                            <td>직업 이름</td>
                            <td>길드 이름</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>캐릭터 이름 2</td>
                            <td>95</td>
                            <td>직업 이름</td>
                            <td>길드 이름</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>캐릭터 이름 2</td>
                            <td>95</td>
                            <td>직업 이름</td>
                            <td>길드 이름</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>캐릭터 이름 2</td>
                            <td>95</td>
                            <td>직업 이름</td>
                            <td>길드 이름</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>캐릭터 이름 2</td>
                            <td>95</td>
                            <td>직업 이름</td>
                            <td>길드 이름</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>캐릭터 이름 2</td>
                            <td>95</td>
                            <td>직업 이름</td>
                            <td>길드 이름</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div className={"today-rank-view"}>
                    <div className={"today-rank-view-header"}>
                        <span>{`${currentMonth} ${currentDay}일 리부트월드 랭킹`}</span>
                    </div>
                    <table className={"today-rank-table"}>
                        <thead>
                        <tr>
                            <th>순위</th>
                            <th>케릭터</th>
                            <th>레벨</th>
                            <th>직업</th>
                            <th>길드</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>1</td>
                            <td>캐릭터 이름 1</td>
                            <td>100</td>
                            <td>직업 이름</td>
                            <td>길드 이름</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>캐릭터 이름 2</td>
                            <td>95</td>
                            <td>직업 이름</td>
                            <td>길드 이름</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>캐릭터 이름 2</td>
                            <td>95</td>
                            <td>직업 이름</td>
                            <td>길드 이름</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>캐릭터 이름 2</td>
                            <td>95</td>
                            <td>직업 이름</td>
                            <td>길드 이름</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>캐릭터 이름 2</td>
                            <td>95</td>
                            <td>직업 이름</td>
                            <td>길드 이름</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>캐릭터 이름 2</td>
                            <td>95</td>
                            <td>직업 이름</td>
                            <td>길드 이름</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>캐릭터 이름 2</td>
                            <td>95</td>
                            <td>직업 이름</td>
                            <td>길드 이름</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>캐릭터 이름 2</td>
                            <td>95</td>
                            <td>직업 이름</td>
                            <td>길드 이름</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div className={"today-rank-view"}>
                    <div className={"today-rank-view-header"}>
                        <span>{`${currentMonth} ${currentDay}일 무릉도장 랭킹`}</span>
                    </div>
                    <table className={"today-rank-table"}>
                        <thead>
                        <tr>
                            <th>순위</th>
                            <th>케릭터</th>
                            <th>레벨</th>
                            <th>직업</th>
                            <th>길드</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>1</td>
                            <td>캐릭터 이름 1</td>
                            <td>100</td>
                            <td>직업 이름</td>
                            <td>길드 이름</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>캐릭터 이름 2</td>
                            <td>95</td>
                            <td>직업 이름</td>
                            <td>길드 이름</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>캐릭터 이름 2</td>
                            <td>95</td>
                            <td>직업 이름</td>
                            <td>길드 이름</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>캐릭터 이름 2</td>
                            <td>95</td>
                            <td>직업 이름</td>
                            <td>길드 이름</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>캐릭터 이름 2</td>
                            <td>95</td>
                            <td>직업 이름</td>
                            <td>길드 이름</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>캐릭터 이름 2</td>
                            <td>95</td>
                            <td>직업 이름</td>
                            <td>길드 이름</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>캐릭터 이름 2</td>
                            <td>95</td>
                            <td>직업 이름</td>
                            <td>길드 이름</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>캐릭터 이름 2</td>
                            <td>95</td>
                            <td>직업 이름</td>
                            <td>길드 이름</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div className={"today-rank-view"}>
                    <div className={"today-rank-view-header"}>
                        <span>{`${currentMonth} ${currentDay}일 월드별 인구수`}</span>
                    </div>
                    <table className={"today-rank-table"}>
                        <thead>
                        <tr>
                            <th>순위</th>
                            <th>케릭터</th>
                            <th>레벨</th>
                            <th>직업</th>
                            <th>길드</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>1</td>
                            <td>캐릭터 이름 1</td>
                            <td>100</td>
                            <td>직업 이름</td>
                            <td>길드 이름</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>캐릭터 이름 2</td>
                            <td>95</td>
                            <td>직업 이름</td>
                            <td>길드 이름</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>캐릭터 이름 2</td>
                            <td>95</td>
                            <td>직업 이름</td>
                            <td>길드 이름</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>캐릭터 이름 2</td>
                            <td>95</td>
                            <td>직업 이름</td>
                            <td>길드 이름</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>캐릭터 이름 2</td>
                            <td>95</td>
                            <td>직업 이름</td>
                            <td>길드 이름</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>캐릭터 이름 2</td>
                            <td>95</td>
                            <td>직업 이름</td>
                            <td>길드 이름</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>캐릭터 이름 2</td>
                            <td>95</td>
                            <td>직업 이름</td>
                            <td>길드 이름</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>캐릭터 이름 2</td>
                            <td>95</td>
                            <td>직업 이름</td>
                            <td>길드 이름</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div>
                <p> 초보자를 위한 유용한 정보</p>
            </div>
        </div>
    );
}

export default MainContents;