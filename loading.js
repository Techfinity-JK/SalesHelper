const messages = [
  "How are you today?",
  "You can sort by clicking the appropriate checkboxes.",
  "Stay hydrated, with coffee ofcourse.",
  "Loading biometric data...",
  "Initializing product catalog...",
  "Just a moment...",
  "Bringing everything online...",
  "JK likes watermelon flavored Zagu.",
  "I hope your client goes easy on you today.",
  "Remember to do your sales report after this!",
  "Put everything in the excel database alright?",
  "Break time soon?",
  "Techfinity is founded in 2015.",
  "Planning the Door Access Update...",
  "My creator is born in the month of October.",
];

// Pick a random message
const randomMessage = messages[Math.floor(Math.random() * messages.length)];
document.getElementById('loading-message').textContent = randomMessage;

// Set it on the loading screen
window.addEventListener('DOMContentLoaded', () => {
  const loaderText = document.querySelector('loading-message');
  loaderText.textContent = randomMessage;
});

window.addEventListener('load', () => {
  const loader = document.getElementById('loading-screen');
  const content = document.getElementById('main-content');

  setTimeout(() => {
    loader.style.opacity = '0'; // Start fade out

    // Wait for the fade to finish (match transition duration)
    setTimeout(() => {
      loader.style.display = 'none';
      content.style.display = 'block';
    }, 600); // Matches transition: 0.6s
  }, 2000); // Delay before hiding
});


