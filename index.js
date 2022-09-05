const express = require('express');

const app = express();
app.get('/', (req,res) => {
    res.send('🐳 Docker Sihun');
})
app.listen(8080, () => {
    console.log('8080번 포트 대기중');
})