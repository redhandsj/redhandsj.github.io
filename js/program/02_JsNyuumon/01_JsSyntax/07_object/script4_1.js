var obj = {"2007year":245, "2008year":312, "2009year":193};

document.write("<p>");

for (var i = 2007; i <= 2009 ; i++){
  var name = i + "year";
  document.write(name + " is " + obj[name] + "<br />");
}

document.write("</p>");

var sum = 0;

for (var pname in obj){
  sum += obj[pname];
}

document.write("<p>");

document.write("Total = " + sum);

document.write("</p>");
