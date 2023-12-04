const mysql = require('mysql2');
const bcrypt = require('bcrypt');

// MySQL 연결 설정
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'rlawlsdud11!',
    database: 'mapleinfodb'
});

// MySQL 연결
connection.connect((err) => {
    if (err) {
        console.error('MySQL 연결 에러:', err);
        throw err;
    }
    console.log('MySQL에 성공적으로 연결되었습니다.');
});

function signUp(req, res) {
    const { id, passWord, nickName, phoneNumber } = req.body;

    // 비밀번호 해시 생성
    bcrypt.hash(passWord, 10, (err, hash) => {
        if (err) {
            console.error('비밀번호 해시 생성 에러:', err);
            res.status(500).json({ message: '회원가입 실패.' });
            return;
        }

        // 해시된 비밀번호로 SQL 쿼리 실행
        const sql = `INSERT INTO user (user_id, user_pw, user_nickname, user_phone, user_regdate) 
        VALUES (?, ?, ?, ?, NOW())`;

        connection.query(sql, [id, hash, nickName, phoneNumber], (err, result) => {
            if (err) {
                console.error('INSERT 에러:', err);
                res.status(500).json({ message: '회원가입 실패.' });
                return;
            }

            console.log('회원가입 성공.', result);
            res.json({ message: '데이터가 성공적으로 전송되었습니다.' });
        });
    });
}

function signIn(req, res) {
    const { id, passWord } = req.body;

    const sql = 'SELECT * FROM user WHERE user_id = ?';

    connection.query(sql, [id], (err, result) => {
        if (err) {
            console.error('SELECT 에러:', err);
            res.status(500).json({ message: '로그인 실패.' });
            return;
        }

        if (result.length === 0) {
            // 해당 아이디의 사용자가 존재하지 않음
            res.status(401).json({ message: '아이디 또는 비밀번호가 일치하지 않습니다.' });
            return;
        }

        const storedHashedPassword = result[0].user_pw; // 데이터베이스에 저장된 해시된 비밀번호

        // 저장된 해시된 비밀번호와 입력된 비밀번호 비교
        bcrypt.compare(passWord, storedHashedPassword, (error, isEqual) => {
            if (error) {
                console.error('비밀번호 비교 에러:', error);
                res.status(500).json({ message: '로그인 실패.' });
                return;
            }

            if (isEqual) {
                // 세션에 사용자 ID 저장
                req.session.userID = id;
                // 비밀번호 일치 - 로그인 성공
                console.log('로그인 성공.', result);
                res.json({ message: '데이터가 성공적으로 전송되었습니다.', sessionID: req.sessionID });
                console.log(req.session);
                console.log(req.session.userID);
            } else {
                // 비밀번호 불일치
                res.status(401).json({ message: '아이디 또는 비밀번호가 일치하지 않습니다.' });
            }
        });
    });
}

function initUserLogin(app) {
    app.post('/signUp', signUp);
    app.post('/signIn', signIn);
}

module.exports = initUserLogin;