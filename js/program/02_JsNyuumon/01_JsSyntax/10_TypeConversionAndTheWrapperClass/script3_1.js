function checkBool(val){
  if (val){
    return "true";
  }else{
    return "false";
  }
}

document.write("<p>論理値への変換</p>");

document.write("<p>");

document.write("0  -->  " + checkBool(0) + "<br />");
document.write("10  -->  " + checkBool(10) + "<br />");
document.write("1.2e5  -->  " + checkBool(1.2e5) + "<br />");

document.write("''  -->  " + checkBool('') + "<br />");
document.write("'Sun'  -->  " + checkBool('Sun') + "<br />");

document.write("null  -->  " + checkBool(null) + "<br />");
document.write("undefined  -->  " + checkBool(undefined) + "<br />");
document.write("NaN  -->  " + checkBool(NaN) + "<br />");
document.write("Infinity  -->  " + checkBool(Infinity) + "<br />");

document.write("{x:90, y:110}  -->  " + checkBool({x:90, y:110}) + "<br />");
document.write("['東京', '大阪']  -->  " + checkBool(["東京", "大阪"]) + "<br />");
document.write("function(x){return x + 1;}  -->  " + checkBool(function(x){return x + 1;}) + "<br />");
document.write("new Boolean(true)  -->  " + checkBool(new Boolean(true)) + "<br />");
document.write("new Boolean(false)  -->  " + checkBool(new Boolean(false)) + "<br />");
document.write("new Number(0)  -->  " + checkBool(new Number(0)) + "<br />");
document.write("new Number(32)  -->  " + checkBool(new Number(32)) + "<br />");
document.write("new String('bom')  -->  " + checkBool(new String('bom')) + "<br />");

document.write("</p>");
