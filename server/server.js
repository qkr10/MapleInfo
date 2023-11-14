const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const mysql = require('mysql2');

// JSON body parser 설정
app.use(bodyParser.json());

// CORS 설정
app.use(cors());

app.set('port', process.env.PORT || 3000);

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

app.post('/signUp', (req, res) => {
    const { id, passWord, nickName, phoneNumber } = req.body;

    console.log('ID:', id);
    console.log('Password:', passWord);
    console.log('Nickname:', nickName);
    console.log('Phone Number:', phoneNumber);

    // SQL 쿼리 정의
    const sql = `INSERT INTO user (userId, userPw, userNickName, userPhoneNum, userRegDate) 
    VALUES (?, ?, ?, ?, NOW())`;

    // SQL 쿼리 실행
    connection.query(sql, [id, passWord, nickName, phoneNumber], (err, result) => {
        if (err) {
            console.error('INSERT 에러:', err);
            res.status(500).json({ message: '회원가입 실패.' });
            return;
        }

        console.log('회원가입 성공.', result);
        res.json({ message: '데이터가 성공적으로 전송되었습니다.' });
    });
});

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기 중');
});