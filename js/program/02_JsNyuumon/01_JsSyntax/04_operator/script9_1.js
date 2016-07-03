var num;

num = 0x15 << 2;
document.write("<p>0x15 &lt;&lt; 2 = " + num + "</p>");

num = 0x2A >> 2;
document.write("<p>0x2A &gt;&gt; 2 = " + num + "</p>");

num = 0xFF00002A >> 2;
document.write("<p>0xFF00002A &gt;&gt; 2 = " + num + "</p>");

num = 0xFF00002A >>> 2;
document.write("<p>0xFF00002A &gt;&gt;&gt; 2 = " + num + "</p>");
