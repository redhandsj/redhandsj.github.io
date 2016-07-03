function print(str){
  document.write(str + "<br />");
}

document.write("<p>");

var n1 = Math.asin(0.5);
print("asin0.5 = " + n1 + "ラジアン(" + n1/(Math.PI / 180) + "度)");

var n2 = Math.asin(0.3);
print("asin0.3 = " + n2 + "ラジアン(" + n2/(Math.PI / 180) + "度)");

var n3 = Math.asin(1.2);
print("asin1.2 = " + n3 + "ラジアン(" + n3/(Math.PI / 180) + "度)");

document.write("</p>");
