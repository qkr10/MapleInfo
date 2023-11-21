import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, FormControl, Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import React from 'react';

function NoticeBoard(){

    return (
        <div className={"nb-container"}>
            <div>
                <span>게시판</span>
            </div>
            <div>
                <Table bordered hover className={"nb-table"}>
                    <thead>
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>글쓴이</th>
                        <th>등록일</th>
                        <th>조회수</th>
                        <th>추천수</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>하 리마스터 엔버 에바임</td>
                        <td>엔젤릭버스터</td>
                        <td>2023-11-21</td>
                        <td>30000</td>
                        <td>11111</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>하 리마스터 엔버 에바임</td>
                        <td>엔젤릭버스터</td>
                        <td>2023-11-21</td>
                        <td>30000</td>
                        <td>11111</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>하 리마스터 엔버 에바임</td>
                        <td>엔젤릭버스터</td>
                        <td>2023-11-21</td>
                        <td>30000</td>
                        <td>11111</td>
                    </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    );
}

export default NoticeBoard;
