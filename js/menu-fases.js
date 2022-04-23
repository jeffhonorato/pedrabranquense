const tabMenu = document.querySelectorAll(".js-tabela-menu a");
const tabConteudo = document.querySelectorAll(".tabela .fase__1");
tabConteudo[0].classList.add("ativo")

const activeTab = (index) => {

    tabConteudo.forEach((conteudo) => {
        conteudo.classList.remove("ativo");
    });


    tabConteudo[index].classList.add("ativo");
}

tabMenu.forEach((itemMenu, index) => {
    itemMenu.addEventListener("click", () => {
        activeTab(index);
    })
})