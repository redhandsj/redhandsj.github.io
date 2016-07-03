function print(str){
  document.write(str + "<br />");
}

var d = new Date();

document.write("<p>");

print("toUTCStringメソッド : ");
print(d.toUTCString());

document.write("</p>");

document.write("<p>");

print("toGMTStringメソッド : ");
print(d.toGMTString());

document.write("</p>");
