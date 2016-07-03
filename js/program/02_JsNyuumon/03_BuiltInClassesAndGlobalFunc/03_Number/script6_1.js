function print(str){
  document.write(str + "<br />");
}

document.write("<p>");

var num_obj = new Number(135.7);

print(num_obj.toExponential(0));
print(num_obj.toExponential(1));
print(num_obj.toExponential(2));
print(num_obj.toExponential(3));
print(num_obj.toExponential(4));

var num_obj2 = new Number(0.00274);

print(num_obj2.toExponential(0));
print(num_obj2.toExponential(1));
print(num_obj2.toExponential(2));
print(num_obj2.toExponential(3));
print(num_obj2.toExponential(4));

try{
  print(num_obj.toExponential(1000));
}catch (e){
  print(e);
}

document.write("</p>");
