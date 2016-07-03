/* オブジェクトの例 */
var person = {name:'山田', old:20};
document.write('<p>' + person.name + '</p>');
document.write('<p>' + person.old + '</p>');

/* 配列の例 */
var pref = ['東京都', '大阪府', '北海道'];
for (var i = 0; i < pref.length; i++){
  document.write('<p>' + pref[i] + '</p>');
}
