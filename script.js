document.addEventListener('DOMContentLoaded', (event) => {
  // Get all input fields
  const inputs = document.querySelectorAll('input[type="text"]');

  inputs.forEach(input => {
    input.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        e.preventDefault(); // Stop the default form submit
        this.nextElementSibling.click(); // Trigger the click on the submit button next to this input
      }
    });
  });
});

function checkAnswer(questionNumber, correctAnswer) {
  var userAnswer = document.getElementById('answer' + questionNumber).value;
  var feedbackElement = document.getElementById('feedback' + questionNumber);

  // Check if the answer is correct
  if(userAnswer.trim().toLowerCase() === correctAnswer.toLowerCase()) {
    feedbackElement.textContent = 'Correct! ✓';
    feedbackElement.className = 'correct';
  } else {
    feedbackElement.textContent = 'Incorrect. ✗ Try again!';
    feedbackElement.className = 'wrong';
  }
}
