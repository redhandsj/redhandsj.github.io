function print(str){
  document.write(str + "<br />");
}

function slicestr(start){
  print("開始位置 : " + start);

  var index = str_obj.lastIndexOf(substr, start);

  print("出現位置 : " + index);

  str1 = str_obj.slice(0, index);
  str2 = str_obj.slice(index, index + substr.length);
  str3 = str_obj.slice(index + substr.length);

  print(str1 + "[" + str2 + "]" + str3);
}

var str_obj = "東京,大阪,神奈川,大阪,東京,大阪";
var substr = "大阪";

document.write("<p>");

print("対象文字列 : " + str_obj);
print("検索文字列 : " + substr);

document.write("</p>");

document.write("<p>");

slicestr(str_obj.length - 1);

document.write("</p>");

document.write("<p>");

slicestr(8);

document.write("</p>");
