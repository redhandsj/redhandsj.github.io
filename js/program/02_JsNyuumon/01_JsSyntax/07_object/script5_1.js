var obj = {Tokyo:92, Osaka:85};

obj.Nagoya = 104;
obj["Fukuoka"] = 67;

document.write("<p>");

for (var pname in obj){
  document.write(pname + " = " + obj[pname] + "<br />");
}

document.write("</p>");

delete obj.Tokyo;
delete obj["Nagoya"];

document.write("<p>");

for (var pname in obj){
  document.write(pname + " = " + obj[pname] + "<br />");
}

document.write("</p>");
