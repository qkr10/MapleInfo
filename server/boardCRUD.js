const connection = require('./server');
const bcrypt = require("bcrypt");

app.post('/wi', (req, res) => {
    const { id, passWord, nickName, phoneNumber } = req.body;

    // 비밀번호 해시 생성
    bcrypt.hash(passWord, 10, (err, hash) => {
        if (err) {
            console.error('비밀번호 해시 생성 에러:', err);
            res.status(500).json({ message: '회원가입 실패.' });
            return;
        }

        // 해시된 비밀번호로 SQL 쿼리 실행
        const sql = `INSERT INTO user (userId, userPw, userNickName, userPhoneNum, userRegDate) 
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
});