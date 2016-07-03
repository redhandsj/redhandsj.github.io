function print(str){
  document.write(str + "<br />");
}

document.write("<p>");

print("Math.ceil(3.29) = " + Math.ceil(3.29));
print("Math.ceil(3.776) = " + Math.ceil(3.776));
print("Math.ceil(-2.299) = " + Math.ceil(-2.299));
print("Math.ceil(-2.52) = " + Math.ceil(-2.52));
print("Math.ceil('76.87') = " + Math.ceil('76.87'));
print("Math.ceil(NaN) = " + Math.ceil(NaN));

document.write("</p>");
