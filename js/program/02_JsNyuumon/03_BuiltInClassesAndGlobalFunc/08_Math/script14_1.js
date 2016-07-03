function print(str){
  document.write(str + "<br />");
}

document.write("<p>");

var n1 = Math.atan(0.5);
print("atan0.5 = " + n1 + "ラジアン(" + n1/(Math.PI / 180) + "度)");

var n2 = Math.atan(-0.3);
print("atan-0.3 = " + n2 + "ラジアン(" + n2/(Math.PI / 180) + "度)");

var n3 = Math.atan(1.4);
print("atan1.4 = " + n3 + "ラジアン(" + n3/(Math.PI / 180) + "度)");

document.write("</p>");
