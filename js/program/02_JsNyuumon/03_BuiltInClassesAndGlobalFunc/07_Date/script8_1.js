function print(str){
  document.write(str + "<br />");
}

var d = new Date();
var weekdays = ["日", "月", "火", "水", "木", "金", "土"];

document.write("<p>");

print(d);

document.write("</p>");

document.write("<p>");

print("年:" + d.getFullYear());
print("月:" + (d.getMonth() + 1));
print("日:" + d.getDate());
print("曜日:" + weekdays[d.getDay()]);

document.write("</p>");
