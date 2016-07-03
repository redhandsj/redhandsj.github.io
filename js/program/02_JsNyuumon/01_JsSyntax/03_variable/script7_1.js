/* JavaScriptサンプル */

var obj1;
obj1 = ['東京都', '大阪府', '北海道'];

var obj2;
obj2 = obj1;

document.write("<p>obj1 : " + obj1 + "</p>");
document.write("<p>obj2 : " + obj2 + "</p>");

obj1[1] = '神奈川県';

document.write("<p>obj1 : " + obj1 + "</p>");
document.write("<p>obj2 : " + obj2 + "</p>");

obj2[2] = '福岡県';

document.write("<p>obj1 : " + obj1 + "</p>");
document.write("<p>obj2 : " + obj2 + "</p>");
