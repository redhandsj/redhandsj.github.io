var old = 10;
document.write("<p>年齢は" + old + "歳です。");
if (old >= 20){
  document.write("20歳以上です。");
}else{
  document.write("20歳未満です。");
}
document.write("</p>");

if ('abc' > 'def'){
  document.write("<p>abc は def より大きいです</p>");
}else{
  document.write("<p>abc は def より大きくありません</p>");
}

if ('abc' > 'ABC'){
  document.write("<p>abc は ABC より大きいです</p>");
}else{
  document.write("<p>abc は ABC より大きくありません</p>");
}

if (10 < "20"){
  document.write("<p>10 は '20' より小さいです</p>");
}else{
  document.write("<p>10 は '20' より小さくありません</p>");
}
