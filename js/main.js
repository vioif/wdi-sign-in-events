var signInButton = document.querySelector('.signin');
var modal = document.querySelector('.modal');
var closeButton = document.querySelector('.close');
var submitButton = document.querySelector('.submit');
var UserInput = document.querySelector('#user');
var passwordInput = document.querySelector('#pass');

signInButton.addEventListener('click', function(){
  modal.style.display = 'block';
});

closeButton.addEventListener('click', function(){
  modal.style.display = 'none';
});

submitButton.addEventListener('click', function(){
 userInput.classList.add('error');
 passwordInput.classList.add('error');
});

userInput.addEventListener('click', function(){
  userInput.classList.remove('error');
});

passwordInput.addEventListener('click', function(){
  passwordInput.classList.remove('error');
});
