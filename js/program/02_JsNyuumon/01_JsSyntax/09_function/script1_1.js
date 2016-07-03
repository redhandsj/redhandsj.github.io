function hikaku(n1, n2){
  document.write("<p>");

  if (n1 > n2){
    document.write(n1 + "と" + n2 + "では" + n1 + "が大きい");
  }else{
    document.write(n1 + "と" + n2 + "では" + n2 + "が大きい");
  }

  document.write("</p>");
}

hikaku(30, 42);
hikaku(82, 16);
