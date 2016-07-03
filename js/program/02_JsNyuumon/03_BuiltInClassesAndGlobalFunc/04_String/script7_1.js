function print(str){
  document.write(str + "<br />");
}

document.write("<p>");

var str_obj = new String("Thank you");

print(str_obj);

print("substring(0, 1) --> " + str_obj.substring(0, 1));
print("substring(0, 2) --> " + str_obj.substring(0, 2));
print("substring(0, 5) --> " + str_obj.substring(0, 5));
print("substring(3, 7) --> " + str_obj.substring(3, 7));
print("substring(0) --> " + str_obj.substring(0));
print("substring(6) --> " + str_obj.substring(6));
print("substring(5, 0) --> " + str_obj.substring(5, 0));

document.write("</p>");
