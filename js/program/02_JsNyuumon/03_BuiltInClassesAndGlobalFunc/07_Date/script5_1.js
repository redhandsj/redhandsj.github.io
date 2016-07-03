function print(str){
  document.write(str + "<br />");
}

document.write("<p>");

var d = new Date();

print(d.toString());
print(d.valueOf() + " ms");

document.write("</p>");
