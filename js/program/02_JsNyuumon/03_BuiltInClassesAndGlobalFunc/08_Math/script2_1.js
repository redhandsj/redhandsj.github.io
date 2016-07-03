function print(str){
  document.write(str + "<br />");
}

document.write("<p>");

print("Math.abs(10) = " + Math.abs(10));
print("Math.abs(-8) = " + Math.abs(-8));
print("Math.abs(-2.487) = " + Math.abs(-2.487));
print("Math.abs(true) = " + Math.abs(true));
print("Math.abs(NaN) = " + Math.abs(NaN));

document.write("</p>");
