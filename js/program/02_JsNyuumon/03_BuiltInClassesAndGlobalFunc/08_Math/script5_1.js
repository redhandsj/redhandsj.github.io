function print(str){
  document.write(str + "<br />");
}

document.write("<p>");

print("Math.floor(3.29) = " + Math.floor(3.29));
print("Math.floor(3.776) = " + Math.floor(3.776));
print("Math.floor(-2.299) = " + Math.floor(-2.299));
print("Math.floor(-2.52) = " + Math.floor(-2.52));
print("Math.floor('76.87') = " + Math.floor('76.87'));
print("Math.floor(NaN) = " + Math.floor(NaN));

document.write("</p>");
