const submitButton = document.querySelector('.overview__form [type=submit]');
submitButton.addEventListener('click', (event) => {
  event.preventDefault();
  submitButton.classList.toggle('btn--active');
});


const likeButton = document.querySelector('.overview__like-btn');
likeButton.addEventListener('click', () => {
  likeButton.classList.toggle('overview__like-btn--active');
});
