const express = require('express'); //EXPRESS모듈 불러오기
const PORT = 8080; //포트지정, 호스트는 따로 지정 안할거임

//APP
const app = express(); //express앱 생성 
app.get('/',(req,res)=>{
    res.send("안녕하세요!!")
});

app.listen(PORT); //해당 포트로 실행하기
console.log("Server is running")