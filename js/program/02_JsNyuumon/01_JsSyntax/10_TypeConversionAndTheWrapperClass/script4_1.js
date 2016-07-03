document.write("<p>");

document.write("東京都中央区日本橋" + "<br />");
document.write("東京都中央区日本橋".slice(0, 6) + "<br />");
document.write("東京都中央区日本橋".slice(3, 6) + "<br />");

document.write("</p>");

document.write("<p>");

var num = 0.0049874;
document.write(num + "<br />");
document.write(num.toExponential() + "<br />");
document.write(num.toExponential(2) + "<br />");

document.write("</p>");
