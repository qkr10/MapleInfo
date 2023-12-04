const express = require('express');
const session = require('express-session');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const initUserLogin = require('userLogin');

// JSON body parser 설정
app.use(bodyParser.json());

// CORS 설정
app.use(cors());

// JSON 파싱을 위한 미들웨어
app.use(express.json());

app.use(session({
    secret: 'mySecretKey',
    resave: false,
    saveUninitialized: false
}));

initUserLogin(app);

app.post('/writing', (req, res) => {
    const { nickname, title, contents } = req.body;
    //세션으로 찾은
    const currentUserID = req.session.userID;
    const findUserNo = `SELECT user_no FROM user WHERE user_id = '${currentUserID}'`;
    console.log(req.session.userID);

    // // 해시된 비밀번호로 SQL 쿼리 실행
    // const sql = `INSERT INTO user_post(user_no, user_nickname, post_title, post_content, post_created, post_updated)
    //     VALUES ('${userno}, ${nickname}', '${title}', '${contents}', NOW(), NOW())`;
    //
    // connection.query(sql, (err, result) => {
    //     if (err) {
    //         console.error('INSERT 에러:', err);
    //         res.status(500).json({ message: '게시글 작성 실패했습니다.' });
    //         return;
    //     }
    //
    //     console.log('게시글 작성 성공했습니다.', result);
    //     res.json({ message: '데이터가 성공적으로 전송되었습니다.' });
    // });
});

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기 중');
});