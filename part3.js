// Reusable function to toggle a CSS class
    function toggleClass(element, className) {
      element.classList.toggle(className);
    }

    // Animate box on button click
    const box = document.getElementById('box');
    document.getElementById('animateBtn').addEventListener('click', () => {
      toggleClass(box, 'animate');
    });

    // Flip card on click
    const card = document.getElementById('card');
    card.addEventListener('click', () => {
      toggleClass(card, 'flip');
    });

    // Toggle spinner visibility
    const spinner = document.getElementById('spinner');
    document.getElementById('toggleSpinnerBtn').addEventListener('click', () => {
      spinner.style.display = spinner.style.display === 'block' ? 'none' : 'block';
    });

    // Show modal and auto-hide after 2 seconds
    const modal = document.getElementById('modal');
    document.getElementById('showModalBtn').addEventListener('click', () => {
      modal.classList.add('show');
      setTimeout(() => {
        modal.classList.remove('show');
      }, 2000);
    });