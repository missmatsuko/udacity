const teamEls = document.querySelectorAll('.js-team');

teamEls.forEach(function(el){
  const buttonEl = el.querySelector('.js-button');
  const countEl = el.querySelector('.js-count');
  
  const counter = (function() {
    let count = 0;

    function increment() {
      count++;
    }

    function updateText() {
      countEl.innerText = count;
    }

    return {
      updateCount: function() {
        increment();
        updateText();
      }
    }
  })();
  
  buttonEl.addEventListener('click', counter.updateCount);
});
