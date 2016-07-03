function print(str){
  document.write(str + "<br />");
}

document.write("<p>");

var str_obj = new String("Thank you");

print(str_obj);

print("substr(0, 1) --> " + str_obj.substr(0, 1));
print("substr(0, 2) --> " + str_obj.substr(0, 2));
print("substr(1, 1) --> " + str_obj.substr(1, 1));
print("substr(1, 2) --> " + str_obj.substr(1, 2));
print("substr(6, 3) --> " + str_obj.substr(6, 3));
print("substr(0) --> " + str_obj.substr(0));
print("substr(6) --> " + str_obj.substr(6));
print("substr(-9, 3) --> " + str_obj.substr(-9, 3));
print("substr(-6, 5) --> " + str_obj.substr(-6, 5));

document.write("</p>");
