function print(str){
  document.write(str + "<br />");
}

document.write("<p>");

var ary = new Array(8500, 723, 1890);
print(ary.toString());
print(ary.toLocaleString());

document.write("</p>");
