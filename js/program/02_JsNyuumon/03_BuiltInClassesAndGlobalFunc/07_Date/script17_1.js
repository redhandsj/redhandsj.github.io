function print(str){
  document.write(str + "<br />");
}

document.write("<p>");

var d = new Date();

print(d.toUTCString());

d.setUTCMinutes(59, 59, 999);

print(d.toUTCString());

document.write("</p>");
