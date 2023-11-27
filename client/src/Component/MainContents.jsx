import React from "react";
import '../App.css';
import '../css/MainContents.css'
import testImg from '../img/testImg.png'
import Button from 'react-bootstrap/Button';

function MainContents(){
    return(
        <div>
            <div className={"testContainer"}>
                <div className={"weakly-view"}>
                    <div className={"weakly-view-header"}>
                        <span>이번 주 무릉도장 1등</span>
                    </div>
                    <div>
                        <p>밥먹어친구야 LV281 듀얼블레이더</p>
                    </div>
                    <div>
                        <img src={testImg} alt="테스트 이미지" />
                    </div>
                    <div>
                        <p>Lv.10724</p>
                    </div>
                    <div>
                        전투력 1,068,221,425
                    </div>
                    <div>
                        <Button variant="dark" className="view-details-btn">
                            <a href="#" className="view-details">상세보기</a>
                        </Button>
                    </div>
                </div>
                <div>
                    <p>이번 주 더시드 1등</p>
                </div>
                <div>
                    <p>이번 주 업적 1등</p>
                </div>
                <div>
                    <p>이번 주 유니온 1등</p>
                </div>
            </div>
            <div>
                <p> 금일 일반월드 랭킹</p>
            </div>
            <div>
                <p> 금일 리부트월드 랭킹</p>
            </div>
            <div>
                <p> 금일 무릉도장 랭킹</p>
            </div>
            <div>
                <p> 금일 월드별 인구수</p>
            </div>
            <div>
                <p> 초보자를 위한 유용한 정보</p>
            </div>
        </div>
    );
}

export default MainContents;