import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header(){
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/MainContents">Maple InFo</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">초보자 가이드</Nav.Link>
                        <Nav.Link href="#features">공지사항/업데이트</Nav.Link>
                    </Nav>
                    <Navbar.Collapse id="navbar-dark-example">
                        <Nav>
                            <NavDropdown
                                id="nav-dropdown-dark-example"
                                title="편의성 기능"
                                menuVariant="dark"
                            >
                                <NavDropdown.Item href="#action/3.1">결정석 계산기</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">유니온 배치</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">무릉/수로 환산</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">큐브 사용내역</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            <a href="/SignIn" style={{ textDecoration: 'none', marginRight: '10px' }}>로그인</a>
                        </Navbar.Text>
                        <Navbar.Text>
                            <a href="/SignUp" style={{ textDecoration: 'none' }}>회원가입</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default Header;