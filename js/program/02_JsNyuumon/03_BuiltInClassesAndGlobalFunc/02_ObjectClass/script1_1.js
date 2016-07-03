function print(str){
  document.write(str + "<br />");
}

var obj = new Object();
obj.width = 100;
obj.height = 80;

document.write("<p>");

for (var pname in obj){
  print(pname + " = " + obj[pname]);
}

document.write("</p>");
