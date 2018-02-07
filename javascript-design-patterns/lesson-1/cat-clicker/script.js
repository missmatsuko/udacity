// Increment each cat's count on click
const teamEls = document.querySelectorAll('.js-team');

teamEls.forEach(function(el){
  const buttonEl = el.querySelector('.js-button');
  const countEl = el.querySelector('.js-count');

  let count = 0;

  buttonEl.addEventListener('click', function() {
    count++;
    countEl.innerText = count;
  });
});

// Toggle which cat is displayed
toggleTeam = function(event) {
  event.preventDefault();

  const activeEls = document.querySelectorAll('.active');
  const targetEl = event.target;
  const selectedEl = document.querySelector(targetEl.hash);

  activeEls.forEach(function(el){
    el.classList.remove('active');
  });
  targetEl.classList.add('active');
  selectedEl.classList.add('active');
  selectedEl.focus();
}

document.querySelectorAll('.js-nav a').forEach(function(el){
  el.addEventListener('click', toggleTeam);
});
