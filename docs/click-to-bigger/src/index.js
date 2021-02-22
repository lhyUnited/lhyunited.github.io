// 常量声明
const img = document.querySelector('.main img');
const biggerWrapper = document.querySelector('.bigger-wrapper');
const biggerImg = document.querySelector('.img-wrapper img');

const bigger = (e) => {
  biggerWrapper.style.display = 'block'
  const source = e.target.getAttribute('src')
  biggerImg.setAttribute('src', source)
}

const closeModal = () => {
  biggerWrapper.style.display = 'none'
}

img.addEventListener('click', bigger);
biggerImg.addEventListener('click', closeModal)