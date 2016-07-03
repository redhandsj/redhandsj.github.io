document.write("<p>");

for (var i = 1; i <= 10; i++){
  if (i % 2 == 0){
    document.write(i + " は偶数です<br />");
  }else{
    document.write(i + " は奇数です<br />");
  }
}

document.write("</p>");
