const buttonEl = document.querySelector('.js-button');
const countEl = document.querySelector('.js-count');

const count = (function() {
  let counter = 0;

  function increment() {
    counter++;
  }

  function updateText() {
    countEl.innerText = counter;
  }

  return {
    updateCount: function() {
      increment();
      updateText();
    }
  }
})();

buttonEl.addEventListener('click', count.updateCount);
