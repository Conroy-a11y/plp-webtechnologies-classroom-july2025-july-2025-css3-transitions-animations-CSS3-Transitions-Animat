let globalMultiplier = 2;

    // Function to animate a box by adding a class
    function animateBox(boxId, times) {
      const box = document.getElementById(boxId);

      // LOCAL variable
      let count = 0;

      const interval = setInterval(() => {
        box.classList.toggle('animate');
        count++;
        if (count >= times * 2) { // times*2 because toggle flips twice per interval
          clearInterval(interval);
        }
      }, 500);
    }

    // Function to calculate sum of two numbers and multiply by a global multiplier
    function calculateSum(a, b) {
      return (a + b) * globalMultiplier;
    }

    // Function to trigger animations on multiple boxes
    function animateAllBoxes(times) {
      animateBox('box1', times);
      animateBox('box2', times);
    }

    // Event listeners
    document.getElementById('animateBtn').addEventListener('click', () => {
      animateAllBoxes(3); // Animate boxes 3 times
    });

    document.getElementById('calcBtn').addEventListener('click', () => {
      const result = calculateSum(5, 7); // Uses parameters + global scope
      document.getElementById('result').textContent = `Result: ${result}`;
    });

    //Part3

     // Reusable function to toggle a class on an element
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

    // Show modal with auto-hide
    const modal = document.getElementById('modal');
    document.getElementById('showModalBtn').addEventListener('click', () => {
      modal.classList.add('show');
      setTimeout(() => {
        modal.classList.remove('show');
      }, 2000); // hides after 2 seconds
    });
