
const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');

// JSON body parser 설정
app.use(bodyParser.json());

// CORS 설정
app.use(cors());

app.set('port', process.env.PORT || 3000);

app.post('/signUp', (req, res) => {
    // 클라이언트로부터의 POST 요청 데이터 추출
    const { id, passWord, nickName, phoneNumber } = req.body;

    console.log('ID:', id);
    console.log('Password:', passWord);
    console.log('Nickname:', nickName);
    console.log('Phone Number:', phoneNumber);

    // 클라이언트에 응답 전송
    res.json({ message: '데이터가 성공적으로 전송되었습니다.' });
});

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기 중');
});