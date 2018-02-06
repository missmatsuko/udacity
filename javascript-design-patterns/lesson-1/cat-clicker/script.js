const teamEls = document.querySelectorAll('.js-team');

teamEls.forEach(function(el) {
  const buttonEl = el.querySelector('.js-button');
  const countEl = el.querySelector('.js-count');

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
});
