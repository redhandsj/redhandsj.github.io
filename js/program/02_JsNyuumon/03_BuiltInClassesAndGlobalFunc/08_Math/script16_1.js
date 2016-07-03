function print(str){
  document.write(str + "<br />");
}

document.write("<p>");

print("Math.sqrt(4) = " + Math.sqrt(4));
print("Math.sqrt(6) = " + Math.sqrt(6));
print("Math.sqrt(8) = " + Math.sqrt(8));
print("Math.sqrt(9) = " + Math.sqrt(9));

print("Math.sqrt(12.44) = " + Math.sqrt(12.44));
print("Math.sqrt(-2) = " + Math.sqrt(-2));
print("Math.sqrt(NaN) = " + Math.sqrt(NaN));

document.write("</p>");
