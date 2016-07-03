function print(str){
  document.write(str + "<br />");
}

document.write("<p>");

var str_obj = new String("こんにちは。");
print(str_obj.valueOf());
print(str_obj);

document.write("</p>");
