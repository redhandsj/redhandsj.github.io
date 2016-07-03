function print(str){
  document.write(str + "<br />");
}

document.write("<p>");

print("parseInt('10') = " + parseInt("10"));
print("parseInt('2008year') = " + parseInt("2008year"));
print("parseInt('-77point') = " + parseInt("-77point"));
print("parseInt('Book170') = " + parseInt("Book170"));
print("parseInt('0x3F_01') = " + parseInt("0x3F_01", 16));

print("parseInt('11', 2) = " + parseInt("11", 2));
print("parseInt('11', 8) = " + parseInt("11", 8));
print("parseInt('11', 10) = " + parseInt("11", 10));
print("parseInt('11', 16) = " + parseInt("11", 16));

print("parseInt('') = " + parseInt(""));

document.write("</p>");
