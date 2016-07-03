function print(str){
  document.write(str + "<br />");
}

document.write("<p>");

var d = new Date();

print(d);

d.setFullYear(2008, 6);

print(d);

document.write("</p>");
