(function(){

  let $html = document.querySelector("html");
  let $btn = document.querySelector(".header-nav__hamburgger");

  $html.classList.remove("no-js");
  $html.classList.add("js");

  $btn.addEventListener("click", function(){
   $html.classList.toggle("menu-opened")
  })

})()