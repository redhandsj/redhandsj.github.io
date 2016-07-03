function print(str){
  document.write(str + "<br />");
}

var d = new Date();

document.write("<p>");

print("toStringメソッド : ");
print(d.toString());

document.write("</p>");

document.write("<p>");

print("toLocaleStringメソッド : ");
print(d.toLocaleString());
print(d.toLocaleDateString());
print(d.toLocaleTimeString());

document.write("</p>");
