var num = 30;
document.write("<p>num = " + num + "</p>");

document.write("<p>num > 5 && num < 20  --> ");
document.write(num > 5 && num < 20);
document.write("</p>");

document.write("<p>num > 20 || num < 10  --> ");
document.write(num > 20 || num < 10);
document.write("</p>");

document.write("<p>!(num < 20)  --> ");
document.write(!(num < 20));
document.write("</p>");

document.write("<p>0 && 'End'  --> ");
document.write(0 && "End");
document.write("</p>");

document.write("<p>1 && 'End'  --> ");
document.write(1 && "End");
document.write("</p>");
