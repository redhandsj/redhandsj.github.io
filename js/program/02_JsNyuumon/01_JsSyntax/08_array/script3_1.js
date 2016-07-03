var week = ['Sun', 'Mon', 'Tue'];

document.write("<p>");

for (var i = 0; i < 3; i++){
  document.write(week[i] + "<br />");
}

document.write("</p>");

week[0] = '日曜日';
week[2] = 'Tuesday';

document.write("<p>");

for (var i = 0; i < 3; i++){
  document.write(week[i] + "<br />");
}

document.write("</p>");
