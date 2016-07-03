function print(str){
  document.write(str + "<br />");
}

document.write("<p>");

var d = new Date();

print(d.toString());
print(d.getTime() + " ms");

document.write("</p>");
