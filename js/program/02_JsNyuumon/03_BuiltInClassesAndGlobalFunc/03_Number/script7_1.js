function print(str){
  document.write(str + "<br />");
}

document.write("<p>");

var num_obj = new Number(176.54);

print(num_obj.toPrecision(1));
print(num_obj.toPrecision(2));
print(num_obj.toPrecision(3));
print(num_obj.toPrecision(4));
print(num_obj.toPrecision(5));
print(num_obj.toPrecision(6));
print(num_obj.toPrecision(7));

try{
  print(num_obj.toPrecision(0));
}catch (e){
  print(e);
}

try{
  print(num_obj.toPrecision(1000));
}catch (e){
  print(e);
}

document.write("</p>");
