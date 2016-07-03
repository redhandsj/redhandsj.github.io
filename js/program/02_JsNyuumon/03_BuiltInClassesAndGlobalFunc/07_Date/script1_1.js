function print(str){
  document.write(str + "<br />");
}

document.write("<p>");

print(new Date());
print(new Date(18000));
print(new Date("2009/08/10 14:24:32"));
print(new Date("2009/08/10 14:24:32 GMT-0800"));
print(new Date("2009/08/10 14:24:32 UTC-0800"));
print(new Date(2005, 3));

document.write("</p>");
