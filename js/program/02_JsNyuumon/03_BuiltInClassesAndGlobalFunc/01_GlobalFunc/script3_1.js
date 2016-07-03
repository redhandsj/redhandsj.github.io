function nanCheck(val){
  if (isNaN(val)){
    document.write("○ " + val + "<br />");
  }else{
    document.write("× " + val + "<br />");
  }
}

document.write("<p>");
document.write("NaN?<br />");

nanCheck(10);
nanCheck(NaN);
nanCheck(Infinity);
nanCheck(null);
nanCheck(undefined);
nanCheck("39");
nanCheck("10nen");
nanCheck(parseInt("10nen"));
nanCheck(true);
nanCheck(false);
nanCheck([10, 9]);
nanCheck(new Number(87));

document.write("</p>");
