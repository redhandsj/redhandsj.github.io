function print(str){
  document.write(str + "<br />");
}

document.write("<p>");

var ms1 = Date.parse("2009/08/11 08:14:45");
var ms2 = Date.parse("2009-08-11 08:14:45");
var ms3 = Date.parse("2009/08/11 08:14:45 GMT+0000");

var d1 = new Date(ms1);
var d2 = new Date(ms2);
var d3 = new Date(ms3);

print(d1.toString());
print(d2.toString());
print(d3.toString());

document.write("</p>");
