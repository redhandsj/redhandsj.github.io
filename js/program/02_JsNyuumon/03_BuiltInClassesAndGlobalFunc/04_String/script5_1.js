function print(str){
  document.write(str + "<br />");
}

document.write("<p>");

var str_obj = new String("東京都");
var str = str_obj.concat("千代田区", "大手町");

print(str_obj);
print(str);

document.write("</p>");
