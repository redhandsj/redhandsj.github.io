function print(str){
  document.write(str + "<br />");
}

var num_obj;

document.write("<p>");

num_obj = new Number(10);
print(num_obj);

num_obj = new Number("abc");
print(num_obj);

print("Number.NaN = " + Number.NaN);
print("Number.POSITIVE_INFINITY = " + Number.POSITIVE_INFINITY);
print("Number.NEGATIVE_INFINITY = " + Number.NEGATIVE_INFINITY);
print("Number.MAX_VALUE = " + Number.MAX_VALUE);
print("Number.MIN_VALUE = " + Number.MIN_VALUE);

document.write("</p>");
