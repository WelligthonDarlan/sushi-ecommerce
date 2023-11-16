const cart = document.getElementById('cart')
const containerCart = document.getElementById('containerCart')
const contentCart = document.getElementById('contentCart')

cart.addEventListener('click', () => {
  containerCart.style.display = 'block'
  document.documentElement.style.overflow = 'hidden';
})
containerCart.addEventListener('click', () => {
  containerCart.style.display = 'none'
  document.documentElement.style.overflow = 'auto';
})