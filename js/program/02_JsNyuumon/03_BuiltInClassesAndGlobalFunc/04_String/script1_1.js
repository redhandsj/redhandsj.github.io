function print(str){
  document.write(str + "<br />");
}

var str_obj;

document.write("<p>");

str_obj = new String("Hello");
print(str_obj);

str_obj = new String(122);
print(str_obj);

document.write("</p>");
