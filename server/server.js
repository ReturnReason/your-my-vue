const express = require('express');
const path = require('path');
const app = express();
const imgPath = path.join(__dirname, './imgs');
const PORT = 12010;

/*
 *
 * 유토의 미니 이미지 서버
 * http://localhost:12010/imgs/iu.jpg
 * GET 요청하여 이미지를 다운로드 할 수 있어요 ♡
 */

const main = async () => {
  app.use('/imgs', express.static(imgPath));
  app.listen(PORT, console.log(`listening on ${PORT}!`));
};

main();
