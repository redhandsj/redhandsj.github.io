function print(str){
  document.write(str + "<br />");
}

document.write("<p>");

var num_obj = new Number(15);
var num = num_obj.valueOf();

print(typeof num_obj);
print(typeof num);

document.write("</p>");
