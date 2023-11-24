import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import NoticeBoardCreate from "./NoticeBoardCreate";

function NoticeBoard(){

    return (
        <div className={"nb-container"}>
            <div>
                <div style={{ display: "flex", justifyContent: "flex-end" , marginBottom: "10px"}}>
                    <Button style={{fontSize: "13px"}} variant="dark" >
                        <a href="/NoticeBoardCreate" style={{color: "white", textDecoration: "none"}}>글쓰기</a>
                    </Button>
                </div>
                <Table bordered hover className={"nb-table"}>
                    <thead>
                    <tr>
                        <th>번호</th>
                        <th style={{ width: "600px" , height: "10px"}}>제목</th>
                        <th>글쓴이</th>
                        <th>등록일</th>
                        <th>조회수</th>
                        <th>추천수</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>리액트 과제 수행</td>
                        <td>111</td>
                        <td>2023-11-21</td>
                        <td>30000</td>
                        <td>11111</td>
                    </tr>
                    </tbody>
                </Table>
            </div>
            <div>
                <Navbar.Text>
                    <a href="#" style={{ textDecoration: 'none'}}>1</a>
                </Navbar.Text>
            </div>
            <div style={{ marginTop: "10px", border: "0px solid", display: "flex", alignItems: "center"}}>
                <input
                    style={{ height: "30px", flex: "1", border: "none", outline: "none"}}
                    type={"text"}
                    placeholder={"검색어를 입력해주세요"}
                />
                <button type={"submit"} style={{ border: "1px solid transparent", height: "30px", padding: "0 10px"}}>
                    <span>검색</span>
                </button>
            </div>
        </div>
    );
}

export default NoticeBoard;
