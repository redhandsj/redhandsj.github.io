document.write("<p>");

outloop: for (var i = 1; i < 5; i++){
  for (var j = 1; j < 5; j++){
    document.write(i + " × " + j + " ＝ " + (i * j) + "<br />");

    if (i * j > 10){
      break outloop;
    }
  }
}

document.write("</p>");
