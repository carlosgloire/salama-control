const icon = document.querySelector("#menu_icon")
    const barMenu = document.querySelector(".menu_bar")

    icon .addEventListener('click',()=>{
    barMenu.classList.toggle('mobile-menu')
    })