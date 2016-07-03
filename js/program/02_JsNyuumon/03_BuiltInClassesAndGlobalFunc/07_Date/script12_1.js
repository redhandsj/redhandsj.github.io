function print(str){
  document.write(str + "<br />");
}

document.write("<p>");

var d = new Date();

print(d);
print(d.toUTCString());
print(d.getTimezoneOffset() + "分");

document.write("</p>");
