function print(str){
  document.write(str + "<br />");
}

document.write("<p>");

var str_obj = new String("Thank you");

print(str_obj);

print("slice(0, 1) --> " + str_obj.slice(0, 1));
print("slice(0, 2) --> " + str_obj.slice(0, 2));
print("slice(0, 5) --> " + str_obj.slice(0, 5));
print("slice(3, 7) --> " + str_obj.slice(3, 7));
print("slice(0) --> " + str_obj.slice(0));
print("slice(6) --> " + str_obj.slice(6));
print("slice(-9, -4) --> " + str_obj.slice(-9, -4));
print("slice(-8, 4) --> " + str_obj.slice(-8, 4));
print("slice(5, 0) --> " + str_obj.slice(5, 0));

document.write("</p>");
