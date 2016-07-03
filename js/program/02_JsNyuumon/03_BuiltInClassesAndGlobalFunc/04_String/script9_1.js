function print(str){
  document.write(str + "<br />");
}

document.write("<p>");

var str_obj = new String("2009年度");

print(str_obj);

print("charAt(0) --> " + str_obj.charAt(0));
print("charAt(1) --> " + str_obj.charAt(1));
print("charAt(2) --> " + str_obj.charAt(2));
print("charAt(3) --> " + str_obj.charAt(3));
print("charAt(4) --> " + str_obj.charAt(4));
print("charAt(5) --> " + str_obj.charAt(5));
print("charAt(6) --> " + str_obj.charAt(6));

document.write("</p>");
