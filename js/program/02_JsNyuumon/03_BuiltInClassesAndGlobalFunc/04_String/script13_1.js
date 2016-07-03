function print(str){
  document.write(str + "<br />");
}

document.write("<p>");

var str_obj = new String("Thank you");
print(str_obj + " --> " + str_obj.toUpperCase());

var str = "SNS Service";
print(str + " --> " + str.toUpperCase());

document.write("</p>");
