function finiteCheck(val){
  if (isFinite(val)){
    document.write("○ " + val + "<br />");
  }else{
    document.write("× " + val + "<br />");
  }
}

document.write("<p>");
document.write("isFinite?<br />");

finiteCheck(10);
finiteCheck(3.14);
finiteCheck(2.4e-3);
finiteCheck(Infinity);
finiteCheck(-Infinity);
finiteCheck(Number.POSITIVE_INFINITY);
finiteCheck(Number.NEGATIVE_INFINITY);
finiteCheck(Number.MAX_VALUE);
finiteCheck(Number.MIN_VALUE);
finiteCheck(NaN);

document.write("</p>");
