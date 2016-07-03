function print(str){
  document.write(str + "<br />");
}

document.write("<p>");

var bool_obj = new Boolean(true);
var bool = bool_obj.valueOf();

print(typeof bool_obj);
print(typeof bool);

document.write("</p>");
