function print(str){
  document.write(str + "<br />");
}

document.write("<p>");

var n1 = Math.atan2(4, 4);
print("atan(4/4) = " + n1 + "ラジアン(" + n1/(Math.PI / 180) + "度)");

var n2 = Math.atan2(6, 8);
print("atan(8/6) = " + n2 + "ラジアン(" + n2/(Math.PI / 180) + "度)");

var n3 = Math.atan2(1, 0);
print("atan(1/0) = " + n3 + "ラジアン(" + n3/(Math.PI / 180) + "度)");

var n4 = Math.atan2(0, 0);
print("atan(0/0) = " + n4 + "ラジアン(" + n4/(Math.PI / 180) + "度)");

var n5 = Math.atan2(-1, 0);
print("atan(-1/0) = " + n5 + "ラジアン(" + n5/(Math.PI / 180) + "度)");

document.write("</p>");
