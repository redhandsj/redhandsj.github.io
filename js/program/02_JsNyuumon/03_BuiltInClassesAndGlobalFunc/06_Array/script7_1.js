function print(str){
  document.write(str + "<br />");
}

document.write("<p>");

var ary = new Array(18, 26, 19, 33, 24);
print(ary);

ary.reverse();
print(ary);

document.write("</p>");
