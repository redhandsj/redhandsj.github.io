function print(str){
  document.write(str + "<br />");
}

document.write("<p>");

var d1 = new Date(2009, 7, 11, 5, 36, 15, 0);
var d2 = new Date(Date.UTC(2009, 7, 11, 5, 36, 15, 0));

print(d1.toString());
print(d2.toString());

document.write("</p>");
