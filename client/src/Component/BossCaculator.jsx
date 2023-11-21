import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import React, {useEffect, useState} from 'react';


function BossCaculator(){

    const [button1On, setButton1On] = useState(false);
    const [button2On, setButton2On] = useState(false);

    const handleButtonClick = (buttonNum) => {
        if (buttonNum === 1) {
            setButton1On(true);
            setButton2On(false);
        } else {
            setButton1On(false);
            setButton2On(true);
        }
    };

    return (
        <div className="boss-container">
            <div>
                <span>결정석 계산기</span>
            </div>
            <div>
                <div className="boss-div">
                    <button
                        onClick={() => handleButtonClick(1)}
                        className={button1On ? 'toggle-button checked' : 'toggle-button'}
                    >
                        보스 선택
                    </button>
                </div>
                <div className="boss-div">
                    <button
                        onClick={() => handleButtonClick(2)}
                        className={button2On ? 'toggle-button checked' : 'toggle-button'}
                    >
                        수익 계산
                    </button>
                </div>
            </div>

            <div className="boss-div2">
                <span>123</span>
            </div>
        </div>
    );
}

export default BossCaculator;