function print(str){
  document.write(str + "<br />");
}

var bool_obj;

document.write("<p>");

bool_obj = new Boolean(true);
print(bool_obj);

bool_obj = new Boolean(1);
print(bool_obj);

bool_obj = new Boolean(0);
print(bool_obj);

document.write("</p>");
