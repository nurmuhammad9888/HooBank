let burgerBtn = document.querySelector('.burger')
let siteNav = document.querySelector('.sitenav')

burgerBtn.addEventListener('click', function() {
    siteNav.classList.toggle('sitenav-open')
    burgerBtn.classList.toggle('burger-btn-open')
})