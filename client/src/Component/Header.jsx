import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useEffect, useState} from 'react';
import BossCaculator from "./BossCaculator";

function Header(){

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        // 로컬 스토리지에서 세션 ID를 가져오거나 확인하는 로직
        const sessionID = localStorage.getItem('sessionID');

        // 세션 ID가 있다면 로그인 상태로 설정
        if (sessionID) {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
    }, []);

    const logOut = () => {
        // 로그아웃 시 로컬 스토리지의 세션 ID 삭제
        window.location.href = '/MainContents';
        localStorage.removeItem('sessionID');
        setIsLoggedIn(false);
    };


    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/MainContents">Maple InFo</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">초보자 가이드</Nav.Link>
                        <Nav.Link href="#features">공지사항/업데이트</Nav.Link>
                        <Nav.Link href="/NoticeBoard">게시판</Nav.Link>
                    </Nav>
                    <Navbar.Collapse id="navbar-dark-example">
                        <Nav>
                            <NavDropdown
                                id="nav-dropdown-dark-example"
                                title="편의성 기능"
                                menuVariant="dark"
                            >
                                <NavDropdown.Item href="/BossCaculator">결정석 계산기</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">유니온 배치</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">무릉/수로 환산</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">큐브 사용내역</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                    <Navbar.Collapse className="justify-content-end">
                        {isLoggedIn ? (
                            // 로그인 시
                            <>
                                <Navbar.Text>
                                    <a href="/MyPage" style={{ textDecoration: 'none', marginRight: '10px' }}>마이페이지</a>
                                </Navbar.Text>
                                <Navbar.Text>
                                    <a
                                        href="/MainContents"
                                        onMouseDown={(e) => {
                                            e.preventDefault();
                                            logOut();
                                            window.location.href = '/MainContents';
                                        }}
                                        style={{ textDecoration: 'none' }}
                                    >
                                        로그아웃
                                    </a>
                                </Navbar.Text>
                            </>
                        ) : (
                            // 로그인이 아닐시
                            <>
                                <Navbar.Text>
                                    <a href="/SignIn" style={{ textDecoration: 'none', marginRight: '10px' }}>로그인</a>
                                </Navbar.Text>
                                <Navbar.Text>
                                    <a href="/SignUp" style={{ textDecoration: 'none' }}>회원가입</a>
                                </Navbar.Text>
                            </>
                        )}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default Header;