function print(str){
  document.write(str + "<br />");
}

document.write("<p>");

var d = new Date();

print(d);

d.setTime(1250000151104);

print(d);

document.write("</p>");
