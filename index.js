// get input element and error message element from the DOM
const emailInput = document.querySelector('#add');
const emailError = document.querySelector('.mail-para');

// add event listener to the submit button
document.querySelector('.btn').addEventListener('click', (e) => {
  e.preventDefault(); // prevent the form from submitting
  const email = emailInput.value; // get the email from the input

  // regular expression to check if the email is valid
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email || !email.match(emailPattern)) {
    // if email is empty or not valid, show error message and change border color
    emailError.style.display = 'block';
    emailInput.style.borderColor = 'hsl(354, 100%, 66%)';
  } else {
    // if email is valid, hide error message and change border color back to default
    emailError.style.display = 'none';
    emailInput.style.borderColor = '';
  }
});

// add event listener to the email input to hide error message and change border color back to default when user focuses on the input
emailInput.addEventListener('focus', () => {
  emailError.style.display = 'none';
  emailInput.style.borderColor = '';
});
