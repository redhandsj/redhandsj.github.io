function print(str){
  document.write(str + "<br />");
}

document.write("<p>");

print("parseFloat('10') = " + parseFloat("10"));
print("parseFloat('-2008year') = " + parseFloat("-2008year"));
print("parseFloat('0x3F') = " + parseFloat("0x3F"));
print("parseFloat('4F') = " + parseFloat("4F"));
print("parseFloat('18.26B') = " + parseFloat("18.26B"));
print("parseFloat('2.4e-3') = " + parseFloat("2.4e-3"));
print("parseFloat('2.4ea') = " + parseFloat("2.4ea"));
print("parseFloat('Book170') = " + parseFloat("Book170"));
print("parseFloat('') = " + parseFloat(""));

document.write("</p>");
