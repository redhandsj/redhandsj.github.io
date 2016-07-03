function print(str){
  document.write(str + "<br />");
}

var ary = new Array(89, 92, 73);

document.write("<p>");

print(ary.join());
print(ary.join(", "));

document.write("</p>");

var tokaidou = new Array("東京", "品川", "新横浜", "名古屋", "京都", "新大阪");

document.write("<p>");

print(tokaidou.join("-->"));

document.write("</p>");

var personal = new Array("高橋", 29, "東京都", true, ["太郎", "次郎"]);

document.write("<p>");

print(personal.join(" : "));

document.write("</p>");
