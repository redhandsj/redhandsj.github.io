var num;

num = 0x55 & 0x0F;
document.write("<p>0x55 & 0x0F = " + num + "</p>");

num = 0x55 | 0x0F;
document.write("<p>0x55 | 0x0F = " + num + "</p>");

num = 0x55 ^ 0x0F;
document.write("<p>0x55 ^ 0x0F = " + num + "</p>");

num = ~0x55;
document.write("<p>~0x55 = " + num + "</p>");
