var siteurl = {
  'Yahoo Japan!':'http://www.yahoo.co.jp/',
  'Google':'http://www.google.co.jp/',
  'Microsoft':'http://www.microsoft.com/japan/',
  'Amazon':'http://www.amazon.co.jp/'
};

document.write("<p>");

var site;

site = 'Amazon';
document.write(site + "のURLは" + siteurl[site] + "です<br />");

site = 'Yahoo Japan!';
document.write(site + "のURLは" + siteurl[site] + "です<br />");

document.write("</p>");
