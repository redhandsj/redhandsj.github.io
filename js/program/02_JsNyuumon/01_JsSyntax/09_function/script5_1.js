var heikin = (function(x, y){return (x + y) / 2;});

document.write("<p>");
document.write("平均 = " + heikin(10, 8));
document.write("</p>");

var num = (function(x, y){if (x < y) return y - x; else return x - y;})(23, 11);

document.write("<p>");
document.write("差分 = " + num);
document.write("</p>");
