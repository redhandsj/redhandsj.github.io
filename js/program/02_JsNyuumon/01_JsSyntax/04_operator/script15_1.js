var person = {name:'山田', old:20};
var pref = ['東京都', '大阪府', '北海道'];
var plus = function(x, y){ return x + y; }

document.write("<p>");
document.write("typeof 1 = " + (typeof 1) + "<br />");
document.write("typeof 'Hello' = " + (typeof 'Hello') + "<br />");
document.write("typeof true = " + (typeof true) + "<br />");
document.write("typeof null = " + (typeof null) + "<br />");
document.write("typeof NaN = " + (typeof NaN) + "<br />");
document.write("typeof undefined = " + (typeof undefined) + "<br />");
document.write("typeof オブジェクト = " + (typeof person) + "<br />");
document.write("typeof 配列 = " + (typeof pref) + "<br />");
document.write("typeof 関数 = " + (typeof plus) + "<br />");
document.write("</p>");

var num = 15;
if (typeof num == "number"){
  document.write("<p>変数の値は数値型です</p>");
}
