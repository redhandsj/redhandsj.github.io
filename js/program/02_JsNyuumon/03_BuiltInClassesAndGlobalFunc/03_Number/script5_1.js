function print(str){
  document.write(str + "<br />");
}

document.write("<p>");

var num_obj = new Number(15.784);

print(num_obj.toFixed(0));
print(num_obj.toFixed(1));
print(num_obj.toFixed(2));
print(num_obj.toFixed(3));
print(num_obj.toFixed(4));
print(num_obj.toFixed(5));

try{
  print(num_obj.toFixed(1000));
}catch (e){
  print(e);
}

document.write("</p>");
