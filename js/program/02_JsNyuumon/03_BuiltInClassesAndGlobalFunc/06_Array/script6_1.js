function print(str){
  document.write(str + "<br />");
}

var ary;

document.write("<p>");

ary = new Array("tokyo", "osaka", "nagoya");
print("before : " + ary);

ary.sort();
print("after : " + ary);

document.write("</p>");

document.write("<p>");

ary = new Array(89, 4103, 123);
print("before : " + ary);

ary.sort();
print("after : " + ary);

document.write("</p>");

document.write("<p>");

ary = ["札幌", "沖縄",,"東京",,"京都"];
print("before : " + ary);

ary.sort();
print("after : " + ary);

document.write("</p>");
