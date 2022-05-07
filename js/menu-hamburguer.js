const menuBola = document.querySelector("[data-menu-bola]");
    menuBola.addEventListener("click", () => {
        const nav = document.querySelector("[data-nav-menu]");
        nav.classList.toggle("ativo")
    })