function print(str){
  document.write(str + "<br />");
}

var obj = new Object();
obj.width = 100;
var d = new Date();
var num_obj = new Number(1820000);

document.write("<p>");

print(obj.toString());
print(obj.toLocaleString());
print(d.toString());
print(d.toLocaleString());
print(num_obj.toString());
print(num_obj.toLocaleString());

document.write("</p>");
