function print(str){
  document.write(str + "<br />");
}

document.write("<p>");

print("Math.E = " + Math.E);
print("Math.LN10 = " + Math.LN10);
print("Math.LN2 = " + Math.LN2);
print("Math.LOG10E = " + Math.LOG10E);
print("Math.LOG2E = " + Math.LOG2E);

document.write("</p>");

document.write("<p>");

print("Math.PI = " + Math.PI);

var r = 10;                 // 半径
var c = 2 * Math.PI * r;    // 円周の長さ
var a = Math.PI * r * r;    // 円の面積

print("半径 : " + r);
print("円周 : " + c);
print("面積 : " + a);

document.write("</p>");

document.write("<p>");

print("Math.SQRT2 = " + Math.SQRT2);
print("Math.SQRT1_2 = " + Math.SQRT1_2);

document.write("</p>");
