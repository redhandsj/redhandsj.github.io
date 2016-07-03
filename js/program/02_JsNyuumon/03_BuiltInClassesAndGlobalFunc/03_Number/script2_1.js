function print(str){
  document.write(str + "<br />");
}

document.write("<p>");

var num_obj = new Number(15);
print("2進数 " + num_obj.toString(2));
print("8進数 " + num_obj.toString(8));
print("10進数 " + num_obj.toString(10));
print("16進数 " + num_obj.toString(16));

document.write("</p>");
