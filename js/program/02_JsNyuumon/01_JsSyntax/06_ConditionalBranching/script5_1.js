var answer = [1, 3, 2, 5, 3, 4, 2, 5, 1, 3, 1]

document.write("<p>");
document.write("アンケートの結果です<br />");

for(var i = 0; i < answer.length; i++){
  document.write("回答[" + (i + 1) + "] ");

  switch(answer[i]){
    case 1:
    case 2:
      document.write("満足です");
      break;
    case 3:
      document.write("どちらでもない");
      break;
    case 4:
    case 5:
      document.write("不満足です");
      break;
    default:
      document.write("有効な値ではありません");
      break;
  }

  document.write("(" + answer[i] + ")<br />");
}

document.write("</p>");
