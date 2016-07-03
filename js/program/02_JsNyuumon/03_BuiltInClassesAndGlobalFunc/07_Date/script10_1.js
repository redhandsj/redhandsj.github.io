function print(str){
  document.write(str + "<br />");
}

var d = new Date();

document.write("<p>");

print(d);

document.write("</p>");

document.write("<p>");

print("時:" + d.getHours());
print("分:" + d.getMinutes());
print("秒:" + d.getSeconds());
print("ミリ秒:" + d.getMilliseconds());

document.write("</p>");
