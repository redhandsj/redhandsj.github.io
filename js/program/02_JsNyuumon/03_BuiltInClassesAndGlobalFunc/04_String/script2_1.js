function print(str){
  document.write(str + "<br />");
}

var str_obj;

document.write("<p>");

str_obj = new String("Hello");
print(str_obj + "の長さは" + str_obj.length + "です");

str_obj = new String("おはようございます");
print(str_obj + "の長さは" + str_obj.length + "です");

document.write("</p>");
