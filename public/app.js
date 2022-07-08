const mobileMenuButton = document.getElementById('mobileMenuButton')
const mobileMenuItems = document.getElementById('mobileMenuItems')

mobileMenuButton.addEventListener('click', () => {
    mobileMenuButton.classList.toggle('bg-gray-200')
    mobileMenuItems.classList.toggle('flex')
    mobileMenuItems.classList.toggle('hidden')
})