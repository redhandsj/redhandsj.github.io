document.write("<p>");

for (var i = 0; i < 10; i++){
  if (i % 2 == 1){
    continue;
  }

  document.write("i = " + i + "<br />");
}

document.write("</p>");
