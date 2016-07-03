var answer = [1, 3, 2, 7, 3, 1]

document.write("<p>");

document.write("アンケートの結果です<br />");

for(var i = 0; i < answer.length; i++){
  document.write("回答[" + (i + 1) + "] ");

  switch(answer[i]){
    case 1:
      document.write("満足です<br />");
      break;
    case 2:
      document.write("どちらでもない<br />");
      break;
    case 3:
      document.write("不満足です<br />");
      break;
    default:
      document.write("有効な値ではありません<br />");
      break;
  }
}

document.write("</p>");
