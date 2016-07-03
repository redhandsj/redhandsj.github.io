document.write("<p>");

outloop: for (var i = 4; i < 8; i++){
  for (var j = 1; j < 5; j++){
    document.write(i + " × " + j + " ＝ " + (i * j) + "<br />");

    if (i * j > 10){
      continue outloop;
    }
  }
}

document.write("</p>");
