function print(str){
  document.write(str + "<br />");
}

var d = new Date();
var weekdays = ["日", "月", "火", "水", "木", "金", "土"];

document.write("<p>");

print(d.toUTCString());

document.write("</p>");

document.write("<p>");

print("年:" + d.getUTCFullYear());
print("月:" + (d.getUTCMonth() + 1));
print("日:" + d.getUTCDate());
print("曜日:" + weekdays[d.getUTCDay()]);

document.write("</p>");
