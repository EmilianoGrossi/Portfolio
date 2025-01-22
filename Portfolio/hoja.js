const nav = document.querySelector(".header-seccion-primario");

    window.addEventListener("scroll", function(){
        nav.classList.toggle("abajo", window.scrollY>0);
    })