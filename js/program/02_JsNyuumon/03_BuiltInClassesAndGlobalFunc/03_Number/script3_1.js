function print(str){
  document.write(str + "<br />");
}

document.write("<p>");

var num_obj = new Number(15890.77273);

print(num_obj.toString());
print(num_obj.toLocaleString());

document.write("</p>");
