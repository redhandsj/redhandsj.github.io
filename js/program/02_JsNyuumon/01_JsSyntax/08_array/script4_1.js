var ary = ['Tokyo', 'Osaka'];
ary[2] = 'Nagoya';
ary[5] = 'Sapporo';

document.write("<p>");

for (var i = 0; i < 6; i++){
  document.write(ary[i] + "<br />");
}

document.write("</p>");
