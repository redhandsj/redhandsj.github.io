function print(str){
  document.write(str + "<br />");
}

document.write("<p>");

var d = new Date();

print(d);

d.setHours(6, 0, 0, 0);

print(d);

document.write("</p>");
