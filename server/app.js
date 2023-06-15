const express = require('express');
const fs = require('fs');
const app = express();
const port = 3030;
const cors = require('cors');

// JSON 파일 읽기
const rawData = fs.readFileSync('./src/data.json');
const jsonData = JSON.parse(rawData);

app.use(cors())

app.get('/products/category', (req, res) => {
  const majorCategory = jsonData.map((v) => v.majorCategory).filter((v, i, arr) => arr.indexOf(v) === i);
  const middleCategory = jsonData.map((v) => v.middleCategory).filter((v, i, arr) => arr.indexOf(v) === i);
  res.json({ major: majorCategory, middle: middleCategory })
})

app.get('/products/getItems', (req, res) => {
  res.json(jsonData)
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})