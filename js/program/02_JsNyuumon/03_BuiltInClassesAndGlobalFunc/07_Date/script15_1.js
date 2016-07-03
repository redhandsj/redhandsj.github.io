function print(str){
  document.write(str + "<br />");
}

document.write("<p>");

var d = new Date();

print(d.toUTCString());

d.setUTCMonth(4, 30);

print(d.toUTCString());

document.write("</p>");
