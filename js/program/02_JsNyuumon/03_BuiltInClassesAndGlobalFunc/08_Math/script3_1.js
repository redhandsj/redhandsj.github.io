function print(str){
  document.write(str + "<br />");
}

document.write("<p>");

print("Math.round(3.49) = " + Math.round(3.49));
print("Math.round(3.5) = " + Math.round(3.5));
print("Math.round(3.51) = " + Math.round(3.51));
print("Math.round(-2.499) = " + Math.round(-2.499));
print("Math.round(-2.5) = " + Math.round(-2.5));
print("Math.round(-2.51) = " + Math.round(-2.51));
print("Math.round('76.87') = " + Math.round('76.87'));
print("Math.round(NaN) = " + Math.round(NaN));

document.write("</p>");
