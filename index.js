var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

flag = 0;

function changeColor()
{

  flag = !flag;
  if (flag)
  {
    img = "url('./images/background1.jpg')"
  } 
  else
  {
    img = "url('./images/background2.jpg')"
  }
  alert("Hello world!");

  document.body.style.background = img;
  var all = document.getElementsByTagName("*");
  for (var i=0, max=all.length; i < max; i++) {
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    all[i].style.color = randomColor;
  }
}

