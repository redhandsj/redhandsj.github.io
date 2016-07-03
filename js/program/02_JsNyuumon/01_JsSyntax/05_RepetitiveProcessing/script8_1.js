var personal = {
  name:'加藤',
  old:28,
  address:'東京都',
  email:'katou@example.com'
}

document.write("<p>");

for(var pname in personal){
  document.write(pname + " : " + personal[pname] + "<br />");
}

document.write("</p>");
