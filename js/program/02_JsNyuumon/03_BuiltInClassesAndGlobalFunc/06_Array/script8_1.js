function print(str){
  document.write(str + "<br />");
}

document.write("<p>");

var ary = new Array("伊藤", "東京都", 24, "男性");

print(ary);

print("slice(0, 1) --> " + ary.slice(0, 1));
print("slice(0, 2) --> " + ary.slice(0, 2));
print("slice(0, 3) --> " + ary.slice(0, 3));
print("slice(1, 3) --> " + ary.slice(1, 3));
print("slice(0) --> " + ary.slice(0));
print("slice(2) --> " + ary.slice(2));
print("slice(-4, 2) --> " + ary.slice(-4, 2));
print("slice(-3, -1) --> " + ary.slice(-3, -1));
print("slice(5, 0) --> " + ary.slice(5, 0));

document.write("</p>");
