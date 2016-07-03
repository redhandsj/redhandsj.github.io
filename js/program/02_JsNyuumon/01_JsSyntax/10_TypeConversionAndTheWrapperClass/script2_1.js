document.write("<p>数値への変換</p>");

document.write("<p>");

document.write("10  -->  " + ("10" - 0) + "<br />");
document.write("3.13  -->  " + ("3.12" - 0) + "<br />");
document.write("0x1F  -->  " + ("0x1F" - 0) + "<br />");
document.write("1.2e-4  -->  " + ("1.2e-4" - 0) + "<br />");
document.write("8ab  -->  " + ("8ab" - 0) + "<br />");

document.write("true  -->  " + (true - 0) + "<br />");
document.write("false  -->  " + (false - 0) + "<br />");

document.write("null  -->  " + (null - 0) + "<br />");
document.write("undefined  -->  " + (undefined - 0) + "<br />");

document.write("{x:90, y:110}  -->  " + ({x:90, y:110} - 0) + "<br />");
document.write("['東京', '大阪']  -->  " + (["東京", "大阪"] - 0) + "<br />");
document.write("[94]  -->  " + ([94] - 0) + "<br />");
document.write("[94, 75]  -->  " + ([94, 75] - 0) + "<br />");
document.write("function(x){return x + 1;}  -->  " + (function(x){return x + 1;} - 0) + "<br />");
document.write("new Boolean(true)  -->  " + (new Boolean(true) - 0) + "<br />");
document.write("new Boolean(false)  -->  " + (new Boolean(false) - 0) + "<br />");
document.write("new Number(32)  -->  " + (new Number(32) - 0) + "<br />");
document.write("new String('772')  -->  " + (new String('772') - 0) + "<br />");
document.write("new String('bom')  -->  " + (new String('bom') - 0) + "<br />");

document.write("</p>");
