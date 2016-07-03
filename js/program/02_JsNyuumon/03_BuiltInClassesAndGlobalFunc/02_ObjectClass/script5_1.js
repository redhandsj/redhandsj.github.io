function print(str){
  document.write(str + "<br />");
}

var obj = new Object();
var num_obj = new Number(45);
var str_obj = new String("Hello");
var bool_obj = new Boolean(true);
var ary = new Array();
var d = new Date();

document.write("<p>");

print("Object.valueOf --> " + typeof obj.valueOf());
print("Number.valueOf --> " + typeof num_obj.valueOf());
print("String.valueOf --> " + typeof str_obj.valueOf());
print("Boolean.valueOf --> " + typeof bool_obj.valueOf());
print("Array.valueOf --> " + typeof ary.valueOf());
print("Date.valueOf --> " + typeof d.valueOf());

document.write("</p>");
