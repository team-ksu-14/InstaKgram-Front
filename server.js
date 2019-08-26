const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

app.get('/api/posts', (req, res) => {
    res.send([
        {
            "idx":1,
            "contents":"테스트 내용 1",
            "imageUrl":"https://placeimg.com/512/512/1",
            "createdDate":"2019-08-21T20:20:01",
            "member":null
        },
        {
            "idx":2,
            "contents":"테스트 내용 2",
            "imageUrl":"https://placeimg.com/512/512/2",
            "createdDate":"2019-08-21T20:20:01",
            "member":null
        },
        {
            "idx":3,
            "contents":"테스트 내용 3",
            "imageUrl":"https://placeimg.com/512/512/3",
            "createdDate":"2019-08-21T20:20:01",
            "member":null
        },
        {
            "idx":4,
            "contents":"테스트 내용 4",
            "imageUrl":"https://placeimg.com/512/512/4",
            "createdDate":"2019-08-21T20:20:01",
            "member":null
        },
        {
            "idx":5,
            "contents":"테스트 내용 5",
            "imageUrl":"https://placeimg.com/512/512/5",
            "createdDate":"2019-08-21T20:20:01",
            "member":null
        },{
            "idx":6,
            "contents":"테스트 내용 6",
            "imageUrl":"https://placeimg.com/512/512/6",
            "createdDate":"2019-08-21T20:20:01",
            "member":null
        },{
            "idx":7,
            "contents":"테스트 내용 7",
            "imageUrl":"https://placeimg.com/512/512/7",
            "createdDate":"2019-08-21T20:20:01",
            "member":null
        },{
            "idx":8,
            "contents":"테스트 내용 8",
            "imageUrl":"https://placeimg.com/512/512/8",
            "createdDate":"2019-08-21T20:20:01",
            "member":null
        },
        {
            "idx":9,"contents":"테스트 내용 9",
            "imageUrl":"https://placeimg.com/512/512/9",
            "createdDate":"2019-08-21T20:20:01",
            "member":null
        },
        {
            "idx":10,
            "contents":"테스트 내용 10",
            "imageUrl":"https://placeimg.com/512/512/10",
            "createdDate":"2019-08-21T20:20:01",
            "member":null
        }
    ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));