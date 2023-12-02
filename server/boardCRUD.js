const express = require('express');
const connection = require('./server'); // 기존 server.js에 작성된 DB 연결 설정을 가져옴

// express 앱 생성
const app = express();

module.exports = app;