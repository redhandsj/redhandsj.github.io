var num = 1;

document.write("<p>");

for (var i = 0; i < 10; i++){
  num *= 2;
  document.write("i = " + i + ", num = " + num + "<br />");

  if (num >= 100){
    break;
  }
}

document.write("</p>");
