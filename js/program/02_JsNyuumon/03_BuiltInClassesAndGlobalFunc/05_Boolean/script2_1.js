function print(str){
  document.write(str + "<br />");
}

var bool_obj;

document.write("<p>");

bool_obj = new Boolean(true);
print(bool_obj.toString());

bool_obj = new Boolean(false);
print(bool_obj.toString());

document.write("</p>");
