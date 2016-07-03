function print(str){
  document.write(str + "<br />");
}

document.write("<p>");

var str_obj = new String("2009年度");

print(str_obj);

print("charCodeAt(0) --> " + str_obj.charCodeAt(0));
print("charCodeAt(1) --> " + str_obj.charCodeAt(1));
print("charCodeAt(2) --> " + str_obj.charCodeAt(2));
print("charCodeAt(3) --> " + str_obj.charCodeAt(3));
print("charCodeAt(4) --> " + str_obj.charCodeAt(4));
print("charCodeAt(5) --> " + str_obj.charCodeAt(5));

document.write("</p>");
