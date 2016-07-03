function print(str){
  document.write(str + "<br />");
}

document.write("<p>");

print("sin30 = " + Math.sin(30 * (Math.PI / 180)));
print("sin45 = " + Math.sin(45 * (Math.PI / 180)));
print("sin60 = " + Math.sin(60 * (Math.PI / 180)));

document.write("</p>");
