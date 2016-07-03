function print(obj){
  document.write(obj.toString() + "<br />");
}

var obj = new Object();
obj.width = 100;
var ary = new Array("Tokyo", "Osaka");
var num_obj = new Number(20);
var str_obj = new Object("Hello");

document.write("<p>");

print(obj);
print(ary);
print(num_obj);
print(str_obj);

document.write("</p>");
