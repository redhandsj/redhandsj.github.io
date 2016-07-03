function print(str){
  document.write(str + "<br />");
}

document.write("<p>");

print("Math.min() = " + Math.min());
print("Math.min(10) = " + Math.min(10));
print("Math.min(10, 7) = " + Math.min(10, 7));
print("Math.min(-4, 3, 29) = " + Math.min(-4, 3, 29));
print("Math.min(10, '38', 29) = " + Math.min(10, '38', 29));
print("Math.min(10, 'abc', 29) = " + Math.min(10, 'abc', 29));
print("Math.min(10, NaN, 29) = " + Math.min(10, NaN, 29));

document.write("</p>");
