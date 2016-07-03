document.write("<p>");

for (var i = 1; i <= 9; i++){
  for (var j = 1; j <= 9; j++){
    document.write(i + " × " + j + " = " + (i * j) + "<br />");
  }
}

document.write("</p>");
