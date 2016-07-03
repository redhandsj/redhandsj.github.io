function print(str){
  document.write(str + "<br />");
}

var ary = new Array("東京", "大阪", "名古屋");

document.write("<p>");

for (var i = 0 ; i < ary.length ; i++){
  print("array[" + i + "] = " + ary[i]);
}

document.write("</p>");

document.write("<p>");

print("ary.length = 2");
ary.length = 2;

for (var i = 0 ; i < ary.length ; i++){
  print("array[" + i + "] = " + ary[i]);
}

document.write("</p>");

document.write("<p>");

print("ary.length = 4");
ary.length = 4;

for (var i = 0 ; i < ary.length ; i++){
  print("array[" + i + "] = " + ary[i]);
}

document.write("</p>");
