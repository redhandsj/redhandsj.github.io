function menseki(r){
  return 3.14 * r * r;
}

function enshu(r){
  return 2 * 3.14 * r;
}

var r = 10;

document.write("<p>");
document.write("半径 = " + r + "<br />");
document.write("円周 = " + enshu(r) + "<br />");
document.write("面積 = " + menseki(r));
document.write("</p>");
