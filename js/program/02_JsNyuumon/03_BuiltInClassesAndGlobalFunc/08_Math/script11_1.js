function print(str){
  document.write(str + "<br />");
}

document.write("<p>");

print("tan30 = " + Math.tan(30 * (Math.PI / 180)));
print("tan45 = " + Math.tan(45 * (Math.PI / 180)));
print("tan60 = " + Math.tan(60 * (Math.PI / 180)));

document.write("</p>");
