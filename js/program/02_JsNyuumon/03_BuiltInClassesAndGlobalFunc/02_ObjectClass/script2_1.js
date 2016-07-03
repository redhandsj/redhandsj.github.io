function classcheck(func){
  if (func == Object){
    document.write("Object Class<br />");
  }else if (func == Array){
    document.write("Array Class<br />");
  }else if (func == String){
    document.write("String Class<br />");
  }else{
    document.write("Other<br />");
  }
}

var obj = new Object();
var ary = new Array();
var num_obj = new Number(20);
var str_obj = new Object("Hello");

document.write("<p>");

classcheck(obj.constructor);
classcheck(ary.constructor);
classcheck(num_obj.constructor);
classcheck(str_obj.constructor);

document.write("</p>");
