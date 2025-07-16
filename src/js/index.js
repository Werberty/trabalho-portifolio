document.addEventListener('DOMContentLoaded', () => {
    // Após o documento HTML carregar, é adicionado o evento de click
    // em todos os links da barra de navegação que chama a função changeActiveTab
    const navLinks = document.querySelectorAll('ul.nav-links a')
    navLinks.forEach((nav) => {
        nav.addEventListener('click', changeActiveTab)
    })
})

function disableAllActived() {
    // Remove todas as classes 'active' das tabs e das nav-links
    const tabsActived = document.querySelectorAll('.tab.active')
    const linksActived = document.querySelectorAll('.nav-links li.active')
    tabsActived.forEach((tab) => {
        tab.classList.remove('active')
    })
    linksActived.forEach((link) => {
        link.classList.remove('active')
    })
}

function changeActiveTab(event) {
    let link = event.target // link que foi clicado pelo usuário
    let tab = document.querySelector(link.getAttribute('href')) // A páginao ou 'tab' referente a este link clicado
    disableAllActived()
    tab.classList.add('active') // Adiciona a classe 'active' para que a página apareça
    link.parentNode.classList.add('active') // Adiciona a classe 'active' para mostrar qual link estar ativo
}