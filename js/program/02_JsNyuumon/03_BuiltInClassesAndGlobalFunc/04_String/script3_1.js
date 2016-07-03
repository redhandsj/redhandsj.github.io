function print(str){
  document.write(str + "<br />");
}

document.write("<p>");

var str_obj = new String("Good Morning.");
print(str_obj.toString());
print(str_obj);

document.write("</p>");
