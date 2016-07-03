function print(str){
  document.write(str + "<br />");
}

document.write("<p>");

print("Math.max() = " + Math.max());
print("Math.max(10) = " + Math.max(10));
print("Math.max(10, 3) = " + Math.max(10, 3));
print("Math.max(10, 3, 29) = " + Math.max(10, 3, 29));
print("Math.max(10, '38', 29) = " + Math.max(10, '38', 29));
print("Math.max(10, 'abc', 29) = " + Math.max(10, 'abc', 29));
print("Math.max(10, NaN, 29) = " + Math.max(10, NaN, 29));

document.write("</p>");
