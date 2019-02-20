// script fur Header und Footer
document.body.onload=function(){
  var header='';
  header+='<a href="index.html" alt="Home"><img src="logo.svg" width=40></a>';
  header+='<a href="adp.html">Arten der Parfüme</a>';
  header+='<a href="marken.html">Marken</a>';
  header+='<a href="auftragen.html">Auftrage Stellen</a>';
  header+='<a href="haltbarkeit.html">Haltbarkeit</a>';
  header+='<a href="top.html">Die besten Düfte</a>';
  header+='<a href="aboutus.html">Über uns</a>';
  document.body.getElementsByClassName("header")[0].innerHTML=header;
  
  var footer='';
  footer+='<br>';
  document.body.getElementsByClassName("footer")[0].innerHTML=footer;
}
