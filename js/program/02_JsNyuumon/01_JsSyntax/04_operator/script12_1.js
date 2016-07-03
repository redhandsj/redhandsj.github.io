if (null === undefined){
  document.write("<p>null === undefined</p>");
}else{
  document.write("<p>null !== undefined</p>");
}

if (null == undefined){
  document.write("<p>null == undefined</p>");
}else{
  document.write("<p>null != undefined</p>");
}

var pref1 = ['東京都', '大阪府', '北海道'];
var pref2 = pref1;
var pref3 = ['東京都', '大阪府', '北海道'];

if (pref1 === pref2){
  document.write("<p>pref1 === pref2</p>");
}else{
  document.write("<p>pref1 !== pref2</p>");
}

if (pref1 === pref3){
  document.write("<p>pref1 === pref3</p>");
}else{
  document.write("<p>pref1 !== pref3</p>");
}

if (pref1 == pref2){
  document.write("<p>pref1 == pref2</p>");
}else{
  document.write("<p>pref1 != pref2</p>");
}

if (pref1 == pref3){
  document.write("<p>pref1 == pref3</p>");
}else{
  document.write("<p>pref1 != pref3</p>");
}
