var obj = {width:100, height:80};

document.write("<p>");

document.write("width = " + obj.width + ", height = " + obj.height);

document.write("</p>");

obj.width = 150;
obj.height = obj.width * 0.8;

document.write("<p>");

document.write("width = " + obj.width + ", height = " + obj.height);

document.write("</p>");
