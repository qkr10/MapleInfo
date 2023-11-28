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
            <div className={"testContainer"}>
                <div className={"weakly-view"}>
                    <div className={"weakly-view-header"}>
                        <span>이번 주 무릉도장 1등</span>
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
                        <Button variant="dark" className="view-details-btn">
                            <a href="#" className="view-details">상세보기</a>
                        </Button>
                    </div>
                </div>
                <div className={"weakly-view"}>
                    <div className={"weakly-view-header"}>
                        <span>이번 주 더시드 1등</span>
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
                        <Button variant="dark" className="view-details-btn">
                            <a href="#" className="view-details">상세보기</a>
                        </Button>
                    </div>
                </div>
                <div className={"weakly-view"}>
                    <div className={"weakly-view-header"}>
                        <span>이번 주 업적 1등</span>
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
                        <Button variant="dark" className="view-details-btn">
                            <a href="#" className="view-details">상세보기</a>
                        </Button>
                    </div>
                </div>
                <div className={"weakly-view"}>
                    <div className={"weakly-view-header"}>
                        <span>이번 주 유니온 1등</span>
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
                        <Button variant="dark" className="view-details-btn">
                            <a href="#" className="view-details">상세보기</a>
                        </Button>
                    </div>
                </div>
            </div>

            <div className={"testContainer"}>
                <div className={"test-view"}>
                    <div className={"test-view-header"}>
                        <span>{`${currentMonth} ${currentDay}일 일반월드 랭킹`}</span>
                    </div>
                </div>
                <div className={"test-view"}>
                    <div className={"test-view-header"}>
                        <span>{`${currentMonth} ${currentDay}일 일반월드 랭킹`}</span>
                    </div>
                </div>
            </div>
            {/*<div className="testContainer">*/}
            {/*    <div className="grid-container">*/}
            {/*        <div className="today-box">*/}
            {/*            <p>{`${currentMonth} ${currentDay}일 일반월드 랭킹`}</p>*/}
            {/*        </div>*/}
            {/*        <div className="today-box">*/}
            {/*            <p>{`${currentMonth} ${currentDay}일 리부트월드 랭킹`}</p>*/}
            {/*        </div>*/}
            {/*        <div className="today-box">*/}
            {/*            <p>{`${currentMonth} ${currentDay}일 무릉도장 랭킹`}</p>*/}
            {/*        </div>*/}
            {/*        <div className="today-box">*/}
            {/*            <p>{`${currentMonth} ${currentDay}일 월드별 인구수`}</p>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <div>
                <p> 초보자를 위한 유용한 정보</p>
            </div>
        </div>
    );
}

export default MainContents;