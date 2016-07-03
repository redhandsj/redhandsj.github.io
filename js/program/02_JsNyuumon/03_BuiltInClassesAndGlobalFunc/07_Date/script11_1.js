function print(str){
  document.write(str + "<br />");
}

var d = new Date();

document.write("<p>");

print(d);
print(d.toUTCString());

document.write("</p>");

document.write("<p>");

print("時:" + d.getUTCHours());
print("分:" + d.getUTCMinutes());
print("秒:" + d.getUTCSeconds());
print("ミリ秒:" + d.getUTCMilliseconds());

document.write("</p>");
